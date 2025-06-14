import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const GalleryAutoSlideZoom = () => {
  const images = [
    "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FItalian_168d980a5a.webp&w=1920&q=75",
    "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FMexican_9e7092cb2b.webp&w=1920&q=75",
    "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2Ftop_view_delicious_noodles_concept_9283eeb6c4.webp&w=1920&q=75",
    "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FMexican_9e7092cb2b.webp&w=1920&q=75",
  
  ];

  const cuisines = ["Indian", "Chinese", "Mexican", "Italian"];
  const [currentCuisine, setCurrentCuisine] = useState(cuisines[0]);
  const [centerIndex, setCenterIndex] = useState(0); // To track the centered slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCuisine((prevCuisine) => {
        const currentIndex = cuisines.indexOf(prevCuisine);
        const nextIndex = (currentIndex + 1) % cuisines.length;
        return cuisines[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    afterChange: (current) => setCenterIndex(current), // Update the center index
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto max-w-7xl px-5">
        <h1 className="text-5xl  text-gray-700 font-bold mb-8 text-center">
          Craving{" "}
          <span className="text-orange-500 font-bold">{currentCuisine}</span>{" "}
          food? Our Multi-Cuisine Experts <br /> Have Got You!
        </h1>

        {/* Image Slider */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-20  mt-20 h-96 6 w-96">
              <div
                className={`group transition-transform duration-500 ease-in-out ${
                  index === centerIndex ? "scale-150" : "scale-90"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  width="1200px" 
                  height="1200px"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryAutoSlideZoom;
