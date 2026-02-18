export const AboutStory = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Founded in 2011, Glenhaus Garden Rooms has been transforming outdoor spaces across Scotland for over 13 years. What started as a passion for creating beautiful, functional garden rooms has grown into a trusted business known for quality craftsmanship and exceptional customer service.
              </p>
              <p>
                We specialize in designing and installing custom garden rooms and professional decking solutions. Every project we undertake is built with attention to detail, using quality materials and expert workmanship that stands the test of time.
              </p>
              <p>
                Our commitment to excellence has earned us a reputation as one of Scotland's leading garden room and decking installation specialists. We take pride in every project, whether it's a compact garden office, a spacious outdoor living area, or a beautiful deck that enhances your home.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/imgs/WhatsApp Image 2025-12-27 at 4.01.37 PM (1).jpeg"
              alt="Glenhaus Garden Rooms project - Professional garden room installation"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
