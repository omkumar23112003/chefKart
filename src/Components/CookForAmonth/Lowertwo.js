import React from 'react'

const Lower2 = () => {
  return (
    <div>
        <section className="text-gray-600 bg-[#f1f1f1] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow w-1/3 lg:pr-24 md:pr-16 flex flex-col    md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className=" text-5xl mb-4 font-bold text-orange-500">Homemade food that <br/> warms the soul</h1>
      <p className="mb-8 leading-relaxed mt-4 text-2xl text-black">Never have to worry about skipping meals or <br/> eating oily outside food..</p>
        <button className="inline-flex text-white w-44 text-2xl   bg-orange-500 border-0 py-6 px-8  rounded-md hover:bg-gray-800  hover:text-orange-500  ">Book now</button>
      </div>
    
      

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FSubscription_banner_02_1_f9ff5bf256.webp&w=1920&q=75"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Lower2