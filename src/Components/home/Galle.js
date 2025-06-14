import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

const GalleryWithState = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedIndex, setZoomedIndex] = useState(0);
  const [images, setImages] = useState([]);

  // Fetch images from API on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8000/foodGall/getall");
        setImages(response.data); // Store API image data
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleZoom = (index) => {
    setZoomedIndex(index);
    setIsZoomed(true);
  };

  const handleNextZoom = () => {
    setZoomedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevZoom = () => {
    setZoomedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#f1f1f1] py-12">
      <div className="container mx-auto max-w-7xl px-5">
        <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>

        {/* Image Slider */}
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={img._id} className="px-8">
              <img
                src={img.image}
                alt={`Slide ${index}`}
                className="w-full h-64 rounded-md object-cover cursor-pointer"
                onClick={() => handleZoom(index)}
              />
            </div>
          ))}
        </Slider>

        {/* Zoomed Modal */}
        {isZoomed && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              className="absolute top-5 right-5 bg-white text-black px-4 py-2 rounded-lg"
              onClick={() => setIsZoomed(false)}
            >
              Close
            </button>

            <button
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg"
              onClick={handlePrevZoom}
            >
              Prev
            </button>

            <div className="relative w-full sm:w-2/3 lg:w-1/2 max-h-1/2 flex justify-center items-center">
              <img
                src={images[zoomedIndex]?.image}
                alt={`Zoomed ${zoomedIndex}`}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <button
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg"
              onClick={handleNextZoom}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryWithState;
