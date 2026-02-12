"use client";
import { motion } from 'framer-motion';
import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import WobbleImage from '@/components/WobbleImage';

export default function GamingPCPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black"></div>
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="min-h-screen pt-32 sm:pt-40 pb-12 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="text-center mb-12 sm:mb-24"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6">
                Gaming-PC zusammenbauen lassen
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-300 max-w-3xl mx-auto px-2">
                Wir bauen deinen Traum-Gaming-PC – individuelle Konfiguration, professioneller Aufbau, sofort spielbereit
              </p>
            </motion.div>

            {/* Section 1: Links Text, Rechts Bild */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-32">
              {/* Links: Text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6">
                  Individuelle Gaming-PC Konfiguration
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Jeder Gaming-PC ist einzigartig. Wir berücksichtigen dein Budget, deine Lieblingsspiele und zukünftige Anforderungen, um die perfekte Konfiguration für dich zu finden.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Von kompakten Mid-Range Builds für 1080p Gaming bis hin zu High-End Gaming-PCs für 4K – wir haben für jeden das richtige Setup.
                </p>
                <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Detaillierte Beratung zu Grafikkarte, CPU, RAM & mehr</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Preisvergleich bei allen relevanten Händlern</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Zukunftssichere Konfigurationen zum Aufrüsten</span>
                  </li>
                </ul>
              </motion.div>

              {/* Rechts: Bild */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <img src="/gamingpc_1.jpeg" alt="Gaming-PC Komponenten Auswahl - Grafikkarte, CPU, RAM in Backnang" className="object-cover w-full h-full" />
                </div>
              </motion.div>
            </div>

            {/* Section 2: Links Bild, Rechts Text - REVERSED ON MOBILE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-32">
              {/* Links: Bild */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
                className="md:order-1 order-2"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <img src="/gamingpc_2.jpg" alt="Professioneller Gaming-PC Aufbau mit Kabelmanagement" className="object-cover w-full h-full" />
                </div>
              </motion.div>

              {/* Rechts: Text */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ willChange: "opacity, transform" }}
                className="md:order-2 order-1"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6">
                  Professioneller Gaming-PC Aufbau
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Wir bauen deinen Gaming-PC mit höchster Sorgfalt zusammen. Jede Komponente wird fachgerecht verbaut, Kabel werden sauber verlegt und das System wird gründlich getestet.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Nach dem Aufbau installieren wir Windows, alle Treiber und wichtige Gaming-Software. Dein PC ist sofort spielbereit – einfach anschließen und loszocken!
                </p>
                <ul className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Fachgerechte Montage aller Komponenten</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Sauberes Kabelmanagement und optimalen Airflow</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Windows Installation & Treiber-Setup (Steam, Discord, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Benchmarks und Stresstests für maximale Stabilität</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Section 3: Links Text, Rechts Bild */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-32">
              {/* Links: Text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6">
                  Budget-PC bis High-End Gaming
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Von kompakten Mini-ITX Builds für kleine Schreibtische bis hin zu großen Full-Tower Systemen mit RGB-Beleuchtung – bei uns ist alles möglich.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Wir bauen PCs für alle Anwendungsfälle: Competitive Gaming in CS2 und Valorant, AAA-Spiele in 4K, Content Creation oder Streaming.
                </p>
                <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                  <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-700">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">Budget Gaming-PCs</h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-300">Optimale Performance für 1080p Gaming – kein Kompromiss bei der Qualität.</p>
                  </div>
                  <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-700">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">High-End Gaming</h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-300">Maximale Performance für 1440p/4K Gaming und die neuesten AAA-Titel.</p>
                  </div>
                  <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-700">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">Custom Builds & Spezial-PCs</h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-300">Individuelle Wünsche: RGB-Beleuchtung, Custom Watercooling, Silent-PCs oder kompakte Mini-ITX Builds.</p>
                  </div>
                </div>
              </motion.div>

              {/* Rechts: Bild */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <img src="/gamingpc_3.jpg" alt="Verschiedene Gaming-PC Builds - Budget bis High-End" className="object-cover w-full h-full" />
                </div>
              </motion.div>
            </div>

            {/* Section 4: Links Bild, Rechts Text - REVERSED ON MOBILE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-32">
              {/* Links: Bild */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
                className="md:order-1 order-2"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                  <img src="/gamingpc_4.jpg" alt="Gaming-PC Setup komplett eingerichtet und spielbereit" className="object-cover w-full h-full" />
                </div>
              </motion.div>

              {/* Rechts: Text */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ willChange: "opacity, transform" }}
                className="md:order-2 order-1"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-6">
                  Rundum-Service in Backnang
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Wir übernehmen alles für dich: Von der Beratung über den Einkauf der Komponenten bis hin zum Aufbau und der Installation in Backnang und Umgebung.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4">
                  Du musst dich um nichts kümmern – wir liefern dir einen vollständig eingerichteten Gaming-PC, der sofort einsatzbereit ist.
                </p>
                <div className="mt-4 sm:mt-6 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl p-4 sm:p-6 border border-blue-500/20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Unser Komplett-Service:</h3>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-slate-300">
                    <li>• Detaillierte Beratung & Konfiguration</li>
                    <li>• Einkauf aller Komponenten zum besten Preis</li>
                    <li>• Professioneller Aufbau</li>
                    <li>• Windows Installation & Setup</li>
                    <li>• Alle Treiber & Gaming-Software installieren</li>
                    <li>• System-Optimierung & Benchmarks</li>
                    <li>• Lieferung & persönliche Einweisung</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="relative overflow-hidden mt-12 sm:mt-24"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                    Bereit für deinen Gaming-PC?
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-12">
                    Kontaktiere uns für eine Beratung – bei dir vor Ort oder per Telefon!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                    <a 
                      href="tel:015563168737"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-blue-600 via-blue-500 to-blue-600" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl text-white bg-blue-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span className="whitespace-nowrap">Jetzt anrufen</span>
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
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl text-white bg-green-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span className="whitespace-nowrap">WhatsApp schreiben</span>
                      </div>
                    </a>

                    <a 
                      href="mailto:info@mira-technikwelt.de"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-slate-700 via-slate-600 to-slate-700" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl text-white bg-slate-600 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="whitespace-nowrap">E-Mail senden</span>
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
    </>
  );
}