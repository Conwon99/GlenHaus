import { PhoneLink } from "@/components/PhoneLink";
import { trackQuoteButton } from "@/utils/analytics";

export const AboutCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-transparent"></div>
      <div className="relative z-10 max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Get in touch today for a free, no-obligation quote. We're here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/#contact"
            onClick={() => trackQuoteButton('about-cta')}
            className="bg-white hover:bg-gray-100 text-green-800 font-extrabold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
          </a>
          <PhoneLink
            iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
            iconAlt="Phone"
            showIcon={true}
            trackingLocation="about-cta"
            className="text-white items-center gap-x-4 flex justify-center hover:text-green-300 hover:decoration-transparent"
            displayClassName="text-white text-lg md:text-xl font-semibold"
          />
        </div>
      </div>
    </section>
  );
};
