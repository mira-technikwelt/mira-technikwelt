"use client";
import { useEffect, useRef, useState } from 'react';
import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/ServiceMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-slate-800 rounded-2xl flex items-center justify-center">
      <div className="text-slate-400">Karte wird geladen...</div>
    </div>
  ),
});

interface Zone {
  id: string;
  name: string;
  radius: number;
  color: string;
  description: string;
  cities: City[];
}

interface City {
  name: string;
  lat: number;
  lng: number;
  description: string;
  zone: number;
}

const zones: Zone[] = [
  {
    id: 'zone1',
    name: 'Direkter Umkreis (0-20 km)',
    radius: 20,
    color: '#3b82f6',
    description: 'Backnang und direkte Nachbarorte - schnellste Erreichbarkeit',
    cities: [
      { name: 'Backnang', lat: 48.9474, lng: 9.4302, description: 'Unser Standort', zone: 1 },
      { name: 'Aspach', lat: 48.9667, lng: 9.4000, description: 'Direkter Nachbarort', zone: 1 },
      { name: 'Allmersbach im Tal', lat: 48.9000, lng: 9.4667, description: 'Direkter Nachbarort', zone: 1 },
      { name: 'Auenwald', lat: 48.9333, lng: 9.5000, description: 'Direkter Nachbarort', zone: 1 },
      { name: 'Oppenweiler', lat: 48.9833, lng: 9.4500, description: 'Direkter Nachbarort', zone: 1 },
      { name: 'Sulzbach an der Murr', lat: 49.0000, lng: 9.5000, description: 'Direkter Nachbarort', zone: 1 },
      { name: 'Winnenden', lat: 48.8756, lng: 9.3981, description: 'Ca. 10 km entfernt', zone: 1 },
      { name: 'Waiblingen', lat: 48.8303, lng: 9.3164, description: 'Ca. 15 km entfernt', zone: 1 },
      { name: 'Schorndorf', lat: 48.8000, lng: 9.5167, description: 'Ca. 15 km entfernt', zone: 1 },
      { name: 'Fellbach', lat: 48.8081, lng: 9.2767, description: 'Ca. 18 km entfernt', zone: 1 },
      { name: 'Korb', lat: 48.8500, lng: 9.3667, description: 'Ca. 12 km entfernt', zone: 1 },
      { name: 'Leutenbach', lat: 48.8833, lng: 9.3833, description: 'Ca. 8 km entfernt', zone: 1 },
      { name: 'Weinstadt', lat: 48.8167, lng: 9.3667, description: 'Ca. 12 km entfernt', zone: 1 },
    ]
  },
  {
    id: 'zone2',
    name: 'Erweiterte Region (20-40 km)',
    radius: 43,
    color: '#3b82f6',
    description: 'Stuttgart und umliegende Städte - gute Erreichbarkeit',
    cities: [
      { name: 'Ludwigsburg', lat: 48.8975, lng: 9.1919, description: 'Ca. 25 km entfernt', zone: 2 },
      { name: 'Remseck am Neckar', lat: 48.8667, lng: 9.2667, description: 'Ca. 22 km entfernt', zone: 2 },
      { name: 'Kornwestheim', lat: 48.8586, lng: 9.1858, description: 'Ca. 23 km entfernt', zone: 2 },
      { name: 'Bietigheim-Bissingen', lat: 48.9500, lng: 9.1333, description: 'Ca. 28 km entfernt', zone: 2 },
      { name: 'Stuttgart', lat: 48.7756, lng: 9.1828, description: 'Ca. 30 km entfernt', zone: 2 },
      { name: 'Esslingen am Neckar', lat: 48.7394, lng: 9.3047, description: 'Ca. 32 km entfernt', zone: 2 },
      { name: 'Böblingen', lat: 48.6831, lng: 9.0111, description: 'Ca. 40 km entfernt', zone: 2 },
      { name: 'Sindelfingen', lat: 48.7133, lng: 9.0028, description: 'Ca. 38 km entfernt', zone: 2 },
      { name: 'Leinfelden-Echterdingen', lat: 48.6833, lng: 9.1500, description: 'Ca. 35 km entfernt', zone: 2 },
      { name: 'Marbach am Neckar', lat: 48.9333, lng: 9.2500, description: 'Ca. 20 km entfernt', zone: 2 },
      { name: 'Vaihingen an der Enz', lat: 48.9333, lng: 8.9500, description: 'Ca. 35 km entfernt', zone: 2 },
    ]
  },
  {
    id: 'zone3',
    name: 'Weitere Orte (40-70 km)',
    radius: 70,
    color: '#3b82f6',
    description: 'Größere Städte in der Region - auf Anfrage erreichbar',
    cities: [
      // Norden
      { name: 'Heilbronn', lat: 49.1427, lng: 9.2109, description: 'Ca. 45 km entfernt', zone: 3 },
      { name: 'Neckarsulm', lat: 49.1833, lng: 9.2167, description: 'Ca. 50 km entfernt', zone: 3 },
      { name: 'Öhringen', lat: 49.2000, lng: 9.5000, description: 'Ca. 52 km entfernt', zone: 3 },
      { name: 'Schwäbisch Hall', lat: 49.1167, lng: 9.7333, description: 'Ca. 60 km entfernt', zone: 3 },
      // Osten
      { name: 'Aalen', lat: 48.8375, lng: 10.0933, description: 'Ca. 65 km entfernt', zone: 3 },
      { name: 'Schwäbisch Gmünd', lat: 48.8000, lng: 9.8000, description: 'Ca. 45 km entfernt', zone: 3 },
      { name: 'Gaildorf', lat: 49.0000, lng: 9.7667, description: 'Ca. 55 km entfernt', zone: 3 },
      { name: 'Crailsheim', lat: 49.1333, lng: 10.0667, description: 'Ca. 70 km entfernt', zone: 3 },
      // Süden
      { name: 'Tübingen', lat: 48.5200, lng: 9.0556, description: 'Ca. 60 km entfernt', zone: 3 },
      { name: 'Reutlingen', lat: 48.4833, lng: 9.2167, description: 'Ca. 55 km entfernt', zone: 3 },
      { name: 'Kirchheim unter Teck', lat: 48.6500, lng: 9.4500, description: 'Ca. 40 km entfernt', zone: 3 },
      { name: 'Göppingen', lat: 48.7000, lng: 9.6500, description: 'Ca. 42 km entfernt', zone: 3 },
      // Westen
      { name: 'Pforzheim', lat: 48.8950, lng: 8.7050, description: 'Ca. 50 km entfernt', zone: 3 },
      { name: 'Mühlacker', lat: 48.9500, lng: 8.8333, description: 'Ca. 43 km entfernt', zone: 3 },
      { name: 'Bruchsal', lat: 49.1333, lng: 8.6000, description: 'Ca. 65 km entfernt', zone: 3 },
    ]
  }
];

