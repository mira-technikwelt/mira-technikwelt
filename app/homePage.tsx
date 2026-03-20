"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from './Navigation';
import AboutSection from '@/components/aboutSection';
import ServicesSection from '@/components/servicesSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    const skipRestore = sessionStorage.getItem('skipScrollRestore');
    if (savedPosition && !skipRestore) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPosition), left: 0, behavior: 'instant' });
      }, 0);
      sessionStorage.removeItem('scrollPosition');
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    sessionStorage.removeItem('skipScrollRestore');
  }, []);

useEffect(() => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}, []);

  return (
  <>
    <Navigation />

    {/* ── HERO ── */}
    <div className="fixed inset-0 z-0">
      <div className="relative w-full overflow-hidden" style={{ maxWidth: '5120px', margin: '0 auto', height: 'calc(var(--vh, 1vh) * 100)' }}>

        {/* Hintergrundbild */}
        <div
          className="absolute inset-0 bg-center"
          style={{ 
            backgroundImage: "url('/hero_background.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
          }}
        />

        {/* Desktop Gradient – links dunkel, rechts transparent */}
        <div
          className="absolute inset-0 hero-overlay-desktop"
          style={{
            background: 'linear-gradient(to right, rgba(10, 20, 50, 0.75) 0%, rgba(10, 20, 50, 0.5) 30%, rgba(10, 20, 50, 0.15) 55%, transparent 75%)',
          }}
        />

        {/* Mobiles Overlay – volle Fläche abdunkeln */}
        <div
          className="absolute inset-0 hero-overlay-mobile"
          style={{ background: 'rgba(10, 20, 50, 0.72)' }}
        />

        {/* ── HERO CONTENT ── */}
        <div className="absolute inset-0 flex items-center hero-content-wrapper" style={{ paddingBottom: '160px', paddingTop: 'clamp(200px, 14vw, 120px)'
}}>
          <div className="hero-text-block">

            {/* Willkommen bei */}
            <span style={{
              display: 'block',
              fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.55)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              Willkommen bei
            </span>

            {/* MIRA Technikwelt */}
            <h1
              className="font-[family-name:var(--font-inter-tight)]"
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 5.5rem)',
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                marginBottom: '14px',
              }}
            >
              <span style={{ color: '#60a5fa' }}>MIRA </span>
              <span style={{ color: '#ffffff' }}>Technikwelt</span>
            </h1>

            {/* Subline */}
            <p style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              fontWeight: 400,
              color: '#ffffff',
              marginBottom: '22px',
            }}>
              Technikberatung aus Backnang <br></br>für Rems‑Murr‑Kreis &amp; Region Stuttgart
            </p>

            {/* Beschreibung */}
            <p style={{
              fontSize: 'clamp(0.9rem, 1.9vw, 1.05rem)',
              lineHeight: 1.75,
              color: 'rgba(220, 220, 220, 0.95)',
              maxWidth: '360px',
              marginBottom: '36px',
            }}>
              Wir kommen zu Ihnen nach Hause und richten Fernseher, Computer, Router,
              Smart Home und vieles mehr ein.{' '}
              <strong style={{ color: '#60a5fa', fontWeight: 600, display: 'block', marginTop: '6px' }}>
                Persönlich, verständlich, zuverlässig.
              </strong>
            </p>
            
            {/* Button */}
            <div>
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
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── SCROLL DOWN INDICATOR ── */}
        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        >
          <div className="mouse-btn">
            <span className="mouse-scroll"></span>
          </div>
          <span className="text-xs sm:text-sm font-medium text-white/60" style={{ letterSpacing: '0.1em' }}>
            Scroll Down
          </span>
        </div>

      </div>
    </div>

        <div style={{ height: 'calc(var(--vh, 1vh) * 100)' }} />
    {/* Restlicher Seiteninhalt */}
    <div className="relative z-10" style={{ marginTop: 0 }}>
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  </>
  );
}