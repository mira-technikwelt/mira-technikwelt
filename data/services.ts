export interface Service {
  title: string;
  category: string;
  description: string;
  image: string;
  icon: string;
  slug: string;
  price: string;
}

export const services: Service[] = [
  {
    title: "Technikberatung vor Ort",
    category: "beratung",
    description: "Persönliche Beratung zu Computer, TV, WLAN und Smart Home & mehr",
    image: "/beratung_3.png",
    icon: "💡",
    slug: "vor-ort-beratung-analyse",
    price: "ab 49€"
  },
  {
    title: "Vertragsprüfung & Tarifcheck",
    category: "beratung",
    description: "Internet-, Handy-, Streaming- und Strom-Verträge optimieren",
    image: "/vertrag_3.png",
    icon: "📋",
    slug: "vertragspruefung-tarifvergleich",
    price: "ab 59€"
  },
  {
    title: "Fernseher einrichten",
    category: "installation",
    description: "TV-Installation, Sender sortieren, Soundsystem einrichten - schnell & einfach",
    image: "/tv.png",
    icon: "📺",
    slug: "fernseher-einrichtung",
    price: "ab 59€"
  },
  {
    title: "Computer & Laptop einrichten",
    category: "installation",
    description: "Windows installieren, Programme einrichten, Daten sicher übertragen",
    image: "/laptop.png",
    icon: "💻",
    slug: "computer-laptop-einrichtung",
    price: "ab 79€"
  },
  {
    title: "WLAN & Router einrichten",
    category: "installation",
    description: "Schnelles Internet, optimales WLAN, maximale Sicherheit für Zuhause",
    image: "/router.png",
    icon: "📡",
    slug: "router-wlan-einrichtung",
    price: "ab 69€"
  },
  {
    title: "Smart Home einrichten",
    category: "installation",
    description: "Sprachassistenten, Saugroboter, smarte Beleuchtung & mehr",
    image: "/smarthome.png",
    icon: "🏠",
    slug: "smart-home-einrichtung",
    price: "ab 59€"
  },
  {
    title: "Smartphone & Tablet einrichten",
    category: "installation",
    description: "Apps, Kontakte, Fotos übertragen - iPhone, Samsung & Co.",
    image: "/handy.png",
    icon: "📱",
    slug: "smartphone-tablet-einrichtung",
    price: "ab 49€"
  },
  {
    title: "Gaming-PC Kaufberatung",
    category: "gaming",
    description: "Die richtige Hardware für dein Budget - optimal konfiguriert",
    image: "/gamingpc_2.png",
    icon: "🎮",
    slug: "gaming-pc-beratung",
    price: "ab 49€"
  },
  {
    title: "Gaming-PC zusammenbauen",
    category: "gaming",
    description: "Professioneller Aufbau, Installation & Optimierung - spielbereit",
    image: "/gamingpc.png",
    icon: "🎮",
    slug: "gaming-pc-aufbau-installation",
    price: "ab 119€"
  },
  {
    title: "PC Fernwartung",
    category: "support",
    description: "Schnelle Online-Hilfe per Fernzugriff - nur für Bestandskunden",
    image: "/online_support.png",
    icon: "🖥️",
    slug: "online-pc-support",
    price: "ab 29€"
  },
  {
    title: "Gerätekauf-Service",
    category: "support",
    description: "Wir besorgen für Sie Geräte zum besten Preis - Sie sparen Zeit",
    image: "/ankauf.png",
    icon: "🛒",
    slug: "geraetekauf-im-auftrag",
    price: "ab 30€"
  },
  {
    title: "Elektroschrott entsorgen",
    category: "support",
    description: "Fachgerechte Entsorgung von Altgeräten - umweltfreundlich & legal",
    image: "/entsorgung.png",
    icon: "♻️",
    slug: "entsorgung-altgeraete",
    price: "ab 14,99€"
  },
  {
    title: "Rundum-Sorglos-Paket",
    category: "komplettloesung",
    description: "Von Beratung bis Installation - alles in einem Prozess",
    image: "/komplett.png",
    icon: "📦",
    slug: "komplettloesung-technikpaket",
    price: "ab 249€"
  }
];

export const categories = [
  { id: 'alle', label: 'Alle Leistungen' },
  { id: 'beratung', label: 'Beratung & Analyse' },
  { id: 'installation', label: 'Installation & Einrichtung' },
  { id: 'gaming', label: 'Gaming-PC' },
  { id: 'support', label: 'Support & Service' },
  { id: 'komplettloesung', label: 'Komplettlösungen' }
];
