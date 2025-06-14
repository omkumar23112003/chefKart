import React, { useState } from "react";

const FAQ2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "ChefKart से कैसे जुड़ें?",
      answer:
        "ChefKart से जुड़ने के लिए ऊपर दिए गए ‘ChefKart से जुड़ें’ का बटन दबा कर फॉर्म भरें या हमें 9871231115 पर कॉल करें।.",
    },
    {
      question: "ChefKart से कौन जुड़ सकते हैं?",
      answer:
        "ChefKart से हर वह कुक जुड़ सकते हैं जो खाना पकाने की प्रतिभा रखते हैं और 18 साल से ज़्यादा उम्र के हैं। .",
    },
    {
        question: "ChefKart से जुड़ने के लिए किन चीजों की आवश्यकता है?",
        answer:
          "ChefKart से जुड़ने के लिए आपके पास आधार कार्ड, स्मार्ट फ़ोन, बैंक अकाउंट और पासपोर्ट फ़ोटो होना ज़रूरी है।..",
      },
    
  ];

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl  text-orange-400 font-bold text-center mb-8">
        आपके प्रश्न

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

export default FAQ2;
