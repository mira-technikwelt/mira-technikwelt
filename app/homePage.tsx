"use client"
import ShinyText from '@/components/ShinyText';
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import { useRouter } from 'next/navigation';
import { BackgroundLines } from '@/components/ui/background-lines';
import Navigation from './Navigation';
import AboutSection from '@/components/aboutSection';
import ServicesSection from '@/components/servicesSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import { Zap, Euro, User, Phone } from 'lucide-react';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Restore scroll position on back navigation, otherwise scroll to top
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    const skipRestore = sessionStorage.getItem('skipScrollRestore');
    
    if (savedPosition && !skipRestore) {
      // Zurück-Navigation: Position wiederherstellen
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPosition), left: 0, behavior: 'instant' });
      }, 0);
      sessionStorage.removeItem('scrollPosition');
    } else {
      // Frischer Seitenaufruf: nach oben scrollen
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    
    // Clean up skip flag
    sessionStorage.removeItem('skipScrollRestore');
  }, []);

  return (
  <>
    {loading && <Preloader onComplete={() => setLoading(false)} />}
    
    <Navigation />
    
    {/* Hero - fixed im Hintergrund */}
    <div className="fixed inset-0 z-0">
     <BackgroundLines className="flex items-center justify-center w-full h-full">
        <div className="text-center text-white max-w-4xl px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 font-[family-name:var(--font-inter-tight)]">
            <ShinyText 
                text="MIRA Technikwelt" 
                disabled={false} 
                speed={10} 
                className="bg-gradient-to-r from-[#6C8DB9] to-[#6D8FBA] bg-clip-text text-transparent"
            />
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">
            Technikberatung aus Backnang <br />
            für Rems-Murr-Kreis & Region Stuttgart
            </p>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-4 sm:mb-6 leading-relaxed">
            Wir kommen zu Ihnen nach Hause und richten Fernseher, Computer, Router, Smart Home und vieles mehr ein.<br />
            Persönlich, verständlich, zuverlässig.
            </p>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-300">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Noch am selben Tag</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
                <Euro className="w-4 h-4 text-blue-400" />
                <span>Festpreise</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
                <User className="w-4 h-4 text-blue-400" />
                <span>Persönlicher Ansprechpartner</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Kein Callcenter</span>
            </div>
            </div>
          <div className="flex justify-center mb-8 sm:mb-12">
            <button
              className="hero-button button text-sm sm:text-base px-4 sm:px-6"
              onClick={() => router.push('/leistungen')}
            >
              Unsere Leistungen
              <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                <path
                  clipRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </BackgroundLines>
    </div>

    {/* Content scrollt über Hero */}
    <div className="relative z-10" style={{ marginTop: '100vh' }}>
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />

    </div>
  </>
  );
}