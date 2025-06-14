import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

const GalleryAutoSlideZoom = () => {
  const [images, setImages] = useState([]);
  const cuisines = ["Indian", "Chinese", "Mexican", "Italian"];
  const [currentCuisine, setCurrentCuisine] = useState(cuisines[0]);
  const [centerIndex, setCenterIndex] = useState(0);

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/food/getall");
        setImages(response.data || []);
      } catch (error) {
        console.error("Error fetching food images:", error);
      }
    };

    fetchImages();
  }, []);

  // Rotate cuisines every 2 seconds
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
    afterChange: (current) => setCenterIndex(current),
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
        <h1 className="text-5xl text-gray-700 font-bold mb-8 text-center">
          Craving{" "}
          <span className="text-orange-500 font-bold">{currentCuisine}</span>{" "}
          food? Our Multi-Cuisine Experts <br /> Have Got You!
        </h1>

        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={item._id} className="px-20 mt-20 h-96 w-96">
              <div
                className={`group transition-transform duration-500 ease-in-out ${
                  index === centerIndex ? "scale-150" : "scale-90"
                }`}
              >
                <img
                  src={item.image}
                  alt={`Food ${index}`}
                  className="object-cover w-full h-full rounded-2xl"
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
