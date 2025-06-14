import React from 'react';

const Lowe1 = () => {
  return (
    <div>
      <section className="text-gray-500 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:flex lg:flex-row flex-col justify-between items-center">
            {/* Image Section */}
            <img 
              alt="ecommerce" 
              className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded" 
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75" 
            />
            {/* Text Section */}
            <div className="lg:w-1/2 w-full mt-12 lg:pl-10 lg:py-6">
              <h2 className="text-md font-bold text-red-500 tracking-widest">हमें है विश्वास</h2>
              <h1 className="text-gray-900 text-4xl lg:text-6xl font-bold mb-4">आपका बनाया खाना, खाएगा ज़माना!</h1>
              <h2 className="text-sm text-black font-bold mt-4">ऊपर जाएँ</h2>
              <button className="flex text-white mt-6 text-3xl bg-black border-0 py-2 px-6 rounded-lg">ChefKart से जुड़ें</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lowe1;
