import React from "react";

const SkillIndiaSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto text-center">
        <div className="flex justify-center items-center gap-16 mb-8">
          {/* Skill India Logo */}
          <div className="flex flex-col items-center">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FScreenshot_2023_07_10_at_4_52_1_658c10251b.png&w=256&q=75g"
              alt="Skill India"
              className="h-96  w-auto mb-4"
            />
         
          </div>
          {/* THSC Logo */}
          <div className="flex flex-col items-center">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FSkill_India_Preview_removebg_preview_1_03db4e9828.png&w=256&q=75"
              alt="THSC Logo"
              className="h-96 w-auto mb-4"
            />
           
          </div>
        </div>
        {/* Text Content */}
        <h2 className="text-5xl font-bold text-gray-900 mb-2">
          Proud Partner with Skill India
        </h2>
        <p className="text-gray-500 text-2xl font-bold">
          All our professionals are certified by Govt. of India under Skill
          India Mission
        </p>
      </div>
    </section>
  );
};

export default SkillIndiaSection;
