import React, { useEffect, useState } from "react";
import axios from "axios";

const Investors = () => {
  const [investors, setInvestors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/investor/getinvestor")
      .then((res) => {
        setInvestors(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching investor data:", err);
        setError("Failed to load investor data");
        setIsLoading(false);
      });
  }, []);

  // Set up auto-scroll
  useEffect(() => {
    if (investors.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === investors.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [investors.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === investors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? investors.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8 w-full">
        <p>{error}</p>
      </div>
    );
  }

  if (investors.length === 0) {
    return (
      <div className="bg-gray-50 py-16 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Investors</h2>
          <p className="text-center text-gray-500">No investors found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Investors</h2>
        
        <div className="relative w-full">
          {/* Main Carousel */}
          <div className="w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {investors.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="mx-auto max-w-lg">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                      <div className="w-full h-48 bg-gray-100 flex items-center justify-center p-4">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full w-full bg-gray-200">
                            <span className="text-gray-400">No image available</span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-grow">
                        <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
                        <p className="text-blue-600 font-medium mb-3">{item.subtitle}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6">
            {investors.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 h-3 w-3 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;