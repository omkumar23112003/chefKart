import React from 'react';
import ShowCa from './ShowCa';

const BannerDow = () => {
  return (
    <div>
      <section className="text-orange-600 bg-slate-200 body-font">
        <div className="container flex flex-wrap px-5 py-12 mx-auto items-center">
          {/* Left section */}
          <div className="w-full md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pb-10 border-b md:border-b-0 border-orange-500">
            <h4 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-center md:text-left text-orange-500">
              Why choose?
            </h4>
            <h1 className="leading-relaxed text-4xl sm:text-5xl font-bold text-black text-center md:text-left">
              Cook for a Month
            </h1>
          </div>
          {/* Right section */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="title-font text-gray-800 tracking-wider text-xl sm:text-2xl mb-3 text-center md:text-left">
              Try the service for a minimal trial amount and, if satisfied, get the same cook appointed for a month.
            </h2>
          </div>
        </div>
        <ShowCa />
      </section>
    </div>
  );
};

export default BannerDow;