export default function ServiceGebietePage() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

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
            className="text-center mb-12 sm:mb-16"
            >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
                Technik-Service in Backnang und Umgebung
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-300">
                Von Winnenden über Waiblingen bis Stuttgart – wir sind für Sie da
            </p>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 sm:mb-16"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl border border-slate-700 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Interaktive Karte
                </h2>
                <div className="w-full h-96 sm:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden">
                  <MapComponent zones={zones} selectedZone={selectedZone} />
                </div>
              </div>
            </motion.div>

            {/* Zone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {zones.map((zone, index) => (
                <motion.div
                  key={zone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                  className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl border-2 p-4 sm:p-6 cursor-pointer transition-all duration-300 ${
                    selectedZone === zone.id 
                      ? 'border-blue-500 shadow-lg shadow-blue-500/50' 
                      : 'border-slate-700 hover:border-blue-500/50'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base"
                      style={{ backgroundColor: zone.color }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {zone.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-slate-400 mb-3 sm:mb-4">
                    {zone.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {zone.cities.length} Städte
                    </span>
                    <span 
                      className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${zone.color}20`,
                        color: zone.color
                      }}
                    >
                      {zone.radius} km Radius
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Detailed Zone Information - Collapsible */}
            {zones.map((zone, zoneIndex) => {
              const DetailedZone = ({ zone, zoneIndex }: { zone: typeof zones[0], zoneIndex: number }) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: "-100px" });
                const [isExpanded, setIsExpanded] = useState(zoneIndex === 0); // Erste Zone standardmäßig offen
                
                // Animation: 1 from left, 2 from right, 3 from left
                const xDirection = zoneIndex % 2 === 0 ? -100 : 100;
                
                return (
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: xDirection }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xDirection }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4 sm:mb-6"
                  >
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl border border-slate-700 overflow-hidden">
                  {/* Accordion Header */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-2xl flex-shrink-0"
                        style={{ backgroundColor: zone.color }}
                      >
                        {zoneIndex + 1}
                      </div>
                      <div className="text-left">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                          {zone.name}
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-slate-400 mt-1">
                          {zone.description}
                        </p>
                        <span className="text-xs text-slate-500 mt-1 inline-block">
                          {zone.cities.length} Städte
                        </span>
                      </div>
                    </div>
                    
                    {/* Expand/Collapse Icon */}
                    <motion.svg
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 flex-shrink-0 ml-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {/* Accordion Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {zone.cities.map((city, cityIndex) => (
                          <motion.div
                            key={city.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: cityIndex * 0.03 }}
                            className="bg-slate-800/50 rounded-lg p-3 sm:p-4 border border-slate-700 hover:border-blue-500/50 transition-colors"
                          >
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1">
                              {city.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-400">
                              {city.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                  </motion.div>
                );
              };
              
              return <DetailedZone key={zone.id} zone={zone} zoneIndex={zoneIndex} />;
            })}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 sm:mt-16 relative overflow-hidden"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                    Wir kommen zu Ihnen nach Hause!
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-12">
                    Kontaktieren Sie uns für einen Termin – in Backnang, Winnenden, Waiblingen, Stuttgart oder Ihrer Region
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5">
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

