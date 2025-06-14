import React from 'react';

// Sample data array
const cardData = [
  {
    id: 1,
   
    title: "Multi-Cuisine Professionals",
    description:"Professional party chefs to ensure a diverse & exquisite dining experience.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/healthy_hygienic_a9878d9090.svg",
  },
  {
    id: 2,
    title: "Prompt Service",
    description:"Swift service to ensure that your party kicks off as planned",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/timely_service_3a6f9d9ebe.svg",
  },
  {
    id: 3,
    title: "Customisable menu",
    description:"Food from around the world to make your event the talk of the town.",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/easy_booking_92fea7ca01.svg",
  },
  {
    id: 4,
    title: "Bartenders, Waiters, etc.",
    description:"Expert bartenders & waiters to leave your guests in awe",
    image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/bartenders_48bb601645.svg",
  },
];

const ShowCard1 = () => {
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

export default ShowCard1;
