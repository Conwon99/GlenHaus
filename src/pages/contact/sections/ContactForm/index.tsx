import { GardenRoomsContactForm as ContactFormComponent } from "@/pages/garden-rooms/sections/ContactForm/components/GardenRoomsContactForm";
import { PhoneLink } from "@/components/PhoneLink";

export const ContactForm = () => {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="relative z-10 max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Request Your Free Quote
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you as soon as possible to discuss your garden room or decking project. Serving all of Scotland. Free quotes available for all installations.
          </p>
        </div>
        
        <div className="max-w-[800px] mx-auto">
          <div className="bg-green-800 p-6 sm:p-8 md:p-10 rounded-[20px]">
            <ContactFormComponent />
            <div
              role="region"
              aria-label="Contact Form success"
              className="text-white bg-green-600 hidden text-center mt-4 p-4 rounded-[20px]"
            >
              <div>
                Thank you! Your submission has been received! We'll get back to you soon.
              </div>
            </div>
            <div
              role="region"
              aria-label="Contact Form failure"
              className="text-white bg-red-600 hidden text-center mt-4 p-4 rounded-[20px]"
            >
              <div>
                Oops! Something went wrong while submitting the form. Please try again or call us directly.
              </div>
            </div>
          </div>
          
          {/* Contact Information Below Form */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
              {/* Call Us */}
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
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
                  trackingLocation="contact-form"
                  className="text-green-800 hover:text-green-900 text-lg font-semibold transition-colors duration-300"
                  displayClassName="text-green-800 text-lg font-semibold"
                />
                <p className="text-gray-600 text-sm mt-2">Available Monday - Saturday</p>
              </div>

              {/* Service Area */}
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
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
        </div>
      </div>
    </section>
  );
};
