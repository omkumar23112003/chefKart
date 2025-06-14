import React from "react";

const Carousel4= () => {
  const slides = [
    {
      title: "What People Think About Us",
      bgImage:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FChefit_Hero_banner_f573fdf12c.webp&w=1920&q=75",
    },
  ];

  return (
    <div className="relative bg-[#fff9f2] w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex items-center justify-center text-white bg-cover bg-center transition-all duration-500"
       
      >
        {/* Text Section */}
        <div className="text-center p-6 md:p-16  rounded-lg">
          <h1 className="text-3xl md:text-5xl text-black lg:text-6xl font-bold mt-3">
          No open positions
          </h1>
          <p className="text-black text-center mt-5 text-3xl">We'll be accepting applications soon...</p>
          

          <div className="mt-6">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel4;
