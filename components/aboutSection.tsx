"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

// Einfache Wobble Image Komponente mit Scroll Animation
const WobbleImage = ({ src, alt, href }: { src: string; alt: string; href?: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef(null);
  const router = useRouter();

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { 
        filter: 'brightness(0.4)'
      },
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
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onClick={handleClick}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1.02, 1.02, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={`aspect-square rounded-3xl overflow-hidden relative ${href ? 'cursor-pointer' : ''}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        style={{
          transform: isHovering
            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.05, 1.05, 1)`
            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
          transition: "transform 0.1s ease-out",
        }}
      />
    </motion.div>
  );
};

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        maxWidth: '1280px',
        borderRadius: '24px 24px 0 0',
      },
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
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 min-h-screen flex items-center mx-auto"
    >
      <div className="w-full px-4 sm:px-8 py-12 sm:py-20">
        {/* Erste Row - Bild links, Text rechts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center max-w-7xl mx-auto mb-16 sm:mb-32">
          {/* Bild links mit Wobble Effekt */}
          <WobbleImage src="/micka_rapha.png" alt="Raphael - Technikexperte" href="/ueber-uns" />

          {/* Text rechts mit Float Effect */}
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
              
            </div>
          </div>
        </div>

        {/* Zweite Row - Text links, Bild rechts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center max-w-7xl mx-auto">
          {/* Text links mit Float Effect */}
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
            </div>
            </div>

          {/* Bild rechts mit Wobble Effekt */}
          <WobbleImage src="/einrichtung_about.png" alt="Fernseher-Streaming" href="/ueber-uns" />
        </div>
      </div>
    </section>
  );
}