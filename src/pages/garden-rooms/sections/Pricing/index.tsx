import { PhoneLink } from "@/components/PhoneLink";
import { trackQuoteButton } from "@/utils/analytics";

export const GardenRoomsPricing = () => {
  const stripeLink = "https://buy.stripe.com/bJe14nf3hgmpgLM6Kv9EI0f";

  return (
    <section id="pricing" className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 box-border caret-transparent py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-transparent"></div>
      <div className="relative z-10 box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white box-border caret-transparent mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/90 box-border caret-transparent max-w-3xl mx-auto">
            Get your free quote today and transform your garden with a beautiful garden room
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="box-border caret-transparent bg-white rounded-lg p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 box-border caret-transparent mb-4">
              Free Quote & Consultation
            </h3>
            <p className="text-gray-600 box-border caret-transparent mb-6 leading-relaxed">
              Contact us today for a free, no-obligation quote. We'll visit your property, discuss your requirements, and provide a detailed estimate for your garden room project.
            </p>
            <div className="box-border caret-transparent">
              <PhoneLink
                variant="default"
                iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
                trackingLocation="garden-rooms-pricing"
                className="bg-green-800 hover:bg-green-900 text-white font-semibold py-4 px-8 rounded-lg text-lg box-border caret-transparent transition-colors duration-300 flex items-center justify-center gap-2 w-full"
              />
            </div>
          </div>

          <div className="box-border caret-transparent bg-white rounded-lg p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 box-border caret-transparent mb-4">
              Secure Your Booking
            </h3>
            <p className="text-gray-600 box-border caret-transparent mb-6 leading-relaxed">
              Ready to proceed? Secure your garden room installation with a deposit. We'll schedule your project and get started on creating your perfect outdoor space.
            </p>
            <a
              href={stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackQuoteButton('pricing')}
              className="block bg-green-800 hover:bg-green-900 text-white font-semibold py-4 px-8 rounded-lg text-lg box-border caret-transparent transition-colors duration-300 text-center shadow-lg hover:shadow-xl"
            >
              Book & Pay Deposit
            </a>
            <p className="text-sm text-gray-500 box-border caret-transparent mt-4 text-center">
              Secure payment via Stripe
            </p>
          </div>
        </div>

        <div className="box-border caret-transparent mt-12 pt-12 border-t border-white/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="box-border caret-transparent">
              <div className="text-3xl md:text-4xl font-bold text-white box-border caret-transparent mb-2">
                13+
              </div>
              <div className="text-white/90 box-border caret-transparent">
                Years Experience
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-3xl md:text-4xl font-bold text-white box-border caret-transparent mb-2">
                100%
              </div>
              <div className="text-white/90 box-border caret-transparent">
                Fully Insured
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="text-3xl md:text-4xl font-bold text-white box-border caret-transparent mb-2">
                FREE
              </div>
              <div className="text-white/90 box-border caret-transparent">
                Quotes Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

