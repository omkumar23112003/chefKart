import React, { useState } from "react";

const Carousel1 = () => {
  const slides = [
    {
      title: "Trusted By 10K+ Households To Hire a Cook ",
      description: "Professional & background verified cook for a month for you to enjoy home-cooked food every day  .",
      bgImage: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FJoin_as_chef_hero_banner_01_f31e87e92e.webp&w=1920&q=75",
    },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex items-center text-white bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[currentSlide].bgImage})`,
        }}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-10 md:p-16 rounded-r-lg ml-4">
          <h1 className="text-6xl  font-bold mt-3">Trusted By 10K+ <br/>Households  <br/><span className="text-orange-500 font-bold ">To Hire a Cook</span></h1>
          <p className="text-3xl  mt-10">{slides[currentSlide].description}</p>

          <button className="bg-orange-500 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-md mt-5 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Controls */}
      

      {/* Indicators */}
      
    </div>
  );
};

export default Carousel1;
