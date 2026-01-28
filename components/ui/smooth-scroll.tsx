"use client";
import { useEffect } from "react";

// Lenis provides smooth, inertial-like scrolling for a premium feel
export default function SmoothScroll() {
  useEffect(() => {
    let lenis: any;
    let rafId: number | null = null;

    async function setup() {
      const { default: Lenis } = await import("@studio-freight/lenis");
      lenis = new Lenis({
        // Leichter Smooth Scroll - höherer lerp = weniger Widerstand
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false,
        // Leicht reduzierter wheelMultiplier für sanften Effekt
        wheelMultiplier: 0.9,
      });

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    setup();

    return () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return null;
}


