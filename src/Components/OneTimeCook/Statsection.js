import React from "react";

const StatsSections = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex justify-center py-12">
        <div className="flex flex-wrap justify-around w-full">
          {/* Stats Card 1 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2">3M+</div>
            <p className="text-gray-600 text-lg">Meals cooked with love</p>
          </div>
          {/* Stats Card 2 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2">4500+</div>
            <p className="text-gray-600 text-lg">Verified & Trained Cooks</p>
          </div>
          {/* Stats Card 3 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="text-5xl font-bold text-black mb-2">10K+</div>
            <p className="text-gray-600 text-lg">Households served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSections;
