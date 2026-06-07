
"use client";
import { notFound } from 'next/navigation';
import KontaktModal from '@/components/KontaktModal';
import { useState, useEffect } from 'react';
import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Typen definieren
interface Leistung {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  prices?: {
    base: string;
    baseInfo: string;
    additional?: string;
    additionalInfo?: string;
  };
  features: string[];
  benefits: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// Daten laden
function getLeistungData(slug: string): Leistung | null {
  // 1. Fernseher Einrichtung
  if (slug === 'fernseher-einrichtung') {
  return {
    slug: "fernseher-einrichten",
    title: "Fernseher einrichten lassen",
    subtitle: "Professionelle TV-Installation bei Ihnen vor Ort",
    price: "ab 59€",
    duration: "60 Min",
    image: "/tv.webp",
    description: "Wir richten Ihren Fernseher professionell ein: Sender sortieren, Netflix & Co. installieren, Soundbar anschließen - in Backnang, Winnenden und Umgebung.",
    prices: {
      base: "59€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "27€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Komplette Ersteinrichtung und Grundkonfiguration",
      "Sendersuche durchführen und Sender nach Wunsch sortieren",
      "Streaming-Apps einrichten (Netflix, Prime Video, Disney+, etc.)",
      "Externe Geräte anschließen (Soundbar, Kopfhörer, Receiver, Spielekonsole)",
      "Bildeinstellungen für optimale Qualität anpassen",
      "Persönliche Einweisung in alle Funktionen"
    ],
    benefits: [
      "Schneller Service vor Ort in Backnang und Umgebung",
      "Alle Geräte funktionieren perfekt zusammen",
      "Persönliche Einweisung in alle Funktionen"
    ],
    faq: [
      {
        question: "Wie lange dauert die Fernseher-Einrichtung?",
        answer: "In der Regel ca. 60 Minuten. Bei größeren Setups kann es länger dauern – z. B. durch Updates, App-Installationen, Kontenanmeldungen, Senderlisten oder zusätzliche angeschlossene Geräte."
      },
      {
        question: "Bringen Sie alle notwendigen Kabel mit?",
        answer: "Nach vorheriger Abstimmung organisieren wir die benötigten Kabel gerne und bringen diese zum Termin mit. So ist alles passend vorbereitet."
      },
      {
        question: "Können Sie auch ältere Fernseher einrichten?",
        answer: "Ja, wir richten sowohl neue Smart-TVs als auch ältere Fernseher ein und helfen bei der Bedienung."
      },
      {
        question: "Richten Sie auch Streaming-Sticks ein?",
        answer: "Ja, wir installieren und konfigurieren auch Fire TV Stick, Apple TV, Chromecast und ähnliche Geräte."
      }
    ]
  };
}

  // 2. Vor-Ort-Beratung & Analyse
  if (slug === 'vor-ort-beratung-analyse') {
  return {
    slug: "vor-ort-beratung-analyse",
    title: "Technikberatung vor Ort in Backnang",
    subtitle: "Persönliche Beratung & Analyse zu Computer, TV, WLAN und Smart Home & mehr bei Ihnen Zuhause",
    price: "ab 49€",
    duration: "60 Min",
    image: "/beratung_3.webp",
    description: "Umfassende Analyse Ihrer Technik, praktische Lösungen und individuelle Empfehlungen - direkt bei Ihnen vor Ort in Backnang und Umgebung.",
    prices: {
      base: "49€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "22€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Komplette Analyse Ihrer vorhandenen Technik",
      "Bedarfsermittlung und individuelle Beratung",
      "Konkrete Empfehlungen für Optimierungen",
      "Kaufberatung für neue Geräte - herstellerunabhängig",
      "Erstellung eines detaillierten Maßnahmenplans",
      "Direkte Umsetzung kleinerer Probleme vor Ort"
    ],
    benefits: [
      "Persönlicher Service vor Ort in Backnang und Umgebung",
      "Individuelle Lösungen für Ihre Situation",
      "Transparente Festpreise ohne versteckte Kosten"
    ],
    faq: [
      {
        question: "Was wird bei der Beratung analysiert?",
        answer: "Wir schauen uns Ihre komplette Technik an - Computer, Fernseher, WLAN, Smart Home Geräte usw. - und geben konkrete Empfehlungen zur Optimierung."
      },
      {
        question: "Wie lange dauert die Beratung?",
        answer: "In der Regel 60 Minuten. Bei umfangreichen Setups kann die Zeit nach Absprache verlängert werden."
      },
      {
        question: "Entstehen weitere Kosten?",
        answer: "Nur der Basispreis von 49€ für die erste Stunde. Falls länger benötigt, kostet jede weitere halbe Stunde 22€. Alles transparent kommuniziert."
      },
      {
        question: "Können Sie auch direkt Probleme lösen?",
        answer: "Ja, kleinere Probleme lösen wir direkt vor Ort. Für größere Aufgaben erstellen wir einen Maßnahmenplan und können Folgetermine vereinbaren."
      }
    ]
  };
}

  // 3. Computer & Laptop Einrichtung
  if (slug === 'computer-laptop-einrichtung') {
  return {
    slug: "computer-laptop-einrichtung",
    title: "Computer & Laptop einrichten",
    subtitle: "Windows installieren, Programme einrichten, Daten sicher übertragen",
    price: "ab 79€",
    duration: "60 Min",
    image: "/laptop.webp",
    description: "Wir richten Ihren neuen PC oder Laptop komplett ein: Windows installieren, alle Programme einrichten, Daten vom alten Gerät übertragen - vor Ort in Backnang und Umgebung.",
    prices: {
      base: "79€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "37€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Windows oder anderes Betriebssystem installieren",
      "Software-Installation (Office, Browser, E-Mail, etc.)",
      "Benutzerkonten einrichten und absichern",
      "Datenübertragung vom alten Gerät (Dokumente, Fotos, E-Mails)",
      "Alle Windows Updates durchführen und System optimieren",
      "Persönliche Einweisung in die wichtigsten Funktionen"
    ],
    benefits: [
      "Schnelle Einrichtung vor Ort in Backnang und Umgebung",
      "Alle Programme sofort einsatzbereit",
      "Ihre Daten sicher übertragen und gesichert"
    ],
    faq: [
      {
        question: "Wie lange dauert die Einrichtung?",
        answer: "Je nach Umfang 60-120 Minuten. Eine Standardeinrichtung mit Windows, Office und Datenübertragung dauert meist etwa 90 Minuten."
      },
      {
        question: "Werden alle meine Daten übertragen?",
        answer: "Ja, wir übertragen alle wichtigen Daten vom alten Gerät: Dokumente, Fotos, E-Mails, Lesezeichen, Passwörter (auf Wunsch) und mehr."
      },
      {
        question: "Welche Software wird installiert?",
        answer: "Alle von Ihnen gewünschten Programme (Office, Browser, E-Mail-Client, etc.) plus wichtige Standardsoftware wie Virenscanner und PDF-Reader."
      },
      {
        question: "Kann ich mein altes Gerät behalten?",
        answer: "Ja natürlich. Wir kopieren die Daten, löschen sie nicht vom alten Gerät. Auf Wunsch können wir das alte Gerät auch fachgerecht zurücksetzen oder entsorgen"
      }
    ]
  };
}

  // 4. Smartphone & Tablet Einrichtung
  if (slug === 'smartphone-tablet-einrichtung') {
  return {
    slug: "smartphone-tablet-einrichtung",
    title: "Smartphone & Tablet einrichten in Backnang",
    subtitle: "iPhone, Samsung, Xiaomi & Co. - Apps, Kontakte & Fotos übertragen",
    price: "ab 49€",
    duration: "60 Min",
    image: "/handy.webp",
    description: "Wir richten Ihr neues Smartphone oder Tablet komplett ein: Apps installieren, Kontakte und Fotos übertragen, E-Mail einrichten - vor Ort in Backnang und Umgebung.",
    prices: {
      base: "49€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "22€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Gerät komplett einrichten und grundkonfigurieren",
      "Apps installieren und konfigurieren (WhatsApp, Instagram, Banking, etc.)",
      "Cloud-Synchronisation einrichten (iCloud, Google Drive, OneDrive)",
      "Kontakte, Fotos und Daten vom alten Gerät übertragen",
      "E-Mail-Konten einrichten und testen",
      "Persönliche Einweisung in die wichtigsten Funktionen"
    ],
    benefits: [
      "Funktioniert mit allen Marken: iPhone, Samsung, Xiaomi & Co.",
      "Alle Ihre Daten sicher übertragen",
      "Sofort einsatzbereit - keine Einarbeitungszeit"
    ],
    faq: [
      {
        question: "Werden alle meine Kontakte und Fotos übertragen?",
        answer: "Ja, wir übertragen alle Kontakte, Fotos, Videos und auf Wunsch auch WhatsApp-Chats vom alten auf das neue Gerät."
      },
      {
        question: "Wie lange dauert die Einrichtung?",
        answer: "In der Regel 60 Minuten, je nachdem wie viele Apps und Daten übertragen werden müssen."
      },
      {
        question: "Funktioniert das auch von iPhone zu Samsung oder umgekehrt?",
        answer: "Ja, wir können Daten zwischen verschiedenen Herstellern übertragen - von iPhone zu Android, von Samsung zu iPhone, etc."
      },
      {
        question: "Können auch ältere Geräte eingerichtet werden?",
        answer: "Ja, wir richten alle Smartphones und Tablets ein, egal ob neu oder älter. Auch bei älteren Geräten helfen wir gerne."
      }
    ]
  };
}

  // 5. Router & WLAN Einrichtung
  if (slug === 'router-wlan-einrichtung') {
  return {
    slug: "router-wlan-einrichtung",
    title: "Router & WLAN einrichten in Backnang",
    subtitle: "Schnelles Internet, optimale Reichweite, maximale Sicherheit",
    price: "ab 69€",
    duration: "60 Min",
    image: "/router.webp",
    description: "Wir richten Ihren Router und WLAN professionell ein: Optimale Platzierung, starkes Signal in allen Räumen, sichere Verschlüsselung - vor Ort in Backnang und Umgebung.",
    prices: {
      base: "69€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "32€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Router Installation und professionelle Einrichtung",
      "WLAN-Netzwerk optimal konfigurieren",
      "Sicherheitseinstellungen nach aktuellen Standards (WPA3)",
      "Gastnetzwerk für Besucher einrichten",
      "WLAN-Reichweite optimieren und Mesh-Systeme konfigurieren",
      "Alle Ihre Geräte mit dem WLAN verbinden"
    ],
    benefits: [
      "Stabiles WLAN in allen Räumen",
      "Maximale Sicherheit gegen Hackerangriffe",
      "Optimale Geschwindigkeit für Streaming & Homeoffice"
    ],
    faq: [
      {
        question: "Funktioniert das WLAN dann in allen Räumen?",
        answer: "Wir sorgen für die bestmögliche WLAN-Abdeckung in Ihrem Zuhause. Wenn einzelne Bereiche nicht optimal versorgt werden können, finden wir gemeinsam die passende Lösung – z. B. Mesh-Systeme oder Repeater."
      },
      {
        question: "Wie sicher ist mein WLAN nach der Einrichtung?",
        answer: "Wir setzen alle aktuellen Sicherheitsstandards um: WPA3-Verschlüsselung, sichere Passwörter, deaktivierte Fernzugriffe und optional ein separates Gastnetzwerk."
      },
      {
        question: "Können mehrere Geräte gleichzeitig verbunden werden?",
        answer: "Ja, wir verbinden alle Ihre Geräte: Smartphones, Tablets, Laptops, Smart-TVs, Drucker, Smart-Home-Geräte und mehr."
      },
      {
        question: "Welche Router werden unterstützt?",
        answer: "Wir richten alle gängigen Router ein: Fritzbox, Speedport, TP-Link, Netgear und mehr. Auch Mesh-Systeme wie Deco oder Google Wifi."
      }
    ]
  };
}

  // 6. Smart-Home Geräte Einrichtung
  if (slug === 'smart-home-einrichtung') {
  return {
    slug: "smart-home-einrichtung",
    title: "Smart Home Geräte einrichten",
    subtitle: "Sprachassistenten, Saugroboter, smarte Beleuchtung - in Backnang und Umgebung",
    price: "ab 59€",
    duration: "60 Min",
    image: "/smarthome.webp",
    description: "Wir richten Ihre Smart-Home-Geräte professionell ein: Sprachassistenten konfigurieren, Saugroboter verbinden, smarte Lampen einrichten - alles perfekt vernetzt.",
    prices: {
      base: "59€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "27€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Smart-Home Geräte einrichten und konfigurieren",
      "Integration in bestehende Systeme (Alexa, Google Home, Apple HomeKit)",
      "Saugroboter einrichten und konfigurieren (z. B. Roborock, Ecovacs)",
      "Automatisierungen erstellen (z. B. Zeitpläne, Szenen & Routinen)",
      "App-Steuerung auf Smartphone und Tablet einrichten",
      "Persönliche Einweisung in Sprachbefehle und Routinen"
    ],
    benefits: [
      "Alle Geräte perfekt miteinander vernetzt",
      "Steuerung per Sprache, App oder Automatisierung",
      "Einfache Bedienung - auch ohne technisches Vorwissen"
    ],
    faq: [
      {
        question: "Welche Geräte können eingerichtet werden?",
        answer: "Wir richten alle gängigen Smart-Home Geräte ein: Alexa Echo, Google Nest, Philips Hue, IKEA Trådfri, Saugroboter (Roborock, iRobot), smarte Steckdosen, Thermostate, Türklingeln und vieles mehr."
      },
      {
        question: "Funktioniert alles mit Alexa?",
        answer: "Die meisten Geräte funktionieren mit Alexa. Wir prüfen die Kompatibilität Ihrer Geräte und integrieren sie optimal - egal ob Alexa, Google Home oder Apple HomeKit."
      },
      {
        question: "Kann ich später selbst Geräte hinzufügen?",
        answer: "Ja, wir zeigen Ihnen genau, wie Sie weitere Geräte selbst hinzufügen und in Ihre Automatisierungen einbinden können."
      },
      {
        question: "Was sind Automatisierungen?",
        answer: "Automatisierungen führen Aktionen automatisch aus: z.B. Licht geht an wenn Sie nach Hause kommen, Heizung schaltet sich nachts ab, oder Rollläden schließen bei Sonnenuntergang."
      }
    ]
  };
}

  // 7. Komplettlösung Technikpaket
  if (slug === 'komplettloesung-technikpaket') {
  return {
    slug: "komplettloesung-technikpaket",
    title: "Rundum-Sorglos-Paket Technik",
    subtitle: "Von Beratung bis Installation - alles aus einer Hand in Backnang und Umgebung",
    price: "ab 249€",
    duration: "individuell",
    image: "/komplett.webp",
    description: "Wir kümmern uns um Ihre komplette Technik: Bedarfsanalyse, Vertragsvergleich, Gerätekauf, Installation und Einrichtung - alles aus einer Hand.",
    prices: {
      base: "ab 249€",
      baseInfo: "abhängig vom Umfang, individuelles Angebot"
    },
    features: [
      "Umfassende Bedarfsanalyse bei Ihnen vor Ort",
      "Vertragsvergleich und Optimierung (Internet, Telefon, Streaming)",
      "Herstellerunabhängige Kaufempfehlungen für optimale Geräte",
      "Einkauf der Geräte zum besten Preis",
      "Komplette Installation und Einrichtung aller Geräte",
      "Ausführliche Einweisung und Schulung für alle Funktionen"
    ],
    benefits: [
      "Alles aus einer Hand - ein Ansprechpartner für alles",
      "Zeit- und Kostenersparnis durch optimale Planung",
      "Professionelle Umsetzung ohne Kompromisse"
    ],
    faq: [
      {
        question: "Was ist genau im Paket enthalten?",
        answer: "Alles von A bis Z: Wir analysieren Ihren Bedarf, vergleichen Ihre Verträge, empfehlen passende Geräte, kaufen diese für Sie ein, installieren und richten alles ein. Sie bekommen ein komplett funktionierendes System."
      },
      {
        question: "Wie lange dauert die komplette Umsetzung?",
        answer: "Je nach Umfang 1-3 Tage. Bei einem Standard-Haushalt (TV, Computer, WLAN, Smart Home) meist 1-2 Tage. Wir erstellen Ihnen einen detaillierten Zeitplan."
      },
      {
      question: "Wie wird der Preis berechnet?",
      answer: "Wir erstellen Ihnen nach der Bedarfsanalyse ein detailliertes, transparentes Angebot. Sie wissen vorher genau, was Sie zahlen - keine versteckten Kosten."
    }
    ]
  };
}

  // 8. Online PC-Support
  if (slug === 'online-pc-support') {
  return {
    slug: "online-pc-support",
    title: "PC Fernwartung & Online-Support",
    subtitle: "Schnelle Hilfe per Fernzugriff - in Backnang und Umgebung",
    price: "ab 29€",
    duration: "30 Min",
    image: "/online_support.webp",
    description: "Schnelle und unkomplizierte PC-Hilfe per Fernzugriff: Probleme lösen, Software installieren, Viren entfernen - ohne Anfahrt.",
    prices: {
      base: "29€",
      baseInfo: "pro angefangene 30 Minuten"
    },
    features: [
      "Fernwartung per sicherer Bildschirmfreigabe",
      "Schnelle Problemdiagnose und Fehlerbehebung",
      "Software-Installation und Updates",
      "Windows-Updates durchführen und konfigurieren",
      "Virenentfernung und Malware-Beseitigung",
      "Einstellungen optimieren und Probleme lösen"
    ],
    benefits: [
      "Keine Anfahrt nötig - Hilfe direkt am Bildschirm",
      "Schnelle Hilfe meist innerhalb weniger Stunden",
      "Günstiger als Vor-Ort-Service"
    ],
    faq: [
      {
        question: "Wie funktioniert der Online-Support genau?",
        answer: "Sie laden eine kleine Software herunter (z.B. AnyDesk oder TeamViewer), geben uns einen Zugangscode und wir können auf Ihren Bildschirm sehen und das Problem beheben - alles während Sie zuschauen können."
      },
      {
        question: "Ist Fernwartung sicher?",
        answer: "Ja, absolut. Wir nutzen verschlüsselte Verbindungen und Sie müssen die Verbindung aktiv freigeben. Sie sehen jederzeit, was wir tun und können die Sitzung jederzeit beenden."
      },
      {
        question: "Wie schnell bekomme ich Hilfe?",
        answer: "Meistens innerhalb von wenigen Stunden, je nach Verfügbarkeit."
      },
      {
        question: "Warum nur für Bestandskunden?",
        answer: "Der Online-Support ist ein Service für Kunden, die wir bereits vor Ort betreut haben. So kennen wir Ihr System und können schneller helfen."
      }
    ]
  };
}

// 9. Vertragsprüfung & Tarifvergleich
if (slug === 'vertragspruefung-tarifvergleich') {
  return {
    slug: "vertragspruefung-tarifvergleich",
    title: "Vertragsprüfung & Tarifvergleich",
    subtitle: "Internet, Handy, Streaming - in Backnang und Umgebung",
    price: "ab 59€",
    duration: "60 Min",
    image: "/vertrag_3.webp",
    description: "Wir prüfen Ihre Verträge und finden günstigere und auf Ihre Bedürfnisse abgestimmte Tarife: Internet, Telefon, Handy, Streaming, Strom & mehr.",
    prices: {
      base: "59€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "27€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Detaillierte Analyse aller bestehenden Verträge",
      "Umfassender Tarifvergleich am Markt durchführen",
      "Konkretes Einsparpotenzial in Euro berechnen",
      "Wechselempfehlungen mit Vor- und Nachteilen",
      "Kündigungen für Sie erstellen und versenden",  
      "Unterstützung beim Anbieterwechsel"
    ],
    benefits: [
      "Monatliche Kosten dauerhaft senken",
      "Bessere Tarife bei gleicher oder höherer Leistung",
      "Unabhängige Beratung ohne Provisionsinteressen"
    ],
    faq: [
      {
        question: "Wie viel kann ich konkret sparen?",
        answer: "Das Einsparpotenzial ist individuell verschieden. Wir berechnen für Sie konkret, wie viel Sie mit günstigeren Tarifen monatlich und jährlich sparen können."
      },
      {
        question: "Übernehmen Sie die Kündigungen für mich?", 
        answer: "Ja, wir erstellen die Kündigungsschreiben für Sie und kümmern uns um den Versand. Bei neuen Verträgen helfen wir beim abschließen." 
      },
      {
        question: "Welche Verträge werden überprüft?",
        answer: "Alle relevanten Verträge: Internet (DSL, Kabel, Glasfaser), Festnetz-Telefon, Handy-Verträge, Streaming-Dienste (Netflix, Sky, Disney+, etc.), Mobilfunk, Strom und mehr."
      },
      {
        question: "Erhalten Sie Provisionen von Anbietern?",
        answer: "Nein, wir arbeiten unabhängig und erhalten keine Provisionen. Unser einziges Interesse ist, den besten Tarif für Sie zu finden - nicht den mit der höchsten Provision."
      }
    ]
  };
}

 // 10. Gaming-PC Kaufberatung
if (slug === 'gaming-pc-beratung') {
  return {
    slug: "gaming-pc-beratung",
    title: "Gaming-PC Kaufberatung",
    subtitle: "Die richtige Hardware für dein Budget - optimal konfiguriert",
    price: "ab 49€",
    duration: "60 Min",
    image: "/gamingpc_2.webp",
    description: "Wir finden die perfekte Gaming-PC Konfiguration für dein Budget: Von günstigen Einstiegs-PCs bis hin zu High-End Systemen für 4K Gaming - alles optimal abgestimmt auf deine Spiele und Anforderungen.",
    prices: {
      base: "49€",
      baseInfo: "pauschal bis zu 1 Stunde",
      additional: "22€",
      additionalInfo: "pro weitere 30 Minuten"
    },
    features: [
      "Detaillierte Bedarfsanalyse (Budget, Spiele, zukünftige Anforderungen)",
      "Umfassender Preisvergleich bei allen relevanten Händlern",
      "Optimale Hardware-Konfiguration für beste Performance",
      "Zukunftssichere Empfehlungen mit Aufrüstungsmöglichkeiten",
      "Kaufberatung und Bestellunterstützung",
      "Persönliche Beratung vor Ort oder per Telefon/Video"
    ],
    benefits: [
      "Keine Fehlkäufe - optimale Konfiguration für dein Budget",
      "Unabhängige Beratung ohne Verkaufsinteressen",
      "Zukunftssichere Empfehlungen mit Upgrade-Möglichkeiten"
    ],
    faq: [
      {
        question: "Wie viel Budget brauche ich für einen guten Gaming-PC?",
        answer: "Das hängt von deinen Anforderungen ab. Für 1080p Gaming bei 60 FPS reichen oft 800-1200€. Für 1440p oder 4K Gaming solltest du 1500-2500€ einplanen. Wir finden die optimale Konfiguration für dein Budget."
      },
      {
        question: "Welche Komponenten sind am wichtigsten?",
        answer: "Grafikkarte und Prozessor sind entscheidend für Gaming-Performance. Ausreichend RAM (16GB+) und eine gute SSD sind ebenfalls wichtig. Wir beraten dich zu allen Komponenten."
      },
      {
        question: "Kann ich später upgraden?",
        answer: "Ja, wir planen deine Konfiguration so, dass du später einfach aufrüsten kannst - z.B. stärkere Grafikkarte oder mehr RAM hinzufügen."
      },
      {
        question: "Wo soll ich die Komponenten kaufen?",
        answer: "Wir vergleichen Preise bei Amazon, Alternate, Mindfactory, Caseking und anderen seriösen Händlern. Oft gibt es Aktionspreise oder Bundle-Angebote."
      }
    ]
  };
}

 // 11. Gaming-PC Aufbau & Installation
if (slug === 'gaming-pc-aufbau-installation') {
  return {
    slug: "gaming-pc-aufbau-installation",
    title: "Gaming-PC zusammenbauen & einrichten",
    subtitle: "Professioneller Aufbau, Windows installieren, spielbereit - in Backnang und Umgebung",
    price: "ab 119€",
    duration: "2-3 Std",
    image: "/gamingpc_4.webp",
    description: "Wir bauen ihren Gaming-PC exakt nach Wunsch: sauberer Aufbau, optimierter Airflow und ein stabil eingerichtetes Windows-System – damit Sie direkt loszocken können.",
    prices: {
      base: "ab 119€",
      baseInfo: "komplett inkl. Installation"
    },
    features: [
      "Komponenten fachgerecht verbauen und testen",
      "Sauberes Kabelmanagement und optimalen Airflow",
      "BIOS-Konfiguration und Optimierung",
      "Windows Installation und Aktivierung",
      "Alle Treiber installieren (Grafikkarte, Mainboard, etc.)",
      "Benchmarks und Stresstests für Stabilität"
    ],
    benefits: [
      "Professioneller Aufbau - keine Montagefehler",
      "Optimale Performance durch richtige Konfiguration",
      "Sofort spielbereit - kein Setup nötig"
    ],
    faq: [
      {
        question: "Was passiert, wenn eine Komponente defekt ist?",
        answer: "Tritt innerhalb der Garantiezeit ein Hardwaredefekt auf, übernehmen wir die komplette Abwicklung: Fehleranalyse, Austausch der Komponente und die Kommunikation mit dem Hersteller. Für Sie bleibt es schnell und stressfrei."
      },
      {
        question: "Wo findet der Aufbau statt?",
        answer: "Der Aufbau findet bei uns statt. Wir bauen den PC fachgerecht in unserer Werkstatt zusammen und bringen ihn Ihnen fertig aufgebaut und spielbereit nach Hause. (Versand auf Anfrage in ganz Deutschland möglich)"
      },
      {
        question: "Welche Software wird installiert?",
        answer: "Windows (mit Ihrer Lizenz), alle aktuellen Treiber, wichtige Updates und auf Wunsch Gaming-Software wie Steam, Discord, Grafikkarten-Tools und mehr."
      }
    ]
  };
}

// 12. Gerätekauf im Auftrag
if (slug === 'geraetekauf-im-auftrag') {
  return {
    slug: "geraetekauf-im-auftrag",
    title: "Gerätekauf-Service",
    subtitle: "Wir besorgen Technik zum besten Preis für Sie - in Backnang und Umgebung",
    price: "ab 30€",
    duration: "individuell",
    image: "/ankauf.webp",
    description: "Wir übernehmen die Beschaffung Ihrer Technik: Preisvergleich, Anbietersuche, Bestellung und Lieferung - Sie sparen Zeit und bekommen den besten Preis.",
    prices: {
      base: "ab 30€",
      baseInfo: "Servicegebühr, abhängig vom Aufwand"
    },
    features: [
      "Umfassender Preisvergleich bei allen relevanten Händlern",
      "Besten Anbieter mit bestem Preis-Leistungs-Verhältnis finden",
      "Gerät in Ihrem Auftrag bestellen",
      "Lieferung zu Ihnen nach Hause organisieren",
      "Optional: Installation und Einrichtung vor Ort",
      "Reklamationsabwicklung bei Problemen"
    ],
    benefits: [
      "Zeit sparen - wir kümmern uns um alles",
      "Beste Preise durch professionellen Vergleich",
      "Sicher einkaufen mit voller Herstellergarantie"
    ],
    faq: [
      {
        question: "Wie funktioniert die Bezahlung?",
        answer: "Nach der Beratung erstellen wir einen detaillierten Kostenvoranschlag. Wenn Sie einverstanden sind, bestellen wir die Geräte für Sie. Die Bezahlung erfolgt erst nach Lieferung der Geräte."
      },
      {
        question: "Erhalte ich die volle Herstellergarantie?",
        answer: "Ja, Sie erhalten die volle Herstellergarantie. Bei Problemen unterstützen wir Sie bei der Reklamation."
      },
      {
        question: "Wo kaufen Sie die Geräte?",
        answer: "Bei seriösen deutschen Online-Händlern oder direkt beim Hersteller - je nachdem wo das beste Angebot ist."
      },
      {
        question: "Wie hoch ist die Servicegebühr?",
        answer: "Die Servicegebühr richtet sich nach dem Aufwand und beginnt bei 30€. Bei umfangreichen Beschaffungen erstellen wir ein individuelles Angebot."
      }
    ]
  };
}

  // 13. Entsorgung von Altgeräten
if (slug === 'entsorgung-altgeraete') {
  return {
    slug: "entsorgung-altgeraete",
    title: "Elektroschrott fachgerecht entsorgen",
    subtitle: "Umweltfreundliche Entsorgung von Altgeräten - in Backnang und Umgebung",
    price: "14,99€",
    duration: "bei Termin",
    image: "/entsorgung.webp",
    description: "Wir entsorgen Ihre Altgeräte fachgerecht und umweltfreundlich: Computer, Laptops, Drucker, Fernseher - Daten sicher löschen, gesetzeskonform recyceln.",
    prices: {
      base: "14,99€",
      baseInfo: "pauschal pro Gerät"
    },
    features: [
      "Mitnahme beim Service-Termin",
      "Sichere Datenlöschung auf Wunsch (Festplatten, SSDs)",
      "Umweltgerechte Entsorgung gemäß ElektroG",
      "Professionelles Recycling bei zertifizierten Entsorgern",
      "Entsorgungsnachweis auf Anfrage",
      "Kostenlose Mitnahme bei anderen Terminen"
    ],
    benefits: [
      "Umweltfreundlich und gesetzeskonform entsorgt",
      "Ihre Daten sicher gelöscht - kein Datenmissbrauch",
      "Kein eigener Transport zum Wertstoffhof nötig"
    ],
    faq: [
      {
        question: "Welche Geräte können entsorgt werden?",
        answer: "Alle Elektrogeräte: Computer, Laptops, Tablets, Smartphones, Drucker, Scanner, Monitore, Fernseher, Router, Tastaturen, Mäuse und mehr. Auch defekte Geräte."
      },
      {
        question: "Wie werden die Daten sicher gelöscht?",
        answer: "Wir löschen Festplatten und SSDs mehrfach mit professioneller Software oder zerstören Datenträger physisch auf Wunsch. Ihre Daten sind anschließend unwiederbringlich gelöscht."
      },
      {
        question: "Wann wird das Gerät abgeholt?",
        answer: "Bei einem anderen Service-Termin nehmen wir Altgeräte mit - dann fallen 14,99€ pro Gerät an."
      }
    ]
  };
}

  return null;
}

export default function LeistungDetailPage({ slug }: { slug: string }) {
  const leistung = getLeistungData(slug);
  const [showKontaktModal, setShowKontaktModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<Set<number>>(new Set());
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Clean up the skip flag
    sessionStorage.removeItem('skipScrollRestore');
  }, [slug]);
  
  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  if (!leistung) {
    notFound();
  }

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black"></div>
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="min-h-screen pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">

            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden mb-12 sm:mb-16 border border-slate-700 p-6 sm:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Links: Text */}
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                    {leistung.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-2xl text-blue-400 mb-4 sm:mb-6">
                    {leistung.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm md:text-lg text-gray-300">
                    {leistung.description}
                  </p>
                </div>

                {/* Rechts: Preis Box + Button */}
                <div>
                  {/* Preis Box */}
                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-500/30 mb-4 sm:mb-6">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Basispreis */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-white font-semibold">Basispreis</p>
                          <p className="text-xs text-slate-300">
                            {leistung.prices?.baseInfo || "(pauschal bis zu 1 Stunde)"}
                          </p>
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-white">
                          {leistung.prices?.base || leistung.price}
                        </p>
                      </div>
                      
                      {/* Trennlinie - nur wenn Zusatzzeit vorhanden */}
                      {leistung.prices?.additional && (
                        <>
                          <div className="border-t border-blue-500/20"></div>
                          
                          {/* Zusatzzeit */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs sm:text-sm text-white font-semibold">Zusatzzeit</p>
                              <p className="text-xs text-slate-300">
                                {leistung.prices?.additionalInfo || "(pro weitere 30 Minuten)"}
                              </p>
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold text-white">
                              {leistung.prices?.additional}
                            </p>
                          </div>
                        </>
                      )}
                      
                      {/* Fahrtkosten Info */}
                      <div className="pt-4 mt-4 border-t border-blue-500/20">
                        <a 
                          href="/fahrtkosten" 
                          className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors group font-semibold"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                          <span>Je nach Entfernung können Fahrtkosten anfallen</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setShowKontaktModal(true)}
                    className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group inline-block w-full"
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                    <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-blue-600 via-blue-500 to-blue-600" />
                    <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-blue-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                      <span>Jetzt kontaktieren</span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Leistungsumfang */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
                Leistungsumfang
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {leistung.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start gap-3">
                      <p className="text-sm sm:text-base md:text-lg text-gray-300">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Vorteile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 sm:mb-16"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-blue-500/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
                  Ihre Vorteile
                </h2>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8">
                  {leistung.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                      <span className="text-sm sm:text-base md:text-xl text-white font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
                Häufige Fragen
              </h2>
              <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
                {leistung.faq.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl border border-slate-700"
                  >
                    <button
                      type="button"
                      aria-expanded={openFaq.has(index)}
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 focus:outline-none"
                    >
                      <h3 className="text-sm sm:text-base md:text-xl font-semibold text-white">
                        {item.question}
                      </h3>
                      <span className="inline-flex w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#3b82f6] text-white items-center justify-center shadow-[0_14px_30px_-10px_rgba(59,130,246,0.55)] flex-shrink-0">
                        {openFaq.has(index) ? (
                          <svg
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 sm:w-6 sm:h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>
                    {openFaq.has(index) && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 -mt-2">
                        <p className="text-xs sm:text-sm md:text-base text-gray-300">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
 
            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative overflow-hidden"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                    Jetzt Termin vereinbaren
                  </h2>
                  <p className="text-sm sm:text-base md:text-2xl text-slate-300 mb-8 sm:mb-12">
                    Kontaktieren Sie uns für eine kostenlose Beratung!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6">
                    <a 
                      href="tel:015563168737"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-blue-600 via-blue-500 to-blue-600" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-blue-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span>Jetzt anrufen</span>
                      </div>
                    </a>

                    <a 
                      href="https://wa.me/4915563168737"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-green-600 via-green-500 to-green-500" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-green-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span>WhatsApp schreiben</span>
                      </div>
                    </a>

                    <a 
                      href="mailto:info@mira-technikwelt.de"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-slate-700 via-slate-600 to-slate-700" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-slate-600 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span>E-Mail senden</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        <Footer />
      </div>

      {/* Kontakt Modal */}
      <KontaktModal 
        isOpen={showKontaktModal} 
        onClose={() => setShowKontaktModal(false)} 
      />
    </>
  );
}