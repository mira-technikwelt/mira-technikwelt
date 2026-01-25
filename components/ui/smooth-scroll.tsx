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
        // Higher lerp = lighter smoothing (less drag). 0.12 feels snappier.
        lerp: 0.16,
        smoothWheel: true,
        syncTouch: true,
        // Slightly reduce wheel delta to feel less heavy
        wheelMultiplier: 0.8,
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


