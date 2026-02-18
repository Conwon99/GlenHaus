import { useState, useEffect } from "react";
import { trackQuoteButton } from "@/utils/analytics";

interface GardenRoomsFeaturesProps {
  location?: { name: string; regionLabel?: string };
}

export const GardenRoomsFeatures = ({ location }: GardenRoomsFeaturesProps) => {
  // Images for slideshow - garden room and decking projects
  const images = [
    "/imgs/WhatsApp Image 2025-12-27 at 4.01.37 PM (1).jpeg",
    "/imgs/decking/WhatsApp Image 2026-01-27 at 6.23.45 PM (1).jpeg",
    "/imgs/decking/WhatsApp Image 2026-01-27 at 6.23.47 PM (4).jpeg",
    "/imgs/decking/WhatsApp Image 2026-01-27 at 6.23.50 PM (1).jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Custom Design",
      description: "Every garden room and decking project is tailored to your specific needs and garden space. From home offices to beautiful outdoor decks, we create the perfect solution for you."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Quality Materials",
      description: "We use only the finest materials to ensure your garden room or decking stands the test of time. Built to last with weather-resistant construction suitable for Scotland's climate."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quick Installation",
      description: "Professional installation by our experienced team. Most garden rooms and decking projects are completed within a few days, with minimal disruption to your garden."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Great Value",
      description: "Competitive pricing with no hidden costs. Free quotes and transparent pricing so you know exactly what you're paying for."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fully Insured",
      description: "Complete peace of mind with full insurance coverage. All our work is guaranteed and backed by comprehensive insurance."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: location ? `${location.name} & ${location.regionLabel || "Scotland"}` : "Scotland Wide",
      description: location ? `Serving ${location.name}, ${location.regionLabel || "Scotland"} and surrounding areas. Professional service you can trust.` : "Serving all of Scotland. Professional service you can trust."
    }
  ];

  return (
    <section id="features" className="box-border caret-transparent pt-[70px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-white">
      <div className="box-border caret-transparent max-w-[1540px] mx-auto px-[15px] md:px-[30px] before:accent-auto before:caret-transparent before:text-neutral-600 before:table before:text-lg before:not-italic before:normal-nums before:font-medium before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-manrope after:accent-auto after:caret-transparent after:clear-both after:text-neutral-600 after:table after:text-lg after:not-italic after:normal-nums after:font-medium after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-manrope">
        <div className="box-border caret-transparent gap-x-[30px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[30px] md:gap-x-[70px] md:grid-cols-[1fr_1fr] md:gap-y-[70px]">
          {/* Left Side - Image Slideshow */}
          <div className="relative self-start box-border caret-transparent overflow-hidden rounded-[20px] aspect-[4/3]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1} by Glenhaus Garden Rooms - Professional garden room installation${location ? ` in ${location.name}` : " in Scotland"}`}
                  loading="lazy"
                  className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                />
              </div>
            ))}
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="box-border caret-transparent gap-x-[30px] flex flex-col justify-between gap-y-[30px] md:gap-x-[50px] md:gap-y-[50px]">
            <div className="box-border caret-transparent">
              <h2 className="text-gray-900 text-3xl font-bold box-border caret-transparent leading-[38px] mb-2.5 sm:text-4xl sm:leading-[43.2px] md:text-[56px] md:leading-[67.2px]">
                {location ? `Why choose GlenHaus for Garden Rooms in ${location.name}?` : "Why choose GlenHaus?"}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base box-border caret-transparent mt-2.5 mb-5 md:mt-5 md:mb-5 leading-relaxed">
                {location
                  ? `Professional garden room installation in ${location.name} and across ${location.regionLabel || "Scotland"}. Quality materials, expert craftsmanship, and custom design - everything you need for your perfect garden room. Over 13 years of experience.`
                  : "Professional garden room and decking installation across Scotland. Quality materials, expert craftsmanship, and custom design - everything you need for your perfect garden room or decking project. Over 13 years of experience."}
              </p>
              <div className="box-border caret-transparent mb-5 md:mb-[50px]">
                <ul className="text-gray-900 text-sm sm:text-base md:text-lg box-border caret-transparent list-none pl-0 space-y-2 md:space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-800 flex-shrink-0">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-900 font-medium">{feature.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#contact"
                onClick={() => trackQuoteButton('features')}
                className="text-white text-sm bg-green-800 box-border caret-transparent inline-block leading-[19.6px] text-center border border-green-800 px-5 py-2 rounded-[50px] border-solid md:text-lg md:leading-[25.2px] md:px-[30px] md:py-3 hover:bg-green-900 hover:decoration-transparent shadow-[0_0_20px_rgba(22,101,52,0.5),0_0_40px_rgba(22,101,52,0.3)] hover:shadow-[0_0_30px_rgba(20,83,45,0.7),0_0_60px_rgba(20,83,45,0.5)] transition-shadow duration-300"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

