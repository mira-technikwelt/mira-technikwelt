import type { Metadata } from "next";
import HomePage from './homePage';

export const metadata: Metadata = {
  title: "Technikberatung Backnang | PC, TV & Smart Home Einrichtung vor Ort",
  description: "Technikberatung in Backnang, Winnenden, Waiblingen & Stuttgart ✓ Fernseher, Computer, Router einrichten ✓ Persönlicher Service ✓ Festpreise ✓ Noch am selben Tag vor Ort",
  
  keywords: [
    "Technikberatung Backnang",
    "PC Einrichtung Winnenden",
    "Fernseher einrichten Waiblingen",
    "Router Installation Stuttgart",
    "Smart Home Backnang",
    "Computer Hilfe Rems-Murr-Kreis",
    "IT Service vor Ort",
    "Techniker Backnang",
    "Laptop einrichten",
    "WLAN optimieren"
  ],
  
  openGraph: {
    title: "MIRA Technikwelt - Ihre Technikexperten aus Backnang",
    description: "Wir richten Fernseher, Computer, Router & Smart Home ein. Persönlicher Service vor Ort in Backnang, Winnenden, Waiblingen & Stuttgart.",
    url: "https://www.mira-technikwelt.de",
    siteName: "MIRA Technikwelt",
    locale: "de_DE",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "MIRA Technikwelt - Technikberatung Backnang",
    description: "Persönlicher Service vor Ort | Festpreise | Schnelle Hilfe",
  },
  
  alternates: {
    canonical: "https://www.mira-technikwelt.de"
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <HomePage />;
}