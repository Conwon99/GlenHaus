import { useState } from "react";
import { trackQuoteButton } from "@/utils/analytics";

interface FAQItem {
  question: string;
  answer: string;
}

interface GardenRoomsFAQProps {
  location?: { name: string; regionLabel?: string };
}

export const GardenRoomsFAQ = ({ location }: GardenRoomsFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const areaAnswer = location
    ? `We serve ${location.name}, ${location.regionLabel || "Scotland"} and all of Scotland. Professional garden room installation services available across the area. Contact us to see if we cover your location.`
    : "We serve all of Scotland. Professional garden room installation services available across Scotland. Contact us to see if we cover your area.";

  const faqs: FAQItem[] = [
    {
      question: "What is a garden room?",
      answer: "A garden room is a versatile outdoor structure that can be used as a home office, gym, relaxation space, hobby room, or guest accommodation. It's a fully insulated, weatherproof building that extends your living space into your garden. Perfect for creating additional space without the need for a home extension."
    },
    {
      question: "Do I need planning permission for a garden room in Scotland?",
      answer: "In most cases, garden rooms don't require planning permission if they meet certain criteria (size, height, location). In Scotland, garden rooms typically don't need planning permission if they're under 4 metres in height, don't take up more than 50% of your garden, and aren't used as a separate dwelling. However, it's always best to check with your local council. We can advise you on planning permission requirements during your free consultation."
    },
    {
      question: "How much does a garden room cost in Scotland?",
      answer: "Garden room costs vary depending on size, specifications, and features. Basic garden rooms start from around £10,000, while larger, fully-equipped garden offices with heating and electricity can range from £15,000 to £30,000+. The final cost depends on your specific requirements including size, insulation, electrical work, heating, and custom features. We provide free, no-obligation quotes for all garden room projects across Scotland."
    },
    {
      question: "How long does garden room installation take?",
      answer: "Most garden room installations are completed within 3-7 days, depending on the size and complexity of the project. This includes foundation work, construction, insulation, and basic finishing. If electrical work or heating is included, this may add 1-2 additional days. We'll provide a detailed timeline during your consultation and keep you updated throughout the installation process."
    },
    {
      question: "What materials do you use for garden rooms?",
      answer: "We use high-quality, weather-resistant materials including treated timber, composite materials, and durable roofing. All materials are chosen for their longevity and ability to withstand Scottish weather conditions. Our garden rooms feature proper insulation, weatherproofing, and quality finishes to ensure they last for years to come."
    },
    {
      question: "Can I use my garden room all year round?",
      answer: "Yes! Our garden rooms are fully insulated and can be fitted with heating and electricity, making them comfortable to use throughout all seasons in Scotland. With proper insulation and heating options, your garden room will be warm in winter and cool in summer, perfect for year-round use as a home office, gym, or relaxation space."
    },
    {
      question: "What areas do you cover for garden room installation?",
      answer: areaAnswer,
    },
    {
      question: "Do garden rooms need insulation?",
      answer: "Yes, proper insulation is essential for year-round use of your garden room, especially in Scotland's climate. Our garden rooms come with full insulation as standard, ensuring they stay warm in winter and cool in summer. This makes them suitable for use as home offices, gyms, or living spaces throughout the year."
    },
    {
      question: "Can I have electricity and heating in my garden room?",
      answer: "Absolutely! We can install electrical wiring, lighting, power outlets, and heating systems in your garden room. Options include electric heating, underfloor heating, or other heating solutions. All electrical work is carried out by qualified electricians and complies with Scottish building regulations."
    },
    {
      question: "What's included in the garden room price?",
      answer: "The price includes design consultation, materials, professional installation, and basic finishing. Additional features like electrical work, heating, and custom fittings can be discussed during your consultation. We provide transparent pricing with no hidden costs, and all quotes include a detailed breakdown of what's included."
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
              ? `Everything you need to know about our garden room installation service in ${location.name}`
              : "Everything you need to know about our garden room installation service"}
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
              src="/imgs/WhatsApp Image 2025-12-27 at 4.01.38 PM (2).jpeg"
              alt={`Garden room installation project${location ? ` in ${location.name}` : " in Scotland"} - Custom garden office by Glenhaus Garden Rooms`}
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

