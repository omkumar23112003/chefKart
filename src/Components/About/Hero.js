import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#e5e5e5] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="title-font  rounded-lg w-24 h-6 mb-4 font-medium text-white bg-green-700">
             <span className='px-2'>Our Story</span>
             
            </p>
            <p className="mb-8  text-5xl  text-black font-bold">
            Embracing the goal of <span className='text-green-800 font-bold'> Change and  Empowerment</span>

            </p>
           <p className='text-black text-2xl'>  We aim to bridge the gap between delicious food and a healthy lifestyle while empowering our cooks.</p>
            <div className="flex justify-center">
              <button className="inline-flex mt-10 text-3xl font-bold text-white bg-black border-0 py-2 px-6   rounded-lg ">
                Contact Us
              </button>
             
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="image.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
