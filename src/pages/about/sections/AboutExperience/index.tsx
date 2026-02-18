export const AboutExperience = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              src="/imgs/decking/WhatsApp Image 2026-01-27 at 6.23.47 PM (1).jpeg"
              alt="Professional decking installation by Glenhaus Garden Rooms"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Over 13 Years of Excellence
            </h2>
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              <p>
                With over 13 years of experience in garden room and decking installation, we've completed hundreds of successful projects across Scotland. Our expertise spans everything from compact garden offices to large outdoor living spaces and beautiful decking installations.
              </p>
              <p>
                We're fully qualified and insured, giving you complete peace of mind. Every project is backed by our commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2">13+</div>
                <div className="text-gray-600 text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2">500+</div>
                <div className="text-gray-600 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2">5.0</div>
                <div className="text-gray-600 text-sm md:text-base">Average Rating</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-green-800 mb-2">100%</div>
                <div className="text-gray-600 text-sm md:text-base">Fully Insured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
