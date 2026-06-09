import type { Metadata } from "next";
import ServiceGebietePage from '@/app/service-gebiete/serviceGebietePage';

export const metadata: Metadata = {
  title: "Service-Gebiete Backnang | Winnenden, Waiblingen, Stuttgart & Region",
  description: "MIRA Technikwelt ist für Sie da: Von Backnang über Winnenden, Waiblingen, Ludwigsburg bis Stuttgart und die gesamte Region ✓ Vor-Ort-Service ✓ Faire Fahrtkosten",
  
  keywords: [
    "Technik-Service Backnang",
    "IT Service Winnenden",
    "Computer Hilfe Waiblingen",
    "PC Service Ludwigsburg",
    "Technik Service Stuttgart",
    "Rems-Murr-Kreis",
    "Service-Gebiet",
    "Vor-Ort-Service Region Stuttgart"
  ],
  
  openGraph: {
    title: "Service-Gebiete | MIRA Technikwelt Backnang",
    description: "Wir sind für Sie da: Von Backnang über Winnenden, Waiblingen bis Stuttgart - Technik-Service in der gesamten Region.",
    url: "https://www.mira-technikwelt.de/service-gebiete",
    siteName: "MIRA Technikwelt",
    locale: "de_DE",
    type: "website",
  },
  
  alternates: {
    canonical: "https://www.mira-technikwelt.de/service-gebiete"
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ServiceGebietePage />;
}