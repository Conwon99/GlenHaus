import { PhoneLink } from "@/components/PhoneLink";

export const ContactInfo = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
          {/* Phone */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <svg className="w-12 h-12 text-green-800 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
            <PhoneLink
              iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
              iconAlt="Phone"
              showIcon={false}
              trackingLocation="contact-page"
              className="text-green-800 hover:text-green-900 text-lg font-semibold transition-colors duration-300"
              displayClassName="text-green-800 text-lg font-semibold"
            />
            <p className="text-gray-600 text-sm mt-2">Available Monday - Saturday</p>
          </div>

          {/* Location */}
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <svg className="w-12 h-12 text-green-800 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Service Area</h3>
            <p className="text-green-800 text-lg font-semibold">Across Scotland</p>
            <p className="text-gray-600 text-sm mt-2">Serving all of Scotland</p>
          </div>
        </div>
      </div>
    </section>
  );
};
