import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) {
      console.error('GOOGLE_PLACES_API_KEY not configured');
      return NextResponse.json(
        { 
          error: 'API Key nicht konfiguriert',
          reviews: []
        },
        { status: 200 }
      );
    }

    // Place ID für MIRA Technikwelt - kann als Environment Variable überschrieben werden
    const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJ81MhHJXKmUcRH3zAnAAJX6E';
    
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&language=de&key=${apiKey}`;

    const detailsResponse = await fetch(detailsUrl, {
      method: 'GET',
      cache: 'no-store', // Verhindert Caching-Probleme
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!detailsResponse.ok) {
      console.error('Google API HTTP Error:', detailsResponse.status);
      throw new Error(`HTTP Error: ${detailsResponse.status}`);
    }

    const data = await detailsResponse.json();
    
    if (data.status === 'REQUEST_DENIED') {
      console.error('Google API Request denied:', data.error_message);
      return NextResponse.json(
        { 
          error: 'API Anfrage abgelehnt - bitte API Key und Einstellungen prüfen',
          details: data.error_message,
          reviews: []
        },
        { status: 200 }
      );
    }

    if (data.status !== 'OK') {
      console.error('Google API returned status:', data.status);
      console.error('Error message:', data.error_message);
      return NextResponse.json(
        { 
          error: `Google API Status: ${data.status}`,
          details: data.error_message,
          reviews: []
        },
        { status: 200 }
      );
    }

    // Reviews formatieren
    const reviews = data.result?.reviews?.map((review: unknown) => {
      const r = review as { 
        author_name?: string; 
        rating?: number; 
        text?: string; 
        time?: number; 
        profile_photo_url?: string; 
        relative_time_description?: string 
      };
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
      rating: data.result?.rating || 5.0,
      totalRatings: data.result?.user_ratings_total || 0,
      reviews: reviews,
      source: 'google',
      success: true
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      }
    });

  } catch (error) {
    console.error('Fehler beim Abrufen der Google Reviews:', error);
    return NextResponse.json(
      { 
        error: 'Fehler beim Laden der Reviews',
        details: error instanceof Error ? error.message : 'Unbekannt',
        reviews: [],
        success: false
      },
      { status: 200 }
    );
  }
}

// Optional: Explizite Runtime-Konfiguration für Edge
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
