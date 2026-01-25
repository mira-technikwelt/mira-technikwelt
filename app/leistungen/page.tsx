import type { Metadata } from "next";
import LeistungenPage from './leistungenPage';

export const metadata: Metadata = {
  title: "Technik-Service Backnang | Fernseher, PC, Router & Smart Home einrichten",
  description: "Umfassender Technik-Service in Backnang, Winnenden & Waiblingen ✓ Fernseher einrichten ✓ Computer-Hilfe ✓ WLAN-Installation ✓ Smart Home ✓ Gaming-PC ✓ Festpreise",
  
  keywords: [
    "Technik-Service Backnang",
    "Fernseher einrichten Winnenden",
    "Computer Hilfe Waiblingen",
    "Router Installation Backnang",
    "Smart Home Einrichtung",
    "Gaming PC Backnang",
    "WLAN optimieren",
    "IT Service Rems-Murr-Kreis"
  ],
  
  openGraph: {
    title: "Alle Technik-Services | MIRA Technikwelt Backnang",
    description: "Von Fernseher bis Gaming-PC – wir bieten umfassenden Technik-Service in Backnang und Umgebung. Persönlich, verständlich, zuverlässig.",
    url: "https://mira-technikwelt.de/leistungen",
    siteName: "MIRA Technikwelt",
    locale: "de_DE",
    type: "website",
  },
  
  alternates: {
    canonical: "https://mira-technikwelt.de/leistungen"
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <LeistungenPage />;
}