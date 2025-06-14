import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-[#ececec] py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 items-center">
        {/* Mission Text */}
        <div className="lg:col-span-2">
          <p className="text-md  text-gray-700 ">Our mission</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
            Empowering cooks to bridge the gap between tasty food & healthy eating for our customers.
          </h2>
          <a
            href="#"
            className="mt-10 inline-block text-gray-600 text-sm underline  "
          >
            Know More
          </a>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-12 lg:gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">3M+</h3>
            <p className="text-sm text-gray-700 mt-2">Meals cooked with love</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">4500+</h3>
            <p className="text-sm text-gray-700 mt-2">Trained & verified cooks</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
            <p className="text-sm text-gray-700 mt-2">Households served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
