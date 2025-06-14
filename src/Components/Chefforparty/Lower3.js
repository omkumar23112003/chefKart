import React from 'react';

const Lower4 = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container px-5 py-12 mx-auto max-w-7xl">
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Change the order here to make the image appear on the right */}
            <div className="lg:w-1/2 w-full mt-6 lg:mt-0 lg:pr-10 lg:py-6">
       
              <h1 className="text-black  text-5xl lg:text-5xl font-bold mt-4 text-center lg:text-left">
              Let Food Do The  <br/> Talking
              </h1>
              <p className="text-black text-lg lg:text-2xl  mt-6 text-center lg:text-left">
              Enjoy the spotlight with a chef for birthday, kitty party, anniversaries, house-warming, farewell, and any other party.
              </p>
              
            </div>

            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-64 lg:h-auto object-cover object-center rounded"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2Fcook_1_3efd7cf8b6_71550458c9.webp&w=1920&q=75"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower4;
