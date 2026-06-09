import type { Metadata } from "next";
import UeberUnsPage from '@/app/ueber-uns/ueberUnsPage';

export const metadata: Metadata = {
  title: "Über uns | MIRA Technikwelt Backnang - Zwei Brüder, eine Mission",
  description: "Lernen Sie Raphael und Micka kennen - die Gründer von MIRA Technikwelt ✓ Persönlicher Service ✓ Verständliche Erklärungen ✓ Vor-Ort-Beratung in Backnang",
  
  keywords: [
    "MIRA Technikwelt Team",
    "Technik Service Backnang",
    "IT Beratung persönlich",
    "Computer Hilfe Backnang",
    "Über MIRA Technikwelt"
  ],
  
  openGraph: {
    title: "Über uns | MIRA Technikwelt Backnang",
    description: "Zwei Brüder mit einer Mission: Technik soll einfach sein. Lernen Sie Raphael und Micka kennen.",
    url: "https://www.mira-technikwelt.de/ueber-uns",
    siteName: "MIRA Technikwelt",
    locale: "de_DE",
    type: "website",
  },
  
  alternates: {
    canonical: "https://www.mira-technikwelt.de/ueber-uns"
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* Schema.org Markup für Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Über MIRA Technikwelt",
            "description": "Lernen Sie die Gründer von MIRA Technikwelt kennen - Raphael und Micka, zwei Brüder mit der Mission, Technik für jeden verständlich zu machen.",
            "url": "https://www.mira-technikwelt.de/ueber-uns",
            "mainEntity": {
              "@type": "Organization",
              "name": "MIRA Technikwelt",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Raphael",
                  "jobTitle": "Mitgründer & Technik-Experte"
                },
                {
                  "@type": "Person",
                  "name": "Micka",
                  "jobTitle": "Mitgründer & Kundenberater"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Backnang",
                "addressRegion": "Baden-Württemberg",
                "addressCountry": "DE"
              }
            }
          })
        }}
      />
      <UeberUnsPage />
    </>
  );
}