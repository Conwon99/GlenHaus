export const AboutServices = () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional garden room and decking installation across Scotland
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img
                src="/imgs/WhatsApp Image 2025-12-27 at 4.01.37 PM (2).jpeg"
                alt="Garden room installation service"
                loading="lazy"
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Garden Rooms</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Create additional living space with our professional garden room installations. Perfect for home offices, gyms, art studios, or peaceful retreats. Fully insulated for year-round comfort.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom design and planning
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fully insulated construction
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Electrical and heating options
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <img
                src="/imgs/decking/WhatsApp Image 2026-01-27 at 6.23.48 PM (2).jpeg"
                alt="Decking installation service"
                loading="lazy"
                className="w-full h-auto rounded-lg object-cover aspect-video"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Decking</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Transform your outdoor space with beautiful, professional decking. We design and install high-quality timber and composite decking solutions that enhance your home.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Timber and composite options
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Custom design and installation
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Weather-resistant materials
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
