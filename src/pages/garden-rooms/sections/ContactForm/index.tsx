import { GardenRoomsContactForm as ContactFormComponent } from "@/pages/garden-rooms/sections/ContactForm/components/GardenRoomsContactForm";

interface GardenRoomsContactFormProps {
  location?: { name: string; regionLabel?: string };
}

export const GardenRoomsContactForm = ({ location }: GardenRoomsContactFormProps) => {
  return (
    <section id="contact" className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 box-border caret-transparent py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-transparent"></div>
      <div className="relative z-10 box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white box-border caret-transparent mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 box-border caret-transparent max-w-3xl mx-auto">
            {location
              ? `Fill out the form below and we'll get back to you as soon as possible to discuss your garden room project in ${location.name}. Serving ${location.name}, ${location.regionLabel || "Scotland"} and surrounding areas. Free quotes available.`
              : "Fill out the form below and we'll get back to you as soon as possible to discuss your garden room project. Serving all of Scotland. Free quotes available for all garden room installations."}
          </p>
        </div>
        
        <div className="box-border caret-transparent max-w-[800px] mx-auto">
          <div className="bg-black box-border caret-transparent p-6 sm:p-8 md:p-10 rounded-[20px] border-2 border-gray-800 shadow-xl">
            <ContactFormComponent />
            <div
              role="region"
              aria-label="Contact Form success"
              className="text-white bg-green-600 box-border caret-transparent hidden text-center mt-4 p-4 rounded-[20px]"
            >
              <div className="box-border caret-transparent">
                Thank you! Your submission has been received! We'll get back to you soon.
              </div>
            </div>
            <div
              role="region"
              aria-label="Contact Form failure"
              className="text-white bg-red-600 box-border caret-transparent hidden text-center mt-4 p-4 rounded-[20px]"
            >
              <div className="box-border caret-transparent">
                Oops! Something went wrong while submitting the form. Please try again or call us directly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

