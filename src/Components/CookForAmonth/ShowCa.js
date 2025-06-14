import React from 'react';

// Sample data array
const cardData = [
  {
    id: 1,
   
    title: "30 Days of Assured Service",
    description:"Free substitute cook or service extension in case of leaves.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/30_days_assured_1aa2f3eb64.svg",
  },
  {
    id: 2,
    title: "Trained & Verified Cooks",
    description:"Professionally trained & background verified cooks for quality service.",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FGroup_625783_1_16e923de80.png&w=1920&q=75",
  },
  {
    id: 3,
    title: "Effortless Replacements",
    description:"One free, no-questions-asked cook replacement..",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/effortless_ae968a4dea.svg",
  },
  {
    id: 4,
    title: "Quick Service",
    description:"Find a skilled cook for your kitchen in as little as 24 hours.",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2Ftime_management_4_2_20dc3c1815.png&w=1920&q=75",
  },
];

const ShowCa = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="border-2 rounded-lg border-gray-200 border-opacity-50 p-6 flex flex-col sm:flex-row items-center bg-white"
            >
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-2xl bg-[#FFF2F2] flex-shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  width="80"
                  height="80"
                />
              </div>
              <div className="flex-grow ml-4">
                <h2 className="text-gray-900 text-1xl sm:text-xl title-font font-bold mb-2">
                  {card.title}
                </h2>
                <p className="leading-relaxed text-lg sm:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCa
