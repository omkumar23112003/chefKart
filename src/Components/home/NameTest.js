import React from "react";

const Testimonial1 = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className=" font-bold text-center text-4xl mb-8">
        Don’t Take Our Word For It!
      </h2>
      <div className="flex flex-col md:flex-row items-center max-w-8xl  justify-center h-auto mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 text-center  md:text-left">
          <p className="text-5xl  text-gray-800 mb-4">
            “Everyone was amazed by the kind of party we threw, and the food was
            the talk of the party!”
          </p>
          <p className="text-md text-red-500 font-bold">Kavita</p>
        </div>

        {/* Video Section */}
        <div className="md:w-1/2">
          <div className="relative">
            <video
              src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/27389f2b_393b_42a7_bab8_7f0dc6ce3736_ca22a40ab0.mov"
              controls
              className="rounded-lg w-full"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white bg-red-500 rounded-full p-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-8.707a1 1 0 010 1.414l-4 4A1 1 0 018 14V6a1 1 0 011.707-.707l4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial1;
