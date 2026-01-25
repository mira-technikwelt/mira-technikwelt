 "use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useState, useRef, useEffect } from "react";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(5.0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setAverageRating(data.rating || 5.0);
          setTotalRatings(data.totalRatings || 0);
        } else {
          // Fallback Reviews wenn API keine liefert
          setReviews([
            {
              name: "Stefanie Übele",
              rating: 5,
              text: "Ich bin absolut begeistert von MIRA Technikwelt! Der Service ist professionell, zuverlässig und vor allem persönlich auf meine Bedürfnisse abgestimmt. Mein neuer PC wurde perfekt eingerichtet und läuft einwandfrei.",
              relativeTime: "vor 2 Monaten",
              profilePhoto: "https://ui-avatars.com/api/?name=Stefanie+Uebele&background=3b82f6&color=fff&size=128"
            },
            {
              name: "Nadia Herrmann",
              rating: 5,
              text: "Bin sehr zufrieden mit dem Service. Auch als es beim Telefonanschluss Schwierigkeiten gab, wurde das schnell und kompetent behoben. Der Techniker war freundlich und zuvorkommend.",
              relativeTime: "vor 3 Monaten",
              profilePhoto: "https://ui-avatars.com/api/?name=Nadia+Herrmann&background=8b5cf6&color=fff&size=128"
            },
            {
              name: "Lars Daniel Krauter",
              rating: 5,
              text: "Wir sind sehr zufrieden! Raphael war freundlich, zuverlässig und hat die Einrichtung unseres Fernsehers perfekt erledigt. Vielen Dank für den tollen Service.",
              relativeTime: "vor 1 Monat",
              profilePhoto: "https://ui-avatars.com/api/?name=Lars+Krauter&background=10b981&color=fff&size=128"
            }
          ]);
        }
      } catch (error) {
        console.error('Fehler beim Laden der Google Reviews:', error);
        // Fallback Reviews bei Fehler
        setReviews([
          {
            name: "Stefanie Übele",
            rating: 5,
            text: "Ich bin absolut begeistert von MIRA Technikwelt! Der Service ist professionell, zuverlässig und vor allem persönlich auf meine Bedürfnisse abgestimmt.",
            relativeTime: "vor 2 Monaten"
          },
          {
            name: "Nadia Herrmann",
            rating: 5,
            text: "Bin sehr zufrieden mit dem Service. Auch als es beim Telefonanschluss Schwierigkeiten gab, wurde das schnell und kompetent behoben.",
            relativeTime: "vor 3 Monaten"
          },
          {
            name: "Lars Daniel Krauter",
            rating: 5,
            text: "Wir sind sehr zufrieden! Raphael war freundlich, zuverlässig und hat die Einrichtung unseres Fernsehers perfekt erledigt.",
            relativeTime: "vor 1 Monat"
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchGoogleReviews();
  }, []);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      }
    }

    setIsDragging(false);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-[#1F2F4A]">
        <div className="relative z-10 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Was unsere Kunden sagen
              </h2>
            </div>
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-[#1F2F4A]">
      <div className="relative z-10 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
              Was unsere Kunden sagen
            </h2>
            <div className="flex items-center justify-center gap-2 text-xl sm:text-3xl">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="text-white font-bold">{averageRating.toFixed(1)}</span>
              <span className="text-slate-400">/ 5</span>
              {totalRatings > 0 && (
                <span className="text-slate-400 text-base sm:text-lg ml-2">
                  ({totalRatings} Bewertungen)
                </span>
              )}
            </div>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review, idx) => (
              <CardContainer key={idx} className="inter-var">
                <CardBody className="bg-gradient-to-br from-slate-800 to-slate-900 relative group/card border-slate-700 w-full h-[400px] rounded-2xl p-8 border flex flex-col">
                  <CardItem translateZ="50" className="flex items-center gap-3 mb-4">
                    {review.profilePhoto && (
                      <img 
                        src={review.profilePhoto} 
                        alt={review.name}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                    <div className="flex-grow">
                      <span className="text-white font-semibold block">{review.name}</span>
                      {review.relativeTime && (
                        <span className="text-slate-400 text-xs">{review.relativeTime}</span>
                      )}
                    </div>
                  </CardItem>
                  
                  <CardItem translateZ="60" className="text-yellow-400 text-xl mb-4">
                    {'⭐'.repeat(review.rating)}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="70"
                    className="text-slate-300 leading-relaxed flex-grow overflow-hidden text-sm"
                  >
                    "{review.text}"
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>

          <div className="md:hidden">
            <div 
              ref={containerRef}
              className="relative h-96 mb-8 cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {reviews.map((review, idx) => {
                const isActive = idx === currentIndex;
                const isNext = idx === (currentIndex + 1) % reviews.length;
                const isPrev = idx === (currentIndex - 1 + reviews.length) % reviews.length;

                let zIndex = 0;
                let transform = "scale(0.85) translateY(100px)";
                let opacity = 0;

                if (isActive) {
                  zIndex = 30;
                  transform = "scale(1) translateY(0)";
                  opacity = 1;
                } else if (isNext) {
                  zIndex = 20;
                  transform = "scale(0.92) translateY(40px)";
                  opacity = 0.6;
                } else if (isPrev) {
                  zIndex = 10;
                  transform = "scale(0.92) translateY(40px)";
                  opacity = 0.6;
                }

                return (
                  <div
                    key={idx}
                    className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between transition-all duration-500 ease-out"
                    style={{
                      zIndex,
                      transform,
                      opacity,
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {review.profilePhoto && (
                        <img 
                          src={review.profilePhoto} 
                          alt={review.name}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div className="flex-grow">
                        <span className="text-white font-semibold text-sm block">{review.name}</span>
                        {review.relativeTime && (
                          <span className="text-slate-400 text-xs">{review.relativeTime}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-yellow-400 text-lg mb-3">
                      {'⭐'.repeat(review.rating)}
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed flex-grow text-sm">
                      "{review.text}"
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 mb-6">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToReview(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-blue-500 w-6'
                      : 'bg-slate-500 w-2 hover:bg-slate-400'
                  }`}
                  aria-label={`Zu Review ${idx + 1}`}
                />
              ))}
            </div>

            <p className="text-center text-slate-400 text-xs sm:text-sm">
              Wische zum Navigieren
            </p>
          </div>

          {/* Button zu Google Reviews */}
          <div className="flex justify-center mt-8 sm:mt-12">
            <a 
              href="https://share.google/bu5WKf3g3hMm8nRJw"
              target="_blank"
              rel="noopener noreferrer"
              className="google-button"
            >
              <span className="text">Alle Bewertungen</span>
              <span className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="20"
                  viewBox="0 0 38 15"
                  fill="none"
                >
                  <path
                    fill="white"
                    d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
