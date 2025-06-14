import React from "react";

const Carousel2 = () => {

  return (
    <div className="relative w-full h-screen">
      {/* Slide */}
      <div
        className="w-full h-full flex items-center text-white  bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: 'url("https://awgprivatechefs.com/wp-content/uploads/2021/05/nsplsh_b86635b484d2489d8e1d23806a8409de-mv2.jpg")'
        }}
        
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-10 md:p-16 rounded-r-lg ml-4">
          <h1 className="text-5xl  font-bold mt-3">Hire the Best Chef for Party<span className="text-orange-500 font-bold "><br/>In Delhi-NCR, Bangalore & Mumbai </span></h1>
          <p className="text-3xl  mt-10">Experience the taste from around the world without leaving the coziness of home.</p>

          <button className="bg-orange-500 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-md mt-5 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Carousel2;
