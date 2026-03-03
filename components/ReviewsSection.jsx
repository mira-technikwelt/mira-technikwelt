 "use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(5.0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

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
              name: "CoachD",
              rating: 5,
              text: "Sehr gute und vor allem unkomplizierte Beratung sowie Einrichtung. Mickael war sehr kompetent und freundlich!",
              relativeTime: "",
              profilePhoto: "https://ui-avatars.com/api/?name=CoachD&background=3b82f6&color=fff&size=128"
            },
            {
              name: "Maranta",
              rating: 5,
              text: "Die Beratung von Raphael war sehr gut zu verstehen und sehr ruhig und kompetent erklärt. Man fühlt sich nicht belehrt sondern verstanden.",
              relativeTime: "",
              profilePhoto: "https://ui-avatars.com/api/?name=Maranta&background=8b5cf6&color=fff&size=128"
            },
            {
              name: "Sabrina Baschin",
              rating: 5,
              text: "Ich war mit dem Technikberater äußerst zufrieden. Er hat mir nicht nur den neuen Blue-Ray-Player eingerichtet, sondern mir auch gute Skizzen beispielsweise der Fernbedienung gemacht. Außerdem hat er zusätzlich die Schwierigkeiten mit meinem Drucker behoben.",
              relativeTime: "",
              profilePhoto: "https://ui-avatars.com/api/?name=Sabrina+Baschin&background=10b981&color=fff&size=128"
            }
          ]);
        }
      } catch (error) {
        console.error('Fehler beim Laden der Google Reviews:', error);
        // Fallback Reviews bei Fehler
        setReviews([
          {
            name: "CoachD",
            rating: 5,
            text: "Sehr gute und vor allem unkomplizierte Beratung sowie Einrichtung. Mickael war sehr kompetent und freundlich!",
            relativeTime: ""
          },
          {
            name: "Maranta",
            rating: 5,
            text: "Die Beratung von Raphael war sehr gut zu verstehen und sehr ruhig und kompetent erklärt. Man fühlt sich nicht belehrt sondern verstanden.",
            relativeTime: ""
          },
          {
            name: "Sabrina Baschin",
            rating: 5,
            text: "Ich war mit dem Technikberater äußerst zufrieden. Er hat mir nicht nur den neuen Blue-Ray-Player eingerichtet, sondern mir auch gute Skizzen beispielsweise der Fernbedienung gemacht. Außerdem hat er zusätzlich die Schwierigkeiten mit meinem Drucker behoben.",
            relativeTime: ""
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchGoogleReviews();
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (!autoplay || reviews.length === 0) return;

    const startAutoplay = () => {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
    };

    startAutoplay();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoplay, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section className="relative overflow-hidden bg-[#122E61]">
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
    <section className="relative overflow-hidden bg-[#122E61]">
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

          {/* Animated Testimonials Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col md:flex-row gap-8 items-center justify-center px-4"
                >
                  {/* Image */}
                  <div className="relative w-48 h-48 md:w-80 md:h-80 flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
                    {reviews[currentIndex]?.profilePhoto ? (
                      <>
                        <img
                          src={reviews[currentIndex].profilePhoto}
                          alt={reviews[currentIndex].name}
                          className="relative w-full h-full rounded-3xl object-cover border-4 border-slate-700 shadow-2xl"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden relative w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-white text-6xl font-bold border-4 border-slate-700 shadow-2xl">
                          {reviews[currentIndex]?.name.charAt(0)}
                        </div>
                      </>
                    ) : (
                      <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold border-4 border-slate-700 shadow-2xl">
                        {reviews[currentIndex]?.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 max-w-2xl overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      {/* Quote */}
                      <div className="mb-6 overflow-hidden">
                        <div className="text-yellow-400 text-2xl mb-4">
                          {'⭐'.repeat(reviews[currentIndex]?.rating || 5)}
                        </div>
                        <p className="text-slate-200 text-base md:text-lg leading-relaxed italic overflow-hidden line-clamp-6">
                          "{reviews[currentIndex]?.text}"
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="mt-6">
                        <p className="text-white font-bold text-xl">
                          {reviews[currentIndex]?.name}
                        </p>
                        {reviews[currentIndex]?.relativeTime && (
                          <p className="text-slate-400 text-sm mt-1">
                            {reviews[currentIndex].relativeTime}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToReview(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-blue-500 w-8'
                      : 'bg-slate-600 w-2 hover:bg-slate-500'
                  }`}
                  aria-label={`Zu Review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Thumbnails Preview - Always show 3: previous, current, next */}
            <div className="hidden md:flex justify-center gap-4 mt-8 px-12">
              {(() => {
                const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
                const nextIndex = (currentIndex + 1) % reviews.length;
                const displayIndices = [prevIndex, currentIndex, nextIndex];
                
                return displayIndices.map((idx) => {
                  const review = reviews[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => goToReview(idx)}
                      className={`relative transition-all duration-300 ${
                        idx === currentIndex 
                          ? 'w-16 h-16 opacity-100 scale-110' 
                          : 'w-12 h-12 opacity-40 hover:opacity-70'
                      }`}
                    >
                      {review.profilePhoto ? (
                        <img
                          src={review.profilePhoto}
                          alt={review.name}
                          className={`w-full h-full rounded-full object-cover border-2 ${
                            idx === currentIndex ? 'border-blue-500' : 'border-slate-600'
                          }`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className={`w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold border-2 ${
                          idx === currentIndex ? 'border-blue-500' : 'border-slate-600'
                        } ${review.profilePhoto ? 'hidden' : 'flex'}`}
                        style={{ display: review.profilePhoto ? 'none' : 'flex' }}
                      >
                        {review.name.charAt(0)}
                      </div>
                    </button>
                  );
                });
              })()}
            </div>
          </div>

          {/* Button zu Google Reviews */}
          <div className="flex justify-center mt-12 sm:mt-16">
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
