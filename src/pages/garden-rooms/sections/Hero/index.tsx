import { useState, useEffect } from "react";

export const GardenRoomsHero = () => {
  const images = [
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.37 PM (1).jpeg",
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.37 PM (2).jpeg",
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.37 PM.jpeg",
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.38 PM (1).jpeg",
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.38 PM (2).jpeg",
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.38 PM (3).jpeg",
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.38 PM.jpeg",
    "/imgs/WhatsApp Image 2025-12-27 at 4.02.59 PM.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center pt-[40px] pb-[60px] md:pt-[60px] md:pb-[90px] overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Garden room ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8 w-full text-center">
        <div className="box-border caret-transparent flex flex-col gap-6 text-white items-center">
          <div className="box-border caret-transparent flex flex-col gap-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold box-border caret-transparent leading-tight">
              <span className="relative inline-block text-white italic" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                Expert
                <svg 
                  className="absolute -bottom-1 md:-bottom-4 left-0 w-full h-auto" 
                  viewBox="0 0 1418 125" 
                  preserveAspectRatio="none"
                  style={{ width: '100%', height: 'auto', maxHeight: '20px' }}
                >
                  <path d='M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z' fill='#166534' />
                </svg>
              </span> Garden Room Installation Across Scotland
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 box-border caret-transparent leading-relaxed">
                Create your perfect outdoor space. Professional garden room installation across Scotland. Free quotes, fully insured, years of experience.
            </p>
          </div>
          
          <div className="box-border caret-transparent flex justify-center mt-4">
            <a
              href="#contact"
              className="bg-green-800 hover:bg-green-900 text-white font-extrabold py-6 px-12 rounded-lg text-2xl md:text-3xl box-border caret-transparent transition-all duration-300 flex items-center justify-center gap-3 min-h-[64px] md:min-h-[80px] shadow-[0_0_20px_rgba(22,101,52,0.6),0_0_40px_rgba(22,101,52,0.4)] hover:shadow-[0_0_30px_rgba(22,101,52,0.8),0_0_60px_rgba(22,101,52,0.6)]"
            >
              Get Your Free Quote
              <svg className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="box-border caret-transparent flex flex-wrap gap-6 mt-6 pt-6 border-t border-white/30 justify-center">
            <div className="box-border caret-transparent flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm md:text-base">Free Quotes</span>
            </div>
            <div className="box-border caret-transparent flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm md:text-base">Fully Insured</span>
            </div>
            <div className="box-border caret-transparent flex items-center gap-2">
              <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white text-sm md:text-base">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

