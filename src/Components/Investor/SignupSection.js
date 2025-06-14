import React from 'react';

const SignupSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        {/* Left Content */}
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-6xl text-gray-900">
          Simplifying the <br/> way <span className='text-orange-400 font-bold text-center underline'> India</span> eats.
          </h1>
          
        </div>

        {/* Signup Form */}
        <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 font-medium title-font mb-5 text-3xl">Believe in our mission? We'd love to know you!</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input
              type="City"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">Message</label>
            <input
              type="City"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-orange-500 border-0 py-2 px-8   rounded text-lg">
            Submit
          </button>
        
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
