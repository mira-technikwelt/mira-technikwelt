export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MIRA Technikwelt",
    "alternateName": "Mira-Technikwelt",
    "description": "Mobile Technikberatung und Einrichtung in Backnang und Umgebung. Wir richten Fernseher, Computer, Laptops, Router, Smart Home Geräte, Smartphones und Gaming-PCs ein. Persönliche Beratung vor Ort - wir kommen zu Ihnen nach Hause und erklären alles verständlich.",
    "image": "https://mira-technikwelt.de/logo.png",
    "telephone": "+4915563168737",
    "email": "info@mira-technikwelt.de",
    "url": "https://mira-technikwelt.de",
    "priceRange": "€€",
    
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Geschwister-Scholl-Straße 22",
      "addressLocality": "Backnang",
      "postalCode": "71522",
      "addressRegion": "Baden-Württemberg",
      "addressCountry": "DE"
    },
    
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.9467",
      "longitude": "9.4328"
    },
    
    "areaServed": [
      { "@type": "City", "name": "Backnang" },
      { "@type": "City", "name": "Winnenden" },
      { "@type": "City", "name": "Waiblingen" },
      { "@type": "City", "name": "Schorndorf" },
      { "@type": "City", "name": "Fellbach" },
      { "@type": "City", "name": "Aspach" },
      { "@type": "City", "name": "Oppenweiler" },
      { "@type": "City", "name": "Ludwigsburg" },
      { "@type": "City", "name": "Stuttgart" },
      { "@type": "City", "name": "Esslingen am Neckar" },
      { "@type": "City", "name": "Böblingen" },
      { "@type": "City", "name": "Sindelfingen" },
      { "@type": "City", "name": "Kornwestheim" },
      { "@type": "City", "name": "Bietigheim-Bissingen" },
      { "@type": "City", "name": "Leinfelden-Echterdingen" },
      { "@type": "City", "name": "Heilbronn" },
      { "@type": "City", "name": "Pforzheim" },
      { "@type": "City", "name": "Tübingen" },
      { "@type": "City", "name": "Reutlingen" },
      { "@type": "City", "name": "Aalen" }
    ],
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technik-Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fernseher Einrichtung",
            "description": "Sender sortieren, Geräte anschließen, Apps einrichten und mehr"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer & Laptop Einrichtung",
            "description": "Betriebssystem einrichten, Programme installieren, Daten übertragen und mehr"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Router & WLAN Einrichtung",
            "description": "Internet einrichten, WLAN optimieren, Netzwerk absichern und mehr"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Home Einrichtung",
            "description": "Drucker, Saugroboter, Alexa und weitere Geräte einrichten"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smartphone & Tablet Einrichtung",
            "description": "Apps installieren, Daten übertragen, Konten einrichten und mehr"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gaming PC Konfiguration & Aufbau",
            "description": "Hardware montieren, System installieren, Performance optimieren"
          }
        }
      ]
    },
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    "sameAs": [
      // Hier später eure Social Media URLs einfügen
      // "https://www.instagram.com/miratechnikwelt",
      // "https://www.facebook.com/miratechnikwelt"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}