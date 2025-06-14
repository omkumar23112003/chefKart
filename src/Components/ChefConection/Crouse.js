import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  // Fetch slides from API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await axios.get("http://localhost:8000/crousel/get");
        const formattedSlides = res.data.map((item) => ({
          title: item.title || "",
          description: item.content || "",
          bgImage: item.image || "",
          action: item.action || "",
        }));
        setSlides(formattedSlides);
      } catch (error) {
        console.error("Failed to fetch carousel data:", error);
      }
    };

    fetchSlides();
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (slides.length ? (prev + 1) % slides.length : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  // Scroll to active slide
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.offsetWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  if (!slides.length) {
    return <div className="text-center mt-10">Loading slides...</div>;
  }

  return (
    <div className="relative w-[100vw] h-[80vh] overflow-hidden">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory h-full"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full snap-start bg-cover bg-center flex items-center"
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          >
            <div className="bg-black/50 w-full h-full flex items-center p-6 md:p-16">
              <div className="w-full md:w-1/2 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mt-3">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl mt-4">{slide.description}</p>
                <button className="bg-orange-500 text-white font-bold text-lg md:text-xl px-6 py-3 rounded-md mt-5 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300">
                  {slide.action || "ChefKart से जुड़ें"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
