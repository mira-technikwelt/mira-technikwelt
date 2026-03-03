"use client";
import { useState } from 'react';
import Navigation from '@/app/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<null | { type: 'success' | 'error'; text: string }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatusMessage({ type: 'error', text: data?.error || 'Fehler beim Senden der Nachricht.' });
      } else {
        setStatusMessage({ type: 'success', text: 'Nachricht gesendet. Wir melden uns schnellstmöglich.' });
        setFormData({ name: '', email: '', telefon: '', nachricht: '' });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Netzwerkfehler. Bitte später erneut versuchen.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black"></div>
      
      <div className="relative z-10">
        <Navigation />
        
        <div className="min-h-screen pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
                Kontakt zu MIRA Technikwelt
              </h1>
              <p className="text-sm sm:text-base md:text-2xl text-slate-300">
                Rufen Sie an, schreiben Sie uns oder nutzen Sie unser Kontaktformular
              </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              
              {/* Links: Kontaktformular */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-b from-[#0f172a] via-slate-900 to-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700 p-4 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                    Kontaktformular
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-medium text-slate-300 mb-1 sm:mb-2 text-xs sm:text-sm">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        style={{ fontSize: '16px' }}
                        placeholder="Ihr Name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-medium text-slate-300 mb-1 sm:mb-2 text-xs sm:text-sm">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        style={{ fontSize: '16px' }}
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    {/* Telefon */}
                    <div>
                      <label htmlFor="telefon" className="block font-medium text-slate-300 mb-1 sm:mb-2 text-xs sm:text-sm">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        style={{ fontSize: '16px' }}
                        placeholder="0155 12345678"
                      />
                    </div>

                    {/* Nachricht */}
                    <div>
                      <label htmlFor="nachricht" className="block font-medium text-slate-300 mb-1 sm:mb-2 text-xs sm:text-sm">
                        Nachricht *
                      </label>
                      <textarea
                        id="nachricht"
                        name="nachricht"
                        required
                        rows={6}
                        value={formData.nachricht}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-600 rounded-lg text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        style={{ fontSize: '16px' }}
                        placeholder="Ihre Nachricht an uns..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-blue-600 via-blue-500 to-blue-600" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-blue-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        {submitting ? (
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l-3 3-3-3v4a4 4 0 00-2 2z" />
                          </svg>
                        ) : (
                          <span>Nachricht senden</span>
                        )}
                      </div>
                    </button>

                    {statusMessage && (
                      <div className={`mt-4 p-3 rounded ${statusMessage.type === 'success' ? 'bg-emerald-600' : 'bg-rose-600'} text-white text-sm`}>
                        {statusMessage.text}
                      </div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Rechts: Kontaktinformationen */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-gradient-to-b from-[#0f172a] via-slate-900 to-slate-900 rounded-2xl sm:rounded-3xl border border-slate-700 p-4 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                    Direkter Kontakt
                  </h2>
                  
                  <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8">
                     Sie erreichen uns telefonisch, per WhatsApp oder E-Mail – wir sind gerne für Sie da!
                  </p>

                  {/* Kontakt Buttons */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {/* Anrufen Button */}
                    <a 
                      href="tel:015563168737"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group w-full"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-blue-600 via-blue-500 to-blue-600" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-blue-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span>Jetzt anrufen</span>
                      </div>
                    </a>

                    {/* WhatsApp Button */}
                    <a 
                      href="https://wa.me/4915563168737"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group w-full"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-green-600 via-green-500 to-green-500" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-green-500 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <span>WhatsApp schreiben</span>
                      </div>
                    </a>

                    {/* Email Button */}
                    <a 
                      href="mailto:info@mira-technikwelt.de"
                      className="relative border-0 bg-transparent p-0 cursor-pointer outline-none group w-full"
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-black/25 rounded-full translate-y-0.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-2 group-active:translate-y-[1px]" />
                      <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-l from-slate-700 via-slate-600 to-slate-700" />
                      <div className="relative flex items-center justify-center gap-2 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-xl text-white bg-slate-600 rounded-full -translate-y-1 transition-transform duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-2.5 group-active:-translate-y-0.5 select-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span>E-Mail senden</span>
                      </div>
                    </a>
                  </div>

                  {/* Kontaktinformationen */}
<div className="mt-6 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700">
  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
    Unsere Kontaktdaten
  </h3>
  <div className="space-y-2 sm:space-y-3 text-slate-300 text-sm sm:text-base">
    <div className="flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
      <a href="tel:015563168737" className="hover:text-blue-400 transition-colors">
        0155 63168737
      </a>
    </div>
    <div className="flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
      <a href="mailto:info@mira-technikwelt.de" className="hover:text-blue-400 transition-colors">
        info@mira-technikwelt.de
      </a>
    </div>
    <div className="flex items-start gap-3 mt-4 pt-4 border-t border-slate-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-400 mt-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      <div>
        <p className="font-medium text-white">Service-Gebiete</p>
        <p className="text-sm">Backnang und Umgebung</p>
        <p className="text-sm text-slate-400">Winnenden • Waiblingen • Stuttgart</p>
      </div>
    </div>
  </div>
</div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
