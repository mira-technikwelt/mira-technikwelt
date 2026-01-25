# Setup-Anleitung: Google Reviews Integration

## 1. Google Places API einrichten

### API Key erstellen:
1. Gehe zu [Google Cloud Console](https://console.cloud.google.com/)
2. Erstelle ein neues Projekt oder wähle ein bestehendes aus
3. Aktiviere die **Places API**:
   - Navigiere zu "APIs & Services" > "Library"
   - Suche nach "Places API"
   - Klicke auf "Enable"
4. Erstelle einen API Key:
   - Gehe zu "APIs & Services" > "Credentials"
   - Klicke auf "Create Credentials" > "API Key"
   - Kopiere den API Key

### Place ID finden:
1. Nutze das [Place ID Finder Tool](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Oder suche dein Geschäft auf Google Maps und extrahiere die Place ID aus der URL

## 2. Environment-Variablen konfigurieren

Erstelle eine `.env.local` Datei im Root-Verzeichnis:

```bash
GOOGLE_PLACES_API_KEY=dein_google_places_api_key
GOOGLE_PLACE_ID=deine_place_id
```

## 3. Wie es funktioniert

Die Integration besteht aus zwei Teilen:

### API Route (`app/api/google-reviews/route.ts`):
- Ruft die Google Places API auf
- Holt aktuelle Reviews und Bewertungen
- Cached die Daten für 1 Stunde
- Gibt formatierte Review-Daten zurück

### ReviewsSection Component (`components/ReviewsSection.jsx`):
- Lädt Reviews dynamisch beim Mount
- Zeigt Profilbilder, Namen, Zeitstempel und Bewertungen
- Fallback auf statische Reviews bei API-Fehler
- Responsive Design für Desktop und Mobile
- 3D Card-Effekte auf Desktop
- Stack-Carousel auf Mobile mit Swipe-Funktion

## 4. Features

✅ Automatische Updates (stündlich gecached)  
✅ Echte Google Reviews mit Profilbildern  
✅ Durchschnittsbewertung und Anzahl der Bewertungen  
✅ Responsive Design  
✅ Loading State  
✅ Fallback auf statische Reviews bei Fehler  
✅ Zeigt relative Zeitstempel ("vor 2 Wochen")  

## 5. Kosten

Die Google Places API hat ein kostenloses Kontingent:
- Erste 200.000 Anfragen pro Monat sind kostenlos
- Bei normalem Traffic sollten keine Kosten anfallen
- Caching reduziert die Anzahl der API-Aufrufe

## 6. Testen

Nach dem Setup:
```bash
npm run dev
```

Die Reviews sollten jetzt dynamisch von Google geladen werden!
