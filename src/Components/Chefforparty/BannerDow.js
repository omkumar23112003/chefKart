import React from 'react';
import ShowCard1 from './ShowCard';

const BannerDow1 = () => {
  return (
    <div>
      <section className="text-orange-600 bg-slate-200 body-font">
        <div className="container mx-auto px-5 py-24 flex flex-wrap items-center justify-center">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:pr-12 md:py-8 md:border-r mb-10 md:mb-0 border-b border-orange-500">
            <h4 className=" text-md font-bold title-font mb-2 text-orange-500 text-center md:text-left">Why choose?</h4>
            <h1 className="leading-relaxed text-3xl md:text-5xl font-bold text-black text-center md:text-left">
            Chef for Party
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:pl-12">
            <h2 className="title-font text-black tracking-wider text-xl md:text-2xl text-center md:text-left mb-3">
            Hire a professional Multi-cuisine expert chef to elevate your party hosting experience
            </h2>
          </div>
        </div>

        {/* ShowCard Component */}
        <ShowCard1 />
      </section>
    </div>
  );
};

export default BannerDow1;
