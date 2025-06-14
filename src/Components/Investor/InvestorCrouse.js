import React, { useState } from 'react';

const InvestorsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const investors = [
    {
      name: 'Deepinder Goyal',
      title: 'Founder & CEO, Zomato',
      description: 'Deepinder Goyal is the founder and CEO of Zomato, one of the largest food tech companies in India. As an investor of Chefkart, Goyal is backing a promising idea to offer authentic and affordable meals prepared in the comfort of one\'s home. His investment is a testament to the potential of Chefkart and its innovative approach to at-home cooking services.',
      image: 'https://example.com/deepinder-goyal.jpg'
    },
    {
      name: 'Investor 2',
      title: 'Title 2',
      description: 'Description 2',
      image: 'https://example.com/investor2.jpg'
    },
    {
      name: 'Investor 3',
      title: 'Title 3',
      description: 'Description 3',
      image: 'https://example.com/investor3.jpg'
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide((currentSlide - 1 + investors.length) % investors.length);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % investors.length);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between py-8">
      <div className="flex justify-start w-1/6 px-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg mr-2"
          onClick={handlePrevious}
        >
          Previous
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:w-2/3 px-4">
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{investors[currentSlide].name}</h2>
          <p className="text-gray-700 mb-6">{investors[currentSlide].title}</p>
          <p className="text-gray-600">{investors[currentSlide].description}</p>
        </div>
        <div className="flex justify-end md:w-1/2">
          <img src={investors[currentSlide].image} alt={investors[currentSlide].name} className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="flex justify-end w-1/6 px-4">
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InvestorsCarousel;