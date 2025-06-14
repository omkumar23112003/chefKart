import React, { useState } from "react";

const FaqOne = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is Chefit?",
      answer:
        "‘Chefit is a one-time cooking service where our trusted and verified cooks prepare healthy meals in the comfort of your kitchen..",
    },
    {
      question: "What is the price for Chefit?",
      answer:
        "The base price for the Chefit service is ₹499. For each additional person, there is an extra charge of ₹100 per person..",
    },
    {
        question: "How can I find out if this service is available in my area??",
        answer:
          "To check service availability, enter your address and select your area. The home page on the mobile app will then display a list of services offered at your location..",
      },
    {
      question: "Will Chefit provide groceries along with the service ?",
      answer:
        "No, groceries are not provided. You need to manage the groceries yourself..",
    },
    {
      question: "What can I expect my cook to do post cooking?",
      answer:
        "No, we do not provide post-service utensil cleaning. The cook will tidy the cooking area, transfer food to serving bowls, and place used utensils in the sink with water. The kitchen and countertops will be left clean..",
    },
    {
      question: "How many dishes can the cook prepare??",
      answer:
        "The cook can prepare up to 4 dishes as part of the service, which includes a variety of daily home-cooked meals like Dal, Chawal, Roti, and Sabzi (Roti and Chawal are included within the dishes).",
    },
    {
        question: "How long will a cook stay at my booking?",
        answer:
          "If you're not satisfied with your regular cook’s service, you have the option to request a change of cook. We will accommodate your request promptly.",
      },
      {
        question: "Can I cancel my trial?",
        answer:
          "Yes, you can cancel the trial. A full refund is available if you cancel before a cook is assigned. If a cook has been assigned, a 20% cancellation fee will apply..",
      },
      {
        question: "Can I stop my 'Cook for a Month' service?",
        answer:
          "Yes, you can discontinue the service. If you choose to stop, we will process a pro-rata refund for the remaining days upon cancellation.",
      },
      {
        question: "How and when can I renew my 'Cook for a Month' service?",
        answer:
          "You can renew your service starting from 7 days before its expiration date..",
      },
      {
        question: "How can I get support related to my booking?",
        answer:
          "For support, contact us through the 'Help & Support' section on the ChefKart App. Our support team is available from 06:00 AM to 09:30 PM..",
      },

  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl  mt-10 text-orange-400 font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-2xl font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transform transition-transform  ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-2xl">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
