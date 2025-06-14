import React, { useState } from "react";

const FaqMonth = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is Cook for Month?",
      answer:
        "‘Cook for a Month’ offers a seamless 30-day service where a trusted and verified cook prepares meals according to your preferences in the comfort of your home.",
    },
    {
      question: "Can I try the cook before choosing the 'Cook for a Month' service?",
      answer:
        "Yes, you can book a paid trial to experience the service. If satisfied, the same cook will be assigned for the entire 30-day period.",
    },
    {
        question: "How is a cook assigned to me?",
        answer:
          "A cook will be assigned based on your preferences and specifications at the time of booking the trial.",
      },
    {
      question: "How can I find out if this service is available in my area?",
      answer:
        "Add your address to check service availability. The home page will then display a list of services offered in your location.",
    },
    {
      question: "When do I have to make the payment to start my Cook For a Month service?",
      answer:
        "Once the trial session is over, you have to pay the subscription fee to start your daily service with the selected cook..",
    },
    {
      question: "Will the cook clean the utensils?",
      answer:
        "No, the service does not include utensil cleaning. The cook will clean the stove and countertop after preparing your meals..",
    },
    {
        question: "What if I am not satisfied with my cook's service?",
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
        <h2 className="text-6xl  mt-16 text-orange-400 font-bold text-center mb-8">
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

export default FaqMonth;
