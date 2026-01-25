import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);

useEffect(() => {
  // Check if mobile device (width < 768px)
  const isMobile = window.innerWidth < 768;

  // prevent hero-button flash: set initial state and temporarily disable its CSS transition
  const heroButtons = Array.from(document.querySelectorAll('.hero-button'));
  heroButtons.forEach((b) => {
    // disable CSS transition that can interfere with GSAP
    b.style.transition = 'none';
  });

  // ensure the buttons start off-screen / invisible
  gsap.set('.hero-button', { y: 100, opacity: 0 });
  // ensure the navbar starts hidden for each preloader run
  gsap.set('.navbar', { y: -100, opacity: 0 });

  // On mobile: skip preloader completely, just animate navbar and button quickly
  if (isMobile) {
    // Hide preloader immediately
    gsap.set(preloaderRef.current, { y: '-100%' });
    
    // Animate navbar and button quickly
    gsap.to('.navbar', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      delay: 0.2
    });
    gsap.to('.hero-button', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      delay: 0.2,
      onComplete: () => {
        heroButtons.forEach((b) => {
          b.style.transition = '';
        });
        onComplete && onComplete();
      }
    });
    return;
  }

  // Desktop: normal preloader animation
  const tl = gsap.timeline({
    onComplete: () => {
      // restore the original CSS transition after the animation
      heroButtons.forEach((b) => {
        b.style.transition = '';
      });
      // call parent onComplete
      onComplete && onComplete();
    }
  });

  // Logo fade in und scale
  tl.fromTo(
    logoRef.current,
    { opacity: 0, scale: 0.5 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power2.out'
    }
  )
    // Kurze Pause
    .to({}, { duration: 0.5 })
    // Preloader nach oben weg
    .to(preloaderRef.current, {
      y: '-100%',
      duration: 1,
      ease: 'power2.inOut'
    })

    // Animate navbar and hero-button together (label 'reveal')
    .addLabel('reveal')
    .to(
      '.navbar',
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      },
      'reveal'
    )
    .to(
      '.hero-button',
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      },
      'reveal'
    );


}, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <img 
        ref={logoRef}
        src="/logo.png" 
        alt="Mira Technikwelt Logo" 
        className="w-64 h-auto opacity-0"
      />
    </div>
  );
};

export default Preloader;