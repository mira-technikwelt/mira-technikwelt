"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Schließe Menü wenn ein Link geklickt wird
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Scroll to top und navigiere zur Startseite
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar - bleibt gleich */}
      <nav className="navbar fixed top-0 left-1/2 -translate-x-1/2 z-40 w-screen px-4 sm:px-6 overflow-x-hidden pt-2 sm:pt-3">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 sm:px-8 py-2 sm:py-3 shadow-lg shadow-black/20 max-w-full sm:max-w-6xl mx-auto overflow-x-hidden">
          <div className="flex items-center justify-between">
            
            {/* Logo links */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    handleLogoClick();
                  }
                }}
              >
                <Image 
                  src="/logo-icon.png" 
                  alt="MIRA Technikwelt Logo - Technikberatung Backnang" 
                  width={64}
                  height={64}
                  className="h-12 sm:h-16 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>

            
            {/* Navigation Mitte - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-6 text-white text-sm">
              <Link href='/leistungen' className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300">
                Leistungen
              </Link>
              <Link href="/gaming-pc" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300">
                Gaming-PC
              </Link>
              <Link href="/service-gebiete" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300">
                Service-Gebiete
              </Link>
              <Link href="/kontakt" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300">
                Kontakt
              </Link>
              <Link href="/ueber-uns" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300">
                Über uns
              </Link>
            </div>

            {/* Kontakt-Buttons rechts - Always visible */}
            <div className="flex items-center gap-1 sm:gap-3 border-l border-white/20 pl-2 sm:pl-6">
              {/* Email */}
              <a 
                href="mailto:info@mira-technikwelt.de" 
                className="text-white hover:text-[#3b82f6] hover:scale-125 transition-all duration-300 p-1 sm:p-2"
                title="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>

              {/* Telefon */}
              <a 
                href="tel:015563168737" 
                className="text-white hover:text-[#3b82f6] hover:scale-125 transition-all duration-300 p-1 sm:p-2"
                title="Anrufen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/4915563168737" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#3b82f6] hover:scale-125 transition-all duration-300 p-1 sm:p-2"
                title="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>

              {/* Hamburger Menu - Mobile only */}
              <label className="hamburger md:hidden ml-2">
                <input 
                  type="checkbox" 
                  checked={isMenuOpen}
                  onChange={(e) => setIsMenuOpen(e.target.checked)}
                  title="Menu"
                  suppressHydrationWarning
                />
                <svg viewBox="0 0 32 32">
                  <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Menu - Slide in from left */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
          
          {/* Side Menu Panel */}
          <nav 
            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 z-50 md:hidden border-l border-slate-700 shadow-2xl"
            style={{
              animation: 'slideInRight 0.3s ease-out'
            }}
          >
            {/* Close Button */}
            <div className="flex justify-end p-6 border-b border-slate-700">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#3b82f6] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-0 p-6">
              <Link 
                href='/leistungen' 
                onClick={handleLinkClick}
                className="text-white hover:text-[#3b82f6] hover:bg-slate-700/50 transition-all duration-300 py-4 px-4 rounded-lg text-lg font-medium"
              >
                Leistungen
              </Link>
              <Link 
                href="/gaming-pc" 
                onClick={handleLinkClick}
                className="text-white hover:text-[#3b82f6] hover:bg-slate-700/50 transition-all duration-300 py-4 px-4 rounded-lg text-lg font-medium"
              >
                Gaming-PC
              </Link>
              <Link 
                href="/service-gebiete" 
                onClick={handleLinkClick}
                className="text-white hover:text-[#3b82f6] hover:bg-slate-700/50 transition-all duration-300 py-4 px-4 rounded-lg text-lg font-medium"
              >
                Service-Gebiete
              </Link>
              <Link 
                href="/kontakt" 
                onClick={handleLinkClick}
                className="text-white hover:text-[#3b82f6] hover:bg-slate-700/50 transition-all duration-300 py-4 px-4 rounded-lg text-lg font-medium"
              >
                Kontakt
              </Link>
              <Link 
                href="/ueber-uns" 
                onClick={handleLinkClick}
                className="text-white hover:text-[#3b82f6] hover:bg-slate-700/50 transition-all duration-300 py-4 px-4 rounded-lg text-lg font-medium"
              >
                Über uns
              </Link>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700 mx-6 my-6"></div>

            {/* Contact Section */}
            <div className="px-6">
              <h3 className="text-slate-400 text-sm font-semibold mb-4">KONTAKT</h3>
              <div className="flex flex-col space-y-3">
                <a 
                  href="mailto:info@mira-technikwelt.de" 
                  onClick={handleLinkClick}
                  className="text-white hover:text-[#3b82f6] transition-colors duration-300 flex items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>Email</span>
                </a>
                <a 
                  href="tel:015563168737" 
                  onClick={handleLinkClick}
                  className="text-white hover:text-[#3b82f6] transition-colors duration-300 flex items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>Anrufen</span>
                </a>
                <a 
                  href="https://wa.me/4915563168737" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="text-white hover:text-[#3b82f6] transition-colors duration-300 flex items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </nav>
        </>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Hamburger Menu Animation - From Uiverse.io */
        .hamburger {
          cursor: pointer;
        }

        .hamburger input {
          display: none;
        }

        .hamburger svg {
          height: 1.8rem;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line {
          fill: none;
          stroke: white;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top-bottom {
          stroke-dasharray: 12 63;
        }

        .hamburger input:checked + svg {
          transform: rotate(-45deg);
        }

        .hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
      `}</style>
    </>
  );
}