import React, { useEffect, useState } from "react";

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 h-32 bg-gray-100 shadow-lg transition-transform transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <p className="text-gray-700 font-medium mt-14">
          Get a cook and comfort with just a click. Enjoy Trial without a why!
        </p>
        <button className="bg-orange-500 mt-10 text-white px-6 py-2 rounded-lg font-bold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FloatingBanner;
