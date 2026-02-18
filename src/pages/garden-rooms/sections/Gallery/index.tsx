import { useState } from "react";
import { trackQuoteButton } from "@/utils/analytics";

interface GardenRoomsGalleryProps {
  location?: { name: string; regionLabel?: string };
}

export const GardenRoomsGallery = ({ location }: GardenRoomsGalleryProps) => {
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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-gray-100 box-border caret-transparent py-16 md:py-24">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 box-border caret-transparent mb-4">
            Our Garden Room Projects{location ? ` in ${location.name}` : ""}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 box-border caret-transparent max-w-3xl mx-auto">
            {location ? `Take a look at some of our recent garden room installations in ${location.name} and across Scotland` : "Take a look at some of our recent garden room installations across Scotland"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="box-border caret-transparent relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="box-border caret-transparent aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={`Garden room installation project ${index + 1}${location ? ` in ${location.name}` : " in Scotland"} - Custom garden room by Glenhaus Garden Rooms`}
                  loading="lazy"
                  className="w-full h-full object-cover box-border caret-transparent group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="box-border caret-transparent text-center mt-12 md:mt-16">
          <a
            href="#contact"
            onClick={() => trackQuoteButton('gallery')}
            className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold py-4 px-8 rounded-lg text-lg box-border caret-transparent transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 box-border caret-transparent"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] box-border caret-transparent">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt={`Garden room installation project${location ? ` in ${location.name}` : " in Scotland"} - Custom garden room by Glenhaus Garden Rooms`}
              className="max-w-full max-h-[90vh] object-contain box-border caret-transparent rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

