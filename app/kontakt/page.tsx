import type { Metadata } from "next";
import KontaktPage from '@/app/kontakt/kontaktPage';

export const metadata: Metadata = {
  title: "Kontakt | MIRA Technikwelt Backnang - Jetzt anrufen oder schreiben",
  description: "Kontaktieren Sie MIRA Technikwelt in Backnang ✓ Telefon: 0155 63168737 ✓ WhatsApp ✓ E-Mail ✓ Schnelle Antwort ✓ Kostenlose Beratung",
  
  keywords: [
    "Kontakt MIRA Technikwelt",
    "Technik Service Backnang Kontakt",
    "IT Hilfe Backnang anrufen",
    "Computer Service Kontakt",
    "Technik Beratung Backnang"
  ],
  
  openGraph: {
    title: "Kontakt | MIRA Technikwelt Backnang",
    description: "Kontaktieren Sie uns: Telefon 0155 63168737, WhatsApp oder E-Mail - Wir sind für Sie da!",
    url: "https://mira-technikwelt.de/kontakt",
    siteName: "MIRA Technikwelt",
    locale: "de_DE",
    type: "website",
  },
  
  alternates: {
    canonical: "https://mira-technikwelt.de/kontakt"
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <KontaktPage />;
}