import React from 'react';

const Heart = () => {
  return (
    <div className="flex justify-center items-center  ">
      <section className="text-gray-600 body-font">
      <h1 className='text-center text-5xl font-bold text-black mt-10'>Let's hear it from our Customer</h1>
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* Text and Stats Section */}
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font  leading-normal text-4xl mb-2 text-gray-900">
              "<br/>
              This is a much-required service that is convenient and more affordable than ordering online.
              </h1>
             <p className='mt-5 text-orange-500 font-bold'>Rishi</p>
            </div>
          
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <video
              className="object-cover object-center w-full h-full"
              controls
              width="700px"
              src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/testemonial_0f93413c4a.mp4"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heart;
