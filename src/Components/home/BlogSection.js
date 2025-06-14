import React from "react";

const BlogSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h5 className="text-gray-400 text-center text-2xl font-bold">Blog</h5>
        <h2 className="text-center font-bold text-5xl">Cuisines worth travelling, now at your fingertips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6">
          {/* Blog Card 1 */}
          <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FBlog_ZO_02_c103cf5073.webp&w=1920&q=75"
              alt="Blog 1"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex flex-col mt-36  p-6">
              <span className="bg-orange-500 text-white text-xs uppercase font-bold px-3 py-1 mb-2">
                Find a cook
              </span>
              <span className="text-white text-2xl mb-4">5 min min read</span>
              <h2 className="text-white  text-3xl font-bold  mb-2">
                6 things to keep in <br/>mind when hiring a <br/>cook for home
              </h2>
            </div>
          </div>
          <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FBlog_ZO_02_c103cf5073.webp&w=1920&q=75"
              alt="Blog 1"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 flex flex-col mt-36  p-6">
              <span className="bg-orange-500 text-white text-xs uppercase font-bold px-3 py-1 mb-2">
                Find a cook
              </span>
              <span className="text-white text-2xl mb-4">5 min min read</span>
              <h2 className="text-white  text-3xl font-bold  mb-2">
                6 things to keep in <br/>mind when hiring a <br/>cook for home
              </h2>
            </div>
          </div>

         </div>
        {/* View All Blogs Button */}
        <div className="mt-8 text-center">
          <button className="bg-black text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800">
            View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
