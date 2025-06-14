import React from 'react';

const Lower4 = () => {
  return (
    <div>
      <section className="text-gray-600 bg-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 w-full md:pr-16 flex flex-col md:items-start items-center md:text-left text-center mb-10 md:mb-0">
            <h5 className="text-2xl mb-4 font-bold text-red-500">Mission</h5>
            <p className="mb-6 leading-relaxed font-bold text-4xl text-gray-900">
              Impacting the cooking industry
            </p>
            <p className="text-black text-md">
              We are on a mission to manage millions of kitchens while empowering the cooking community to contribute significantly to the economy.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:max-w-lg md:w-1/2 w-full">
            <img
              className="object-cover object-center rounded w-full h-auto"
              alt="hero"
              src="https://thechefkart.com/_next/image?url=%2FiStock-1223383996%201.png&w=1920&q=75"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower4;
