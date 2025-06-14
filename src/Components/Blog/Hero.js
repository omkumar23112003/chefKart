import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container mx-auto flex px-5  mt-20 py-24 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
          How to find the best cook for your home
            
          </h1>
          <p className="mb-8 leading-relaxed text-black text-2xl">
          Finding a cook for home can be challenging, especially if you’re staying away from your hometown
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-black border-0 py-2 px-6 font-bold  text-2xl  rounded-lg">
              Read More
            </button>
         
          </div>
        </div>

        {/* Right Video */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <video
            className="object-cover object-center rounded"
            src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/website_cook_loop_4e9912d5f5.mp4"
            controls
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
