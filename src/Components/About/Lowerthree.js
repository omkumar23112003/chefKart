import React from 'react';

const Lower3 = () => {
  return (
    <div>
      <section className="text-gray-600 bg-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg md:w-1/2 w-full mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded w-full h-auto"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FAbout_us_Banner_02_413026c0c6.webp&w=1920&q=75"
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 w-full lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center">
            <h5 className="text-2xl mb-4 font-bold text-red-500">
              Vision
            </h5>
            <p className="mb-6 leading-relaxed mt-4 text-4xl font-bold text-black">
              One kitchen at a time
            </p>
            <p className="text-black text-lg">
              Our vision is to ensure that every household in the country can
              enjoy quality food prepared by our cooks in their own kitchens.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower3;
