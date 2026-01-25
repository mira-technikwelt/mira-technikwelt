"use client";
import Image from "next/image"; 
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LeistungModal from "@/components/LeistungModal";

const SERVICES = [
  {
    title: "Fernseher Einrichtung",
    description: "Sender sortieren, Apps installieren, Geräte anschließen und mehr",
    image: "/tv.png",
    isImage: true,
    category: "installation",
    slug: "fernseher-einrichtung",
    price: "ab 59€",
  },
  {
    title: "Computer & Laptop",
    description: "Windows einrichten, Programme installieren, Daten übertragen und mehr",
    image: "/laptop.png",
    isImage: true,
    category: "installation",
    slug: "computer-laptop-einrichtung",
    price: "ab 79€",
  },
  {
    title: "Router & WLAN",
    description: "Internet einrichten, WLAN optimieren, Sicherheit erhöhen und mehr",
    image: "/router.png",
    isImage: true,
    category: "installation",
    slug: "router-wlan-einrichtung",
    price: "ab 69€",
  },
  {
    title: "Smart-Home Geräte",
    description: "Drucker, Saugroboter, Alexa und mehr einrichten",
    image: "/smarthome.png",
    isImage: true,
    category: "installation",
    slug: "smart-home-einrichtung",
    price: "ab 59€",
  },
  {
    title: "Smartphone & Tablet",
    description: "Apps einrichten, Kontakte übertragen, Cloud verbinden und mehr",
    image: "/handy.png",
    isImage: true,
    category: "installation",
    slug: "smartphone-tablet-einrichtung",
    price: "ab 49€",
  },
  {
    title: "Gaming-PC Aufbau",
    description: "Hardware zusammenbauen, Treiber installieren, optimieren und mehr",
    image: "/gamingpc.png",
    isImage: true,
    category: "gaming",
    slug: "gaming-pc-aufbau-installation",
    price: "ab 119€",
  }
];

export default function ServicesSection() {
  const router = useRouter();
  const services = SERVICES;
  const [repeatMultiplier, setRepeatMultiplier] = useState(1);
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  useEffect(() => {
    const updateMultiplier = () => {
      const isSmallScreen = window.innerWidth < 768;
      const CARD_WIDTH = isSmallScreen ? 260 : 320;
      const GAP_WIDTH = isSmallScreen ? 16 : 24;
      const baseWidth = services.length * (CARD_WIDTH + GAP_WIDTH);
      const viewportWidth = window.innerWidth;
      const requiredMultiplier = Math.max(1, Math.ceil(viewportWidth / baseWidth));
      setRepeatMultiplier(requiredMultiplier);
    };

    updateMultiplier();
    window.addEventListener("resize", updateMultiplier);
    return () => window.removeEventListener("resize", updateMultiplier);
  }, [services.length]);

  const duplicatedServices = useMemo(() => {
    const repeated = Array.from({ length: repeatMultiplier }, () => services).flat();
    return [...repeated, ...repeated];
  }, [repeatMultiplier, services]);

  return (
    <section className="relative overflow-hidden bg-[#1F2F4A]">
      <div className="relative z-10 py-12 sm:py-20">
        <div className="w-full px-4 sm:px-6">
          
          {/* Überschrift - ZENTRIERT */}
          <div className="text-center mb-6 sm:mb-8 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-slate-400">
              Einrichtung, Beratung und Service rund um Ihre Technik
            </p>
          </div>

          {/* Button oben rechts - ZENTRIERT */}
          <div className="flex justify-end mb-8 sm:mb-12 max-w-7xl mx-auto px-2">
            <button className="cta text-sm sm:text-base" onClick={() => router.push("/leistungen")}>
              <span className="hover-underline-animation">Zu allen Leistungen</span>
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="0 0 46 16"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                  transform="translate(30)"
                ></path>
              </svg>
            </button>
          </div>

          {/* Scrolling Cards - VOLLE BREITE */}
          <div className="relative w-full overflow-hidden py-4">
            <div className="flex gap-4 sm:gap-6 animate-infinite-scroll px-2">
              {duplicatedServices.map((service, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedService(service)}
                  className="flex-shrink-0 w-64 sm:w-80 h-80 sm:h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-48 sm:h-60 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center relative overflow-hidden">
                    {service.isImage ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={640}
                        height={480}
                        className="object-cover w-full h-full"
                        quality={90}
                      />
                    ) : (
                      <span className="text-6xl sm:text-8xl">{service.image}</span>
                    )}
                  </div>
                  
                 <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-white text-center mb-1 sm:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 text-center line-clamp-2">
                    {service.description}
                  </p>
                </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Modal */}
      <LeistungModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService || SERVICES[0]}
      />
    </section>
  );
}