import React from 'react';

const Heart2 = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* Video Section */}
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0 order-last lg:order-first">
            <video
              className="object-cover object-center w-full h-full"
              controls
              width="700px"
              src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/cook_vid_low_quality_8_mb_1249700be8.mp4"
            />
          </div>

          {/* Text and Stats Section */}
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pl-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font leading-normal text-3xl mb-2 text-black">
                "<br />
                "जहाँ आपको इज़्ज़त नहीं मिले, ChefKart उस घर में आपको कभी नहीं भेजेगी।"!"
              </h1>
              <p className="mt-5 text-red-500 text-2xl font-bold">अजनहर बीबी</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heart2;
