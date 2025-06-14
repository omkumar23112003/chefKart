import React, { useState, useEffect } from "react";
import axios from "axios";

const TabSwitchComponent = () => {
  const [activeTab, setActiveTab] = useState("For Singles");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/home/getall");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching home content:", error);
      }
    };

    fetchHomeData();
  }, []);

  const filteredData = data.find((item) => item.category === activeTab);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <h1 className="text-5xl text-black font-bold text-center">
          Healthy food cooked in your kitchen, <br /> whenever you want!
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-8 mt-5">
          <button
            className={`px-6 py-3 text-lg font-semibold ${
              activeTab === "For Singles"
                ? "text-orange-600 border-b-4 border-orange-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("For Singles")}
          >
            For Singles
          </button>
          <button
            className={`px-6 py-3 text-lg font-semibold ${
              activeTab === "For Families"
                ? "text-orange-600 border-b-4 border-orange-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("For Families")}
          >
            For Families
          </button>
        </div>

        {/* Content */}
        {filteredData && (
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={filteredData.image}
                alt={filteredData.title}
                className="rounded-lg shadow-md"
              />
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">{filteredData.title}</h2>
              <p className="text-gray-600 text-lg">{filteredData.content}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabSwitchComponent;
