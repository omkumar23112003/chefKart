import React from 'react';
import ShowCard2 from './ShowCard';

const BannerDow2 = () => {
  return (
    <div>
      <section className="text-orange-600 bg-slate-200 body-font">
        <div className="container flex flex-wrap px-5 py-12 mx-auto items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2 md:pr-12 md:py-8 md:border-r font-bold md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-orange-500">
            <h4 className="text-xl sm:text-2xl font-bold title-font mb-2 text-orange-500 text-center md:text-left">
              Why choose?
            </h4>
            <h1 className="leading-relaxed text-3xl sm:text-5xl font-bold text-black text-center md:text-left">
              Chefit: One-Time Cook
            </h1>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="title-font text-gray-800 tracking-wider text-lg sm:text-2xl mb-3 text-center md:text-left">
            Get a certified cook for one-time to prepare delicious food in your kitchen.
            </h2>
          </div>
        </div>

        {/* Cards Section */}
        <ShowCard2 />
      </section>
    </div>
  );
};

export default BannerDow2;
