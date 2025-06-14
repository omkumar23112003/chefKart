import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "👨‍🍳", // Replace this with a relevant SVG or icon
      title: "Professional Cooks",
    },
    {
      icon: "📜", // Replace this with a relevant SVG or icon
      title: "Easy Booking",
    },
    {
      icon: "⏰", // Replace this with a relevant SVG or icon
      title: "Timely Service",
    },
    {
      icon: "🎧", // Replace this with a relevant SVG or icon
      title: "Prompt Support",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Why Choose <span className="text-orange-500">ChefKart?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <div className="w-20 border-b-2 border-gray-600 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
