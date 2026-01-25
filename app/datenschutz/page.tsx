'use client';

import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DatenschutzPage() {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0]));

  const toggleSection = (index: number) => {
    const newOpen = new Set(openSections);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenSections(newOpen);
  };

  const sections = [
    {
      title: "Verantwortliche Stelle",
      content: (
        <div className="space-y-3 text-slate-300">
          <p className="font-semibold text-white">Verantwortlich im Sinne der Datenschutzgesetze, insbesondere der DSGVO, ist:</p>
          <div>
            <p className="font-semibold">MIRA Technikwelt GbR</p>
            <p>Geschwister-Scholl-Straße 22</p>
            <p>71522 Backnang</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">Kontakt:</p>
            <p>E-Mail: <a href="mailto:info@mira-technikwelt.de" className="text-blue-400 hover:text-blue-300">info@mira-technikwelt.de</a></p>
            <p>Telefon: <a href="tel:015563168737" className="text-blue-400 hover:text-blue-300">+49 155 63168737</a></p>
          </div>
        </div>
      )
    },
    {
      title: "Allgemeines",
      content: (
        <p className="text-slate-300 leading-relaxed">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Ihre Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften behandelt. Diese Datenschutzerklärung informiert Sie über die Art, den Umfang und den Zweck der Verarbeitung personenbezogener Daten auf unserer Website.
        </p>
      )
    },
    {
      title: "Erhebung und Speicherung personenbezogener Daten",
      content: (
        <div className="space-y-6 text-slate-300">
          <div>
            <h3 className="font-semibold text-white mb-3">a) Beim Besuch der Website</h3>
            <p className="mb-3">Beim Aufruf unserer Website werden automatisch Informationen an unseren Server übermittelt. Dazu gehören:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Referrer-URL</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
            </ul>
            <p className="mt-3">Diese Daten sind technisch erforderlich, um die Website korrekt darzustellen, und werden zu Zwecken der Stabilität und Sicherheit verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).</p>
          </div>

          <div className="pt-4 border-t border-slate-700">
            <h3 className="font-semibold text-white mb-3">b) Bei Nutzung des Kontaktformulars / E-Mail</h3>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Nutzung von WhatsApp",
      content: (
        <div className="space-y-3 text-slate-300">
          <p>Wir bieten die Möglichkeit, mit uns über den Messenger-Dienst WhatsApp zu kommunizieren. Anbieter ist WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland (ein Unternehmen von Meta).</p>
          
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Bei Nutzung von WhatsApp werden personenbezogene Daten wie Telefonnummer, Nachrichteninhalte und Metadaten an WhatsApp übermittelt und dort gespeichert.</li>
            <li>WhatsApp kann Daten an andere Meta-Unternehmen weitergeben, auch in Länder außerhalb der EU (z. B. USA). Die Übermittlung erfolgt auf Grundlage von EU-Standardvertragsklauseln.</li>
            <li>Die Verarbeitung basiert auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder – wenn es um Vertragsfragen geht – auf Art. 6 Abs. 1 lit. b DSGVO.</li>
          </ul>

          <div className="mt-4 p-3 bg-blue-500/10 rounded border border-blue-500/20">
            <p className="text-sm"><span className="font-semibold text-white">Hinweis:</span> Für vertrauliche Informationen empfehlen wir den Kontakt über E-Mail oder Telefon. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie uns über einen anderen Kommunikationsweg kontaktieren.</p>
          </div>
        </div>
      )
    },
    {
      title: "Cookies",
      content: (
        <p className="text-slate-300 leading-relaxed">
          Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, die Nutzung unserer Website nutzerfreundlicher, effektiver und sicherer zu machen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Sie können die Speicherung von Cookies in den Einstellungen Ihres Browsers verhindern.
        </p>
      )
    },
    {
      title: "Weitergabe von Daten an Dritte",
      content: (
        <p className="text-slate-300 leading-relaxed">
          Eine Weitergabe Ihrer Daten erfolgt nur, wenn Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO), dies zur Vertragsabwicklung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO), oder eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO).
        </p>
      )
    },
    {
      title: "Datensicherheit",
      content: (
        <p className="text-slate-300 leading-relaxed">
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen.
        </p>
      )
    },
    {
      title: "Ihre Rechte",
      content: (
        <div className="space-y-3 text-slate-300">
          <p className="font-semibold text-white">Sie haben nach DSGVO folgende Rechte:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>

          <div className="pt-4 border-t border-slate-700">
            <p className="font-semibold text-white mb-2">Bitte richten Sie Ihre Anfragen an:</p>
            <a href="mailto:info@mira-technikwelt.de" className="text-blue-400 hover:text-blue-300">
              info@mira-technikwelt.de
            </a>
          </div>

          <p className="pt-4">
            Zusätzlich haben Sie ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.
          </p>
        </div>
      )
    },
    {
      title: "Änderungen dieser Datenschutzerklärung",
      content: (
        <p className="text-slate-300 leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, z. B. wenn unsere Website oder gesetzliche Vorgaben geändert werden.
        </p>
      )
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-slate-300">
              Informationen zum Datenschutz bei MIRA Technikwelt
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex items-center justify-between p-6 hover:bg-slate-700/50 transition-colors"
                >
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    {section.title}
                  </h2>
                  <span className="flex-shrink-0">
                    {openSections.has(index) ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
                      </svg>
                    )}
                  </span>
                </button>

                {openSections.has(index) && (
                  <div className="px-6 pb-6 border-t border-slate-700">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Impressum Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a 
              href="/impressum"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Zum Impressum
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
