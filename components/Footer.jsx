"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Logo + Beschreibung */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img src="/logo-icon.png" alt="MIRA Technikwelt Logo" className="h-10 sm:h-12" />
              <span className="text-lg sm:text-2xl font-bold text-white">MIRA Technikwelt</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-4 sm:mb-6 leading-relaxed">
              Ihre Technikexperten aus Backnang für Winnenden, Waiblingen,
              Stuttgart und Umgebung. Wir richten Ihre Technik ein, erklären
              verständlich und sind persönlich für Sie da.
            </p>
            <div className="flex gap-2 sm:gap-4">
              <a 
                href="mailto:info@mira-technikwelt.de" 
                className="text-slate-400 hover:text-[#3b82f6] hover:scale-125 transition-all duration-300 p-1 sm:p-2"
                aria-label="Email an MIRA Technikwelt"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a 
                href="tel:015563168737" 
                className="text-slate-400 hover:text-[#3b82f6] hover:scale-125 transition-all duration-300 p-1 sm:p-2"
                aria-label="MIRA Technikwelt anrufen"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/4915563168737" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#3b82f6] hover:scale-125 transition-all duration-300 p-1 sm:p-2"
                aria-label="MIRA Technikwelt via WhatsApp kontaktieren"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Service-Gebiete */}
<div>
  <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Service-Gebiete</h3>
  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
    <li><a href="/service-gebiete" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Backnang</a></li>
    <li><a href="/service-gebiete" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Winnenden</a></li>
    <li><a href="/service-gebiete" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Waiblingen</a></li>
    <li><a href="/service-gebiete" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Stuttgart</a></li>
    <li><a href="/service-gebiete" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block font-semibold">+ 50 weitere Städte</a></li>
  </ul>
</div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Unternehmen</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#ueber-uns" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Über uns</a></li>
              <li><a href="/service-gebiete" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Service-Gebiete</a></li>
              <li><a href="/kontakt" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Kontakt</a></li>
              <li><a href="/impressum" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-[#3b82f6] hover:scale-110 transition-all duration-300 inline-block">Datenschutz</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-slate-500 text-xs sm:text-sm">
          <p>© 2024 MIRA Technikwelt. Alle Rechte vorbehalten.</p>
          <p className="mt-1 sm:mt-2 text-xs">Technikberatung aus Backnang - Wir kommen zu Ihnen in die gesamte Region</p>
        </div>
      </div>
    </footer>
  );
}