"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const WobbleImage = ({ src, alt }: { src: string; alt: string }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { filter: 'brightness(0.4)' },
      {
        filter: 'brightness(1)',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom-=100',
          end: 'bottom center',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={imageRef}
      className="aspect-square rounded-3xl overflow-hidden relative"
    >
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
};

const FeatureItems = ({ items }: { items: string[] }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', marginTop: '1.5rem', fontWeight: 400, fontSize: '1rem' }}>
    {items.map((label) => (
      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
        <span style={{ color: '#60a5fa' }}>✓</span>
        <span>{label}</span>
      </div>
    ))}
  </div>
);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { maxWidth: '1280px', borderRadius: '24px 24px 0 0' },
      {
        maxWidth: '100%',
        borderRadius: '0px',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'top bottom-=800',
          scrub: 1,
        },
      }
    );

    [textRef1, textRef2, textRef3, textRef4].forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom-=100',
            end: 'bottom center',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0f172a] min-h-screen flex items-center mx-auto"
    >
      <div className="w-full px-4 sm:px-8 py-12 sm:py-20">

        {/* Erste Row - Bild links, Text rechts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center max-w-7xl mx-auto mb-16 sm:mb-32">
          <WobbleImage src="/setup_background.webp" alt="Raphael - Technikexperte" />

          <div>
            <div ref={textRef1} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 text-white">
              Ihre Technikexperten aus Backnang
            </div>
            <div ref={textRef2} className="text-base sm:text-lg md:text-3xl font-bold mb-6 text-slate-300">
              Wir sind Raphael und Mickael - zwei Brüder mit einer Mission: 
              Technik soll einfach und verständlich sein. 
              <br /><br />
              Langsamer Computer? WLAN-Probleme? Neuer Fernseher, aber die Einrichtung ist kompliziert? <br />
              Wir lösen Ihre technischen Probleme schnell und unkompliziert - direkt bei Ihnen vor Ort 
              in Backnang, Winnenden, Waiblingen und Umgebung.
              <FeatureItems items={['Noch am selben Tag', 'Festpreise']} />
            </div>
          </div>
        </div>

        {/* Zweite Row - Text links, Bild rechts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center max-w-7xl mx-auto">
          <div>
            <div ref={textRef3} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 text-white">
              Zuverlässig und persönlich
            </div>
            <div ref={textRef4} className="text-base sm:text-lg md:text-3xl font-bold mb-6 text-slate-300">
              Von der gemeinsamen Auswahl des passenden Geräts bis zur transparenten Einrichtung vor Ort 
              begleiten wir Sie Schritt für Schritt.
              <br /><br />
              Anschließend erhalten Sie eine verständliche Einweisung - 
              damit Sie Ihre Technik sicher nutzen können.
              <br /><br />
              Kein Callcenter, keine Warteschleifen: Sie erreichen uns direkt.
              Bei Rückfragen meldet sich der Techniker, der bei Ihnen war, persönlich zurück.
              <FeatureItems items={['Persönlicher Ansprechpartner', 'Kein Callcenter']} />
            </div>
          </div>

          <WobbleImage src="/setup_background_seite.webp" alt="Fernseher-Streaming" />
        </div>

      </div>
    </section>
  );
}