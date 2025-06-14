import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white">
      {/* Heading */}
      <h2 className="text-5xl  font-bold text-black mb-6">
        Let's Get Social
      </h2>
      {/* Icons */}
      <div className="flex space-x-6">
        {/* Twitter Icon */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
        >
          <FaTwitter className="text-xl text-black" />
        </a>
        {/* Instagram Icon */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
        >
          <FaInstagram className="text-xl text-black" />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition duration-300"
        >
          <FaLinkedin className="text-xl text-black" />
        </a>
      </div>
    </div>
  );
};

export default SocialSection;
