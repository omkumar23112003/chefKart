import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-green-900 text-white py-8">
      <div className="max-w-6xl mx-auto justify-end mt-16 px-2 h-40 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <h2 className="text-4xl font-bold">3M+</h2>
          <p className="mt-2 text-lg">Meals cooked with love</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">4500+</h2>
          <p className="mt-2 text-lg">Verified & trained cooks</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">10K+</h2>
          <p className="mt-2 text-lg">Households served</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
