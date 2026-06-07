"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';

export default function UeberUnsPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black"></div>
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="min-h-screen pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-8">
            
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-24"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                Das Team von MIRA Technikwelt
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-300">
                Zwei Brüder aus Backnang mit einer Mission: Technik soll für jeden verständlich sein
              </p>
            </motion.div>

            {/* Section 1: Raphael - Links Bild, Rechts Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-32">
              {/* Links: Bild */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-square">
                  <Image src="/rapha.webp" alt="Raphael - Gründer MIRA Technikwelt Backnang, Technik-Experte für Computer und Gaming-PCs" fill className="object-cover" loading="lazy" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ willChange: "opacity, transform" }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Raphael
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 mb-3 sm:mb-4">
                 Als Mitgründer von MIRA Technikwelt stehe ich dafür, Technik einfach, verständlich und zuverlässig zu machen. Mir ist wichtig, dass Sie nicht nur eine funktionierende Lösung bekommen – sondern auch genau verstehen, wie alles funktioniert und wie Sie Ihre Technik im Alltag optimal nutzen können.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 mb-4 sm:mb-6">
                  Ob Fernseher (Smart TV), Internet/WLAN, Router, Computer/Laptop oder Gaming-PC: Ich nehme mir Zeit, höre genau zu und sorge dafür, dass alles sauber eingerichtet ist – inklusive Erklärungen, damit Sie danach wirklich sicher damit umgehen können.
                </p>
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm md:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Technikberatung mit Erfahrung und Struktur</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm md:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Verständliche Erklärungen ohne Fachchinesisch</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm md:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Geduldig, zuverlässig und lösungsorientiert</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Section 2: Micka - Links Text, Rechts Bild */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-32">
              {/* Links: Text */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ willChange: "opacity, transform" }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Mickael
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 mb-3 sm:mb-4">
                  Als Mitgründer von MIRA Technikwelt sorge ich dafür, dass Technik nicht kompliziert sein muss – sondern im Alltag einfach funktioniert. Besonders wichtig ist mir der persönliche Kontakt: Sie sollen sich gut betreut fühlen und eine Lösung bekommen, die wirklich zu Ihnen passt.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-300 mb-4 sm:mb-6">
                  Ich unterstütze Sie direkt vor Ort – egal ob Fernseher (Smart TV), Receiver/Streaming, WLAN & Internet, PC/Laptop, Drucker oder komplette Technik-Einrichtung zuhause. Gemeinsam finden wir die beste Lösung und ich richte alles so ein, dass Sie Ihre Technik stressfrei und selbstständig nutzen können.
                </p>
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm md:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Starke Kundenbetreuung & persönlicher Vor-Ort-Service</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm md:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Individuelle Lösungen statt Standard-Antworten</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 text-slate-300 text-xs sm:text-sm md:text-base">
                    <span className="text-blue-500 mt-1 flex-shrink-0">✓</span>
                    <span>Saubere Einrichtung + praktische Tipps für den Alltag</span>
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
                <div className="relative overflow-hidden rounded-3xl aspect-square">
                  <Image src="/micka.webp" alt="Micka - Mitgründer MIRA Technikwelt Backnang, Experte für Vor-Ort-Service und Kundenberatung" fill className="object-cover" loading="lazy" />
                </div>
              </motion.div>
            </div>

            {/* Section 3: Unsere Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-16 sm:mb-32"
            >
              <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 md:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
                  Unsere Mission
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      ),
                      title: "Verständlich",
                      description: "Wir erklären Technik so, dass jeder sie versteht – ohne Fachchinesisch, mit Geduld."
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      title: "Zuverlässig",
                      description: "Wir richten alles ein, testen gründlich und lassen Sie erst zufrieden zurück."
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      ),
                      title: "Persönlich",
                      description: "Wir nehmen uns Zeit für Sie und passen die Lösung an Ihren Alltag an."
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-lg sm:rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6 md:p-8 text-center transition-colors duration-300 hover:border-blue-500/60"
                    >
                      <div className="mx-auto mb-3 sm:mb-4 md:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-slate-800 text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section 4: Warum MIRA Technikwelt */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="mb-16 sm:mb-32"
            >
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 md:mb-16 text-center">
                  Warum MIRA Technikwelt?
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {[
                    {
                      title: "Jahrelange Erfahrung",
                      description: "Wir haben bereits vielen Menschen in der Region geholfen und wissen genau, welche Fragen und Probleme auftreten können.",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      ),
                      color: "bg-slate-900/70",
                      delay: 0
                    },
                    {
                      title: "Vor-Ort-Service",
                      description: "Wir kommen zu Ihnen nach Hause – keine langen Wartezeiten, keine komplizierten Anleitungen. Wir machen es einfach.",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      ),
                      color: "bg-slate-900/70",
                      delay: 0.1
                    },
                    {
                      title: "Individuelle Beratung",
                      description: "Wir hören genau zu, beraten ehrlich und finden gemeinsam die beste Lösung für Ihr Zuhause.",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                      ),
                      color: "bg-slate-900/70",
                      delay: 0.2
                    },
                    {
                      title: "Nachhaltige Lösungen",
                      description: "Wir richten alles so ein, dass Sie es auch nach unserem Besuch selbstständig nutzen können. Sie werden unabhängig.",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      ),
                      color: "bg-slate-900/70",
                      delay: 0.3
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: item.delay }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="group relative"
                    >
                      <div className="relative h-full rounded-lg sm:rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:p-6 md:p-8 transition-all duration-300 group-hover:border-blue-500/50">
                        <div className="relative z-10">
                          <div className="flex items-start gap-3 sm:gap-4 md:gap-4 mb-3 sm:mb-4">
                            <motion.div
                              whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 text-white bg-slate-800"
                            >
                              {item.icon}
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-500 transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Decorative line */}
                          <div className={`h-1 bg-gradient-to-r ${item.color} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>


            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="relative overflow-hidden"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                    Lernen Sie uns kennen!
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-12">
                    Kontaktieren Sie uns für eine kostenlose Beratung
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                    <a 
                      href="tel:015563168737"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-blue-600 via-blue-500 to-blue-600" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl text-white bg-blue-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0">
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
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl text-white bg-green-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0">
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
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl text-white bg-slate-600 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0">
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
    </>
  );
}