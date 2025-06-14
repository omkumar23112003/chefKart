import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is ChefKart?",
      answer:
        "ChefKart is a platform that connects home chefs and households seamlessly by providing at-home cooking services tailored to your taste.",
    },
    {
      question: "How does the service work?",
      answer:
        "You can book a professional chef through our platform, who will visit your home to cook fresh and hygienic meals for you.",
    },
    {
        question: "How are cooks onboarded?",
        answer:
          "Cooks list themselves on the ChefKart Partner App. We register cooks after background verification and criminal record checks. They undergo assessments and mandatory training to ensure they meet our standards and are suitable for household assignments. Ongoing training ensures continuous upskilling..",
      },
    {
      question: "What areas do you serve?",
      answer:
        "Currently, we serve major cities like Gurugram, Delhi, and Noida. We are expanding to other cities soon!",
    },
    {
      question: "Are your chefs professionally trained?",
      answer:
        "Yes, our chefs are thoroughly vetted, trained, and equipped to provide top-notch cooking services.",
    },
    {
      question: "How do I book a chef?",
      answer:
        "You can book a chef through our website or mobile app by selecting a service and scheduling a time that works for you.",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl  text-orange-400 font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
