import type { Metadata } from "next";
import GamingPCPage from '@/app/gaming-pc/gamingPCPage';

export const metadata: Metadata = {
  title: "Gaming-PC zusammenbauen Backnang | Beratung, Aufbau & Installation",
  description: "Gaming-PC professionell zusammenbauen in Backnang und Umgebung ✓ Individuelle Konfiguration ✓ Fachgerechter Aufbau ✓ Windows Installation ✓ Sofort spielbereit",
  
  keywords: [
    "Gaming PC Backnang",
    "Gaming PC zusammenbauen",
    "Gaming PC Aufbau Backnang",
    "Gaming PC Beratung Winnenden",
    "Custom PC Build",
    "Gaming PC Service Waiblingen"
  ],
  
  openGraph: {
    title: "Gaming-PC Service Backnang | Beratung, Aufbau & Installation",
    description: "Wir bauen deinen Traum-Gaming-PC: Individuelle Konfiguration, professioneller Aufbau, sofort spielbereit - in Backnang und Umgebung.",
    url: "https://mira-technikwelt.de/gaming-pc",
    siteName: "MIRA Technikwelt",
    locale: "de_DE",
    type: "website",
  },
  
  alternates: {
    canonical: "https://mira-technikwelt.de/gaming-pc"
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GamingPCPage />;
}