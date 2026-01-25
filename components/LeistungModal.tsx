// components/LeistungModal.tsx
"use client";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import KontaktModal from '@/components/KontaktModal';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface LeistungModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory?: string;
  service: {
    title: string;
    description: string;
    image: string;
    category: string;
    price?: string;
    prices?: {
      base?: string;
      baseInfo?: string;
      additional?: string;
    };
    duration?: string;
    slug?: string;
  };
}

export default function LeistungModal({ isOpen, onClose, service, activeCategory }: LeistungModalProps) {
  const [showKontaktModal, setShowKontaktModal] = useState(false);
  const router = useRouter();

  // Body Scroll sperren wenn Modal offen - NUR overflow hidden, kein position fixed
  useEffect(() => {
    if (isOpen) {
      // Verhindere Scrollen
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  const handleErfahreMehr = () => {
    if (service.slug) {
      // Navigiere zur Service-Seite
      router.push(`/leistungen/${service.slug}`);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm pointer-events-auto"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-black/0 via-slate-950 to-slate-950 rounded-2xl shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Hero Image mit Gradient Overlay */}
                <div className="relative w-full h-56 md:h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 via-60% to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 px-4 md:px-8 pb-4 md:pb-6 pt-4 bg-slate-950">
                  <h2 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-4">
                    {service.title}
                  </h2>

                  <p className="text-xs md:text-base text-gray-300 mb-2 md:mb-4 leading-relaxed">
                    Erfahren Sie mehr über diese Leistung, Preise und Details auf unserer 
                    Serviceseite <br/> oder kontaktieren Sie uns direkt für eine persönliche Beratung.
                  </p>

                  <div className="mb-3 md:mb-6">
                    {(() => {
                      const priceText = service.price ?? (service.prices?.base ? `ab ${service.prices.base}` : '');
                      return priceText ? (
                        <>
                          <span className="text-lg md:text-2xl font-bold text-white">{priceText}</span>
                          <br />
                          <Link href="/fahrtkosten" className="text-blue-400 hover:text-blue-300 text-sm">
                            zzgl. Fahrtkosten
                          </Link>
                        </>
                      ) : null;
                    })()}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap gap-2 md:gap-4">
                    <button 
                      onClick={() => setShowKontaktModal(true)}
                      className="group relative inline-block cursor-pointer border-0 bg-transparent p-0 w-full md:w-64 h-auto"
                    >
                      <span className="relative block w-12 h-12 bg-blue-500 rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
                        <span className="absolute top-0 bottom-0 left-2.5 my-auto w-[1.125rem] h-0.5 bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] before:absolute before:content-[''] before:-top-[0.29rem] before:right-[0.0625rem] before:w-2.5 before:h-2.5 before:border-t-2 before:border-r-2 before:border-white before:rotate-45 group-hover:bg-white group-hover:translate-x-4" />
                      </span>
                      <span className="absolute top-0 left-0 right-0 bottom-0 py-3 ml-[1.85rem] text-white font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] text-xs md:text-sm">
                        Kontaktieren sie uns
                      </span>
                    </button>

                    <button 
                        onClick={handleErfahreMehr}
                        className="group relative inline-block cursor-pointer border-0 bg-transparent p-0 w-full md:w-64 h-auto"
                      >
                      <span className="relative block w-12 h-12 bg-blue-500 rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
                        <span className="absolute top-0 bottom-0 left-2.5 my-auto w-[1.125rem] h-0.5 bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] before:absolute before:content-[''] before:-top-[0.29rem] before:right-[0.0625rem] before:w-2.5 before:h-2.5 before:border-t-2 before:border-r-2 before:border-white before:rotate-45 group-hover:bg-white group-hover:translate-x-4" />
                      </span>
                      <span className="absolute top-0 left-0 right-0 bottom-0 py-3 ml-[1.85rem] text-white font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] text-xs md:text-sm">
                        Erfahren sie mehr
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Kontakt Modal */}
      <KontaktModal 
        isOpen={showKontaktModal} 
        onClose={() => setShowKontaktModal(false)} 
      />
    </>
  );
}