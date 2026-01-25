import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const fallbackPlaceId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey) {
      throw new Error('GOOGLE_PLACES_API_KEY not set');
    }

    let placeId = fallbackPlaceId;

    // Versuche zuerst Text Search
    try {
      const searchQuery = 'MIRA-Technikwelt Backnang';
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=${apiKey}&language=de`;

      const response = await fetch(url, {
        method: 'GET',
        next: { revalidate: 3600 }
      });

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const searchData = await response.json();
      console.log('=== TEXT SEARCH RESPONSE ===');
      console.log(JSON.stringify(searchData, null, 2));
      
      if (searchData.results && searchData.results.length > 0) {
        placeId = searchData.results[0].place_id;
        console.log('Found Place ID:', placeId);
      } else {
        console.log('Text Search found no results, using fallback Place ID');
      }
    } catch (error) {
      console.log('Text Search failed, using fallback Place ID:', error);
    }

    if (!placeId) {
      throw new Error('No Place ID available');
    }

    // Hole Details mit dem Place ID

    // Jetzt hole die Details mit Reviews
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&language=de&key=${apiKey}`;

    const detailsResponse = await fetch(detailsUrl, {
      method: 'GET',
      next: { revalidate: 3600 }
    });

    const data = await detailsResponse.json();
    console.log('=== GOOGLE API FULL RESPONSE ===');
    console.log(JSON.stringify(data, null, 2));
    console.log('=== END RESPONSE ===');

    if (data.status !== 'OK') {
      console.error('Google API returned status:', data.status);
      console.error('Error message:', data.error_message);
      throw new Error(`Google API Status: ${data.status} - ${data.error_message || 'No error message'}`);
    }

    // Reviews formatieren
    const reviews = data.result.reviews?.map((review: unknown) => {
      const r = review as { author_name?: string; rating?: number; text?: string; time?: number; profile_photo_url?: string; relative_time_description?: string };
      return {
        name: r.author_name || 'Anonymer Nutzer',
        rating: r.rating || 5,
        text: r.text || '',
        time: r.time,
        profilePhoto: r.profile_photo_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(r.author_name || 'User')}&background=3b82f6&color=fff&size=128`,
        relativeTime: r.relative_time_description || 'Kürzlich'
      };
    }) || [];

    return NextResponse.json({
      rating: data.result.rating || 5.0,
      totalRatings: data.result.user_ratings_total || 0,
      reviews: reviews,
      source: 'google'
    });

  } catch (error) {
    console.error('Fehler beim Abrufen der Google Reviews:', error);
    return NextResponse.json(
      { 
        error: 'Fehler beim Laden der Reviews',
        details: error instanceof Error ? error.message : 'Unbekannt'
      },
      { status: 500 }
    );
  }
}
