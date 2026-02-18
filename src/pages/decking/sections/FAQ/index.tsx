import { useState } from "react";
import { trackQuoteButton } from "@/utils/analytics";

interface FAQItem {
  question: string;
  answer: string;
}

interface DeckingFAQProps {
  location?: { name: string; regionLabel?: string };
}

export const DeckingFAQ = ({ location }: DeckingFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const areaAnswer = location
    ? `We serve ${location.name}, ${location.regionLabel || "Scotland"} and all of Scotland. Professional deck installation services available across the area. Contact us to see if we cover your location.`
    : "We serve all of Scotland. Professional deck installation services available across Scotland. Contact us to see if we cover your area.";

  const faqs: FAQItem[] = [
    {
      question: "What types of decking do you offer?",
      answer: "We offer a wide range of decking options including timber decking (softwood and hardwood), composite decking, and PVC decking. Each material has its own benefits - timber offers a natural look, composite is low-maintenance and durable, and PVC is completely maintenance-free. We'll help you choose the best option for your needs and budget."
    },
    {
      question: "Do I need planning permission for decking in Scotland?",
      answer: "In most cases, decking doesn't require planning permission if it meets certain criteria. In Scotland, decking typically doesn't need planning permission if it's less than 30cm above ground level, doesn't cover more than 50% of your garden, and isn't in front of your house. However, it's always best to check with your local council. We can advise you on planning permission requirements during your free consultation."
    },
    {
      question: "How much does decking cost in Scotland?",
      answer: "Decking costs vary depending on size, materials, and complexity. Basic timber decking starts from around £80-£120 per square metre, while composite decking ranges from £120-£180 per square metre. The final cost depends on your specific requirements including size, materials, railings, steps, and any additional features. We provide free, no-obligation quotes for all decking projects across Scotland."
    },
    {
      question: "How long does deck installation take?",
      answer: "Most deck installations are completed within 2-5 days, depending on the size and complexity of the project. This includes ground preparation, frame construction, decking installation, and finishing. More complex projects with multiple levels, railings, or steps may take longer. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "What materials do you use for decking?",
      answer: "We use high-quality, weather-resistant materials including treated softwood timber, hardwood timber (like oak or iroko), composite decking boards, and PVC decking. All materials are chosen for their durability and ability to withstand Scottish weather conditions. We ensure proper treatment and finishing to maximize longevity."
    },
    {
      question: "How do I maintain my deck?",
      answer: "Maintenance depends on the material. Timber decking requires regular cleaning and periodic treatment with wood preservative or stain. Composite decking needs minimal maintenance - just regular cleaning with soap and water. PVC decking is virtually maintenance-free. We'll provide maintenance guidance specific to your chosen material after installation."
    },
    {
      question: "What areas do you cover for deck installation?",
      answer: areaAnswer,
    },
    {
      question: "Can you build multi-level decks?",
      answer: "Absolutely! We specialize in custom deck designs including multi-level decks, decks with steps and railings, and decks integrated with existing garden features. Our experienced team can create complex deck structures that perfectly fit your space and requirements."
    },
    {
      question: "Do you provide decking with railings and steps?",
      answer: "Yes, we can include railings, steps, and other safety features in your deck design. This is especially important for elevated decks or decks with multiple levels. All railings and steps are built to meet safety standards and building regulations."
    },
    {
      question: "What's included in the decking price?",
      answer: "The price includes design consultation, materials, professional installation, and basic finishing. Additional features like railings, steps, lighting, and custom features can be discussed during your consultation. We provide transparent pricing with no hidden costs, and all quotes include a detailed breakdown of what's included."
    }
  ];

  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="bg-white box-border caret-transparent py-16 md:py-24">
        <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 box-border caret-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 box-border caret-transparent max-w-3xl mx-auto">
            {location
              ? `Everything you need to know about our deck installation service in ${location.name}`
              : "Everything you need to know about our deck installation service"}
          </p>
        </div>

        <div className="box-border caret-transparent grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="box-border caret-transparent">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="box-border caret-transparent border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full box-border caret-transparent py-6 text-left flex items-center justify-between gap-4 hover:text-green-800 transition-colors duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 box-border caret-transparent pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 text-green-800 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="pb-6 box-border caret-transparent">
                    <p className="text-gray-600 box-border caret-transparent leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="box-border caret-transparent lg:sticky lg:top-8">
            <img
              src="/imgs/decking/WhatsApp Image 2026-01-27 at 6.23.48 PM (2).jpeg"
              alt={`Deck installation project${location ? ` in ${location.name}` : " in Scotland"} - Professional decking by Glenhaus Garden Rooms`}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>

        <div className="box-border caret-transparent text-center mt-12">
          <p className="text-gray-600 box-border caret-transparent mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            onClick={() => trackQuoteButton('faq')}
            className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold py-4 px-8 rounded-lg text-lg box-border caret-transparent transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
    </>
  );
};
