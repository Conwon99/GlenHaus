import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const GardenRoomsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is a garden room?",
      answer: "A garden room is a versatile outdoor structure that can be used as a home office, gym, relaxation space, hobby room, or guest accommodation. It's a fully insulated, weatherproof building that extends your living space into your garden."
    },
    {
      question: "Do I need planning permission for a garden room?",
      answer: "In most cases, garden rooms don't require planning permission if they meet certain criteria (size, height, location). However, it's always best to check with your local council. We can advise you on this during your free consultation."
    },
    {
      question: "How long does installation take?",
      answer: "Most garden room installations are completed within 3-7 days, depending on the size and complexity of the project. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "What materials do you use?",
      answer: "We use high-quality, weather-resistant materials including treated timber, composite materials, and durable roofing. All materials are chosen for their longevity and ability to withstand Scottish weather conditions."
    },
    {
      question: "Can I use my garden room all year round?",
      answer: "Yes! Our garden rooms are fully insulated and can be fitted with heating and electricity, making them comfortable to use throughout all seasons."
    },
    {
      question: "What areas do you cover?",
      answer: "We serve all of Scotland including Ayrshire, Glasgow, Edinburgh, and surrounding areas. Professional garden room installation services available throughout Scotland."
    },
    {
      question: "Do you offer financing options?",
      answer: "We accept various payment methods and can discuss payment plans. Contact us for more information about our flexible payment options."
    },
    {
      question: "What's included in the price?",
      answer: "The price includes design consultation, materials, professional installation, and basic finishing. Additional features like electrical work, heating, and custom fittings can be discussed during your consultation."
    }
  ];

  return (
    <section className="bg-white box-border caret-transparent py-16 md:py-24">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-4 sm:px-5 md:px-8">
        <div className="box-border caret-transparent text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 box-border caret-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 box-border caret-transparent max-w-3xl mx-auto">
            Everything you need to know about our garden room installation service
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
              alt="Beautiful garden room installation"
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
            className="inline-block bg-green-800 hover:bg-green-900 text-white font-semibold py-4 px-8 rounded-lg text-lg box-border caret-transparent transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

