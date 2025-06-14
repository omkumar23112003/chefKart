import React from "react";

const TakeItForward = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-5">
        {/* Video Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <video
            src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/mobile_video_be902dfffb.mp4?updated_at=2024-01-16T05:07:06.659Z" // Replace this with the actual video link
            controls
            className="h-96 w-52 rounded-lg shadow-md"
          ></video>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's take it forward
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            This is as easy as it gets! Good cooks are just a click away. <br />
            Download the App and get started.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {/* App Store Button */}
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-lg flex items-center shadow-md hover:bg-gray-800"
            >
              <img
                src="https://th.bing.com/th/id/OIP.todzFiCdppVXoPnT0HgwdAHaEK?rs=1&pid=ImgDetMain" // Replace with the actual App Store logo
                alt="App Store"
                className="w-6 h-6 mr-2"
              />
              App Store
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="bg-black text-white py-3 px-6 rounded-lg flex items-center shadow-md hover:bg-gray-800"
            >
              <img
                src="https://th.bing.com/th/id/OIP.Gu1NStDpNVmWisgSKKBzewHaEK?rs=1&pid=ImgDetMain" // Replace with the actual Google Play logo
                alt="Google Play"
                className="w-6 h-6 mr-2"
              />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeItForward;
