"use client";
import { useState, useRef, useEffect } from 'react';
import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import LeistungModal from '@/components/LeistungModal';
import { useRouter } from 'next/navigation';
import { services, categories } from '@/data/services';

export default function LeistungenPage() {
  const [activeCategory, setActiveCategory] = useState('alle');
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Restore scroll position and category filter on back navigation
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    const skipRestore = sessionStorage.getItem('skipScrollRestore');
    const savedCategory = sessionStorage.getItem('activeCategory');
    
    if (savedPosition && !skipRestore) {
      // Zurück-Navigation: Position wiederherstellen
      if (savedCategory) {
        setActiveCategory(savedCategory);
      }
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPosition), left: 0, behavior: 'instant' });
      }, 0);
      sessionStorage.removeItem('scrollPosition');
      sessionStorage.removeItem('activeCategory');
    } else {
      // Frischer Seitenaufruf: nach oben scrollen
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    
    // Clean up skip flag
    sessionStorage.removeItem('skipScrollRestore');
  }, []);

  const filteredServices = activeCategory === 'alle' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // NUR Opacity Fade - KEINE Bewegung!
  const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
      const element = ref.current;
      if (!element || hasAnimatedRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              hasAnimatedRef.current = true;
              setOpacity(1);
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px',
        }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    }, []);

    return (
      <div
        ref={ref}
        style={{ 
          opacity,
          transition: 'opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        onClick={() => setSelectedService(service)} 
        className="group w-full h-64 sm:h-80 md:h-96 bg-gradient-to-b 
          from-[#14243A] 
          to-[#0F1C2E]

          border border-white/5
          hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
          rounded-2xl border border-slate-700 overflow-hidden cursor-pointer transition-[transform,border-color,box-shadow] duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] hover:border-blue-500/50"
      >
        {/* Bild oben */}
        <div className="h-40 sm:h-48 md:h-60 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center relative overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            width={640}
            height={480}
            className="object-cover w-full h-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            quality={90}
            loading="lazy"
          />
        </div>

        {/* Text unten */}
        <div className="p-3 sm:p-4 md:p-6">
          <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-white text-center mb-1 sm:mb-2 transition-colors duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:text-blue-500">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 text-center">
            {service.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-blacks"></div>
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="min-h-screen pt-40 pb-20">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

            {/* Filter Buttons mit Border Magic */}
            <div className="flex flex-wrap gap-3 mb-16 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none transition-all duration-300 ${
                    activeCategory === cat.id ? '' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {activeCategory === cat.id && (
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#60a5fa_50%,#3b82f6_100%)]" />
                  )}
                  <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-6 text-sm font-medium backdrop-blur-3xl transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-slate-950 text-white'
                      : 'bg-slate-900/50 text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Layout: Links Header, Rechts Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
              
              {/* Linke Seite - Header & Logo (nur große Desktop-Screens) */}
              <div className="hidden xl:block xl:col-span-3">
                <div className="sticky top-32">
                  <h1 className="text-6xl font-bold text-white mb-8">
                    Unsere<br />Leistungen
                  </h1>
                  <div className="mb-8">
                    <Image
                      src="/logo-icon.png"
                      alt="MIRA Technikwelt Logo"
                      width={150}
                      height={150}
                      className="opacity-80"
                    />
                  </div>
                  <p className="text-slate-400 text-lg">
                   Einrichtung von Fernsehern, Computern, Routern, Smart-Home-Systemen & mehr<br /><br/> 
                    Persönlicher Service in Backnang und Umgebung – von Winnenden über 
                    Waiblingen bis Ludwigsburg und der gesamten Region Stuttgart.
                  </p>
                </div>
              </div>

              {/* Rechte Seite - Service Cards */}
              <div className="xl:col-span-9 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mx-auto sm:max-w-2xl xl:max-w-none">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                  ))}
                </div>

                {filteredServices.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-2xl text-slate-400">
                      Keine Leistungen in dieser Kategorie gefunden.
                    </p>
                  </div>
                )}
              </div>

            </div>

           {/* CTA Section */}
            <div className="mt-12 sm:mt-24 relative overflow-hidden">
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10
                                                  via-transparent to-cyan-400/10 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-6">
                    Nicht das Richtige dabei?
                  </h2>
                  <p className="text-sm sm:text-base md:text-2xl text-slate-300 mb-6 sm:mb-12">
                    Kontaktieren Sie uns – wir helfen Ihnen bei allen technischen Fragen!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6">
                    {/* Anrufen Button - Blau */}
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

                    {/* WhatsApp Button - Grün */}
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

                    {/* Email Button - Grau */}
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
            </div>
          </div>
        </div>

        <Footer />
      </div>
      {/* Modal */}
      <LeistungModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService || services[0]}
        activeCategory={activeCategory}
      />
    </>
  );
}