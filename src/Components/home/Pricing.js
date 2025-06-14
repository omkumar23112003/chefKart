import React from "react";

const Pricing = () => {
  const pricingData = [
    {
      title: "Chefit: One-time cook",
      price: "Get a professional cook for one-time within 60 minutes",
      frequency: "",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste"
      ],
      buttonText1: "Book Now",
      buttonText: "Know More",
      note: "Starting from ₹299/ visit",
      popular: false
    },
    {
        title: "Chefit: One-time cook",
      price: "Get a professional cook for one-time within 60 minutes",
      frequency: "",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste"
      ],
      buttonText1: "Book Now",
      buttonText: "Know More",
      note: "Starting from ₹299/ visit",
      popular: false

    },
    {
        title: "Chefit: One-time cook",
        price: "Get a professional cook for one-time within 60 minutes",
        frequency: "",
        features: [
          "Trained & Verified Cooks",
          "Healthy & Hygienic Food",
          "Tailored to Your Taste"
        ],
        buttonText1: "Book Now",
        buttonText: "Know More",
        note: "Starting from ₹299/ visit",
        popular: false
      },
    {
        title: "Chefit: One-time cook",
        price: "Get a professional cook for one-time within 60 minutes",
        frequency: "",
        features: [
          "Trained & Verified Cooks",
          "Healthy & Hygienic Food",
          "Tailored to Your Taste"
        ],
        buttonText1: "Book Now",
        buttonText: "Know More",
        note: "Starting from ₹299/ visit",
        popular: false
      },
  ];

  return (
    <div>
      <section className="text-black bg-[#E8EAF0] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-5xl font-bold title-font mb-2 text-black">
            Discover your perfect service
            </h1>
           
            
          </div>
          <div className="flex flex-wrap -m-4 ">
            {pricingData.map((plan, index) => (
              <div key={index} className="p-4 xl:w-1/4   emd:w-1/2 w-full">
                <div
                  className={`h-full p-6 rounded-lg border-2 bg-white flex flex-col relative overflow-hidden ${
                    plan.popular ? "border-indigo-500" : "border-gray-300"
                  }`}
                >
                  {plan.popular && (
                    <span className="bg-indigo-500 text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                    {plan.title}
                  </h2>
                  <h1 className="text-2xl text-black leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>{plan.price}</span>
                    {plan.frequency && (
                      <span className="text-lg ml-1 font-normal text-black">
                        {plan.frequency}
                      </span>
                    )}
                  </h1>
                  {plan.features.map((feature, idx) => (
                    <p key={idx} className="flex items-center text-black">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {feature}
                    </p>
                  ))}
                  <button
                    className={`flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none hover:${
                      plan.popular ? "bg-indigo-600" : "bg-gray-500"
                    } rounded ${
                      plan.popular ? "bg-indigo-500" : "bg-gray-400"
                    }`}
                  >
                    {plan.buttonText}
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">{plan.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
