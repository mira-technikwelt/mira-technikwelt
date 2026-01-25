'use client';

import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ImpressumPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Impressum
            </h1>
            <p className="text-lg text-slate-300">
              Angaben gemäß § 5 TMG
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Unternehmen */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Unternehmen</h2>
              
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <div>
                  <p className="font-semibold text-white mb-2">MIRA Technikwelt GbR</p>
                  <p>Mickael & Raphael Pulfermuller</p>
                  <p>Geschwister-Scholl-Straße 22</p>
                  <p>71522 Backnang</p>
                </div>
              </div>
            </div>

            {/* Vertreter */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Vertreten durch</h2>
              
              <div className="space-y-2 text-slate-300">
                <p>Raphael Pulfermuller</p>
                <p>Mickael Pulfermuller</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Kontakt</h2>
              
              <div className="space-y-3 text-slate-300">
                <div>
                  <p className="font-semibold text-white mb-1">Telefon</p>
                  <a href="tel:015563168737" className="text-blue-400 hover:text-blue-300 transition-colors">
                    +49 155 63168737
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">E-Mail</p>
                  <a href="mailto:info@mira-technikwelt.de" className="text-blue-400 hover:text-blue-300 transition-colors">
                    info@mira-technikwelt.de
                  </a>
                </div>
              </div>
            </div>

            {/* Rechtsform */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6">Rechtsform & Steuern</h2>
              
              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <div>
                  <p className="font-semibold text-white mb-2">Rechtsform</p>
                  <p>Gesellschaft bürgerlichen Rechts (GbR)</p>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <p className="font-semibold text-white mb-2">Umsatzsteuer-ID</p>
                  <p>
                    Keine Ausweisung der Umsatzsteuer gemäß § 19 UStG (Kleinunternehmer)
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Haftungsausschluss</h2>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Die Informationen auf dieser Website werden ohne Gewähr für ihre Korrektheit, Vollständigkeit oder Aktualität bereitgestellt. MIRA Technikwelt haftet nicht für Schäden, die durch die Nutzung der Website oder ihrer Inhalte entstehen, soweit diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.
              </p>
            </div>

            {/* Datenschutz Link */}
            <div className="text-center">
              <a 
                href="/datenschutz"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
              >
                Zur Datenschutzerklärung
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
