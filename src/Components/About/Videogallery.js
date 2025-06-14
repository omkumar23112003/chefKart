import React, { useState, useEffect, useRef } from "react";

const VideoGallery = () => {
  const videos = [
    "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v4_015b8116b1.mp4", // Replace with actual video URLs
    "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v3_8de4acd8d1.mp4",
    "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v1_1_ce597e37d8.mp4",
    "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v6_b86f7e540a.mp4",
    "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/v5_068121efcb.mp4",
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Mobile screen detection
  const [activeIndex, setActiveIndex] = useState(0); // Track the active index on mobile
  const videoRefs = useRef([]);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? videos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === videos.length - 1 ? 0 : prevIndex + 1));
  };

  // Listen for screen resize events
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="container mx-auto">
        {/* Slider for mobile screens */}
        {isMobile ? (
          <div className="relative">
            {/* Video display */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <video
                ref={(el) => (videoRefs.current[activeIndex] = el)}
                src={videos[activeIndex]}
                className="object-cover w-full"
                muted
              ></video>

              {/* Play Button Overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={() => handleVideoClick(activeIndex)}
              >
                <button className="bg-white rounded-full p-4 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.752 11.168l-6.75-3.905A1 1 0 007 8.102v7.796a1 1 0 001.502.864l6.75-3.905a1 1 0 000-1.732z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation buttons for mobile */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
              <button
                className="bg-white p-2 rounded-full shadow-md"
                onClick={handlePrev}
              >
                &#8249; {/* Left arrow */}
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
              <button
                className="bg-white p-2 rounded-full shadow-md"
                onClick={handleNext}
              >
                &#8250; {/* Right arrow */}
              </button>
            </div>
          </div>
        ) : (
          // Grid for larger screens
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {videos.map((videoSrc, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                {/* Video */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={videoSrc}
                  className="object-cover w-full"
                  muted
                ></video>
                {/* Play Button Overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={() => handleVideoClick(index)}
                >
                  <button className="bg-white rounded-full p-4 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-6.75-3.905A1 1 0 007 8.102v7.796a1 1 0 001.502.864l6.75-3.905a1 1 0 000-1.732z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
