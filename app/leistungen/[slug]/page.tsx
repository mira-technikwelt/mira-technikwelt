import type { Metadata } from "next";
import LeistungDetailPage from '@/app/leistungen/[slug]/LeistungenDetailPage';

// Metadata pro Slug
function getMetadata(slug: string): Metadata {
  const metadataMap: Record<string, Metadata> = {
    
    'fernseher-einrichtung': {
      title: "Fernseher einrichten Backnang | TV-Installation vor Ort ab 59€",
      description: "Professionelle Fernseher-Einrichtung in Backnang, Winnenden & Waiblingen - Sender sortieren, Apps installieren, Soundbar anschließen - ab 59€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/fernseher-einrichtung" }
    },
    
    'computer-laptop-einrichtung': {
      title: "Computer & Laptop einrichten Backnang | Windows Installation ab 79€",
      description: "PC & Laptop professionell einrichten in Backnang - Windows installieren, Programme einrichten, Daten sicher übertragen - ab 79€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/computer-laptop-einrichtung" }
    },
    
    'router-wlan-einrichtung': {
      title: "WLAN & Router einrichten Backnang | Internet-Installation ab 69€",
      description: "Router & WLAN einrichten in Backnang, Winnenden & Waiblingen - Schnelles Internet, optimale Reichweite, maximale Sicherheit - ab 69€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/router-wlan-einrichtung" }
    },
    
    'smart-home-einrichtung': {
      title: "Smart Home einrichten Backnang | Alexa, Saugroboter & Co. ab 59€",
      description: "Smart Home Installation in Backnang - Alexa einrichten, Saugroboter verbinden, smarte Beleuchtung - alles perfekt vernetzt - ab 59€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/smart-home-einrichtung" }
    },
    
    'smartphone-tablet-einrichtung': {
      title: "Smartphone & Tablet einrichten Backnang | iPhone, Samsung ab 49€",
      description: "Smartphone & Tablet professionell einrichten in Backnang - Apps, Kontakte, Fotos übertragen - iPhone, Samsung & Co. - ab 49€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/smartphone-tablet-einrichtung" }
    },
    
    'vor-ort-beratung-analyse': {
      title: "Technikberatung vor Ort Backnang | Persönliche IT-Beratung ab 49€",
      description: "Technikberatung bei Ihnen Zuhause in Backnang - Computer-Probleme lösen, WLAN optimieren, Kaufberatung - ab 49€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/vor-ort-beratung-analyse" }
    },
    
    'vertragspruefung-tarifvergleich': {
      title: "Vertragsprüfung & Tarifvergleich Backnang | Geld sparen ab 59€",
      description: "Internet-, Handy- und Streaming-Verträge optimieren in Backnang - Im Durchschnitt 20-40% sparen - ab 59€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/vertragspruefung-tarifvergleich" }
    },
    
    'gaming-pc-beratung': {
      title: "Gaming-PC Beratung Backnang | Hardware-Kaufberatung 49€",
      description: "Gaming-PC Kaufberatung in Backnang - Die richtige Hardware für dein Budget, optimal konfiguriert - 49€ pauschal",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/gaming-pc-beratung" }
    },
    
    'gaming-pc-aufbau-installation': {
      title: "Gaming-PC zusammenbauen Backnang | Professioneller Aufbau ab 119€",
      description: "Gaming-PC professionell zusammenbauen in Backnang - Hardware montieren, Windows installieren, optimieren - ab 119€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/gaming-pc-aufbau-installation" }
    },
    
    'online-pc-support': {
      title: "PC Fernwartung Backnang | Online-Support für Bestandskunden ab 29€",
      description: "Schnelle PC-Hilfe per Fernzugriff - Nur für Bestandskunden in Backnang und Umgebung - ab 29€ pro 30 Min",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/online-pc-support" }
    },
    
    'geraetekauf-im-auftrag': {
      title: "Gerätekauf-Service Backnang | Wir kaufen für Sie ab 30€",
      description: "Gerätekauf-Service in Backnang - Wir besorgen Technik zum besten Preis für Sie - Sie sparen Zeit - ab 30€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/geraetekauf-im-auftrag" }
    },
    
    'entsorgung-altgeraete': {
      title: "Elektroschrott entsorgen Backnang | Fachgerechte Entsorgung 14,99€",
      description: "Fachgerechte Entsorgung von Altgeräten in Backnang - Umweltfreundlich & legal - 14,99€ pauschal pro Gerät",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/entsorgung-altgeraete" }
    },
    
    'komplettloesung-technikpaket': {
      title: "Rundum-Sorglos-Paket Backnang | Komplettservice ab 249€",
      description: "Technik-Komplettservice in Backnang - Von Beratung bis Installation alles aus einer Hand - ab 249€",
      alternates: { canonical: "https://www.mira-technikwelt.de/leistungen/komplettloesung-technikpaket" }
    }
  };

  return metadataMap[slug] || {
    title: "Leistung nicht gefunden | MIRA Technikwelt",
    robots: { index: false, follow: false }
  };
}

// Metadata Generator
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return getMetadata(slug);
}

// Page Component
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LeistungDetailPage slug={slug} />;
}