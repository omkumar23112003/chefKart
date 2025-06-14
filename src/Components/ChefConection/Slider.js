import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 2, // Scroll 2 slides at a time
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-5">
      <h1 className="text-5xl text-center mt-5 font-bold">एक प्रमुख पहल</h1>

      <Slider {...settings}>
        <div>
          <img src="slider1.png" alt="Slide 1" className="w-full" />
        </div>
        <div>
          <img src="slider2.png" alt="Slide 2" className="w-full" />
        </div>
        <div>
          <img src="slider3.png" alt="Slide 3" className="w-full" />
        </div>
        <div>
          <img src="slider4.png" alt="Slide 4" className="w-full" />
        </div>
      </Slider>
    </div>
  );
}
