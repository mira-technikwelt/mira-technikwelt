'use client';

import { useRouter } from 'next/navigation';
import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function FahrkostenPage() {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => router.back()}
            className="bg-blue-500 text-center w-48 rounded-2xl h-14 relative text-white text-xl font-semibold group mb-8"
            type="button"
          >
            <div
              className="bg-blue-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#ffffff"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2">Zurück</p>
          </motion.button>

          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Fahrtkosten
            </h1>
            <p className="text-lg text-slate-300">
              Transparente Berechnung für unsere Vor-Ort-Services
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Pricing Info */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-6">
                <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                  <h2 className="text-2xl font-bold text-white mb-2">Kostenlos</h2>
                  <p className="text-slate-300">
                    <strong>Postleitzahl 71522 (Backnang)</strong> - Keine Fahrtkosten in Backnang
                  </p>
                </div>

                <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
                  <h2 className="text-2xl font-bold text-white mb-2">€ 0,50 pro Kilometer</h2>
                  <p className="text-slate-300 mb-3">
                    <strong>Außerhalb 71522</strong>
                  </p>
                  <p className="text-sm text-slate-400">
                    Hin- und Zurückfahrt von Backnang aus berechnet. Transparent vor dem Termin kommuniziert.
                  </p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="font-semibold text-white mb-3">Berechnungsbeispiel:</h3>
              <p className="text-slate-400 text-xs mb-3">(Hin- und Zurückfahrt von Backnang)</p>
              <div className="space-y-2 text-slate-300 text-sm">
                <div>• 15 km Entfernung → 30 km (hin & zurück) × € 0,50 = € 15,00</div>
                <div>• 25 km Entfernung → 50 km (hin & zurück) × € 0,50 = € 25,00</div>
                <div>• 50 km Entfernung → 100 km (hin & zurück) × € 0,50 = € 50,00</div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
              <p className="text-slate-300 text-sm leading-relaxed">
                Fahrtkosten werden zusätzlich zu der jeweiligen Servicegebühr berechnet. Bei Fragen kontaktieren Sie uns gerne direkt - wir klären die genaue Entfernung vor Ihrem Termin.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
