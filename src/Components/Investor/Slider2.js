import React from "react";

const Carousel2 = () => {
  const slides = [
    {
      title: "Trusted By 10K+ Households To Hire a Cook ",
      description: "Experience the taste from around the world without leaving the coziness of home.  .",
      bgImage: "https://awgprivatechefs.com/wp-content/uploads/2021/05/nsplsh_b86635b484d2489d8e1d23806a8409de-mv2.jpg",
    },
    
  ];


  return (
    <div className="relative w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex items-center text-white bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: 'url("https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FInvestor_Hero_banner_1_f1154a025e.webp&w=1920&q=75")'
        }}
        
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-10 md:p-16 rounded-r-lg ml-4">
          <h1 className="text-5xl  font-bold mt-20">We are<span className="text-orange-500 font-bold ">{" "} category creators, <span className="text-white font-bold">dedicated to</span> simplifying the way India eats </span></h1>
          <p className="text-3xl  mt-10">{slides.description}</p>

        
        </div>
      </div>

      
    </div>
  );
};

export default Carousel2;
