import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const Testimonial1 = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:8000/testimonial/get");
        if (response.data && response.data.data) {
          setTestimonialsData(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-4 py-12 ">
      <h1 className="text-4xl font-bold text-center mb-8">Don’t take our word for it</h1>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial._id} className="p-4 mt-8">
            <div className="bg-green-700 border-4 border-green-400  rounded-lg p-6 text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-4 object-cover object-center rounded-full border-2  mx-auto"
                src={testimonial.profileimage}
              />
              <p className="leading-relaxed hover:text-black text-white">{testimonial.content}</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                {testimonial.name}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial1;
