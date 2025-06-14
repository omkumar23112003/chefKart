import { FaTwitter, FaLinkedin } from "react-icons/fa"; // Import social icons

const GallerySection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col mb-10 text-center">
          <h1 className="text-4xl font-bold text-black">
            The People Behind <span className="text-red-500">ChefKart</span>
          </h1>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center">
          {/* First Profile */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center">
            <div className="rounded-lg h-80 w-80 overflow-hidden mb-4"> {/* Increased size */}
              <img
                alt="content"
                className="object-cover object-center h-80 w-80 rounded-full" // Increased size
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FVaibhav_01_1db5d1c3eb.webp&w=1920&q=75"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Vaibhav Gupta</h2>
            <h3 className="text-xl text-gray-500 uppercase">CEO, Co-founder</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com/Vaibhavthechef" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-gupta-iitkgp/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl" />
              </a>
            </div>
          </div>

          {/* Second Profile */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center">
            <div className="rounded-lg h-80 w-80 overflow-hidden mb-4"> {/* Increased size */}
              <img
                alt="content"
                className="object-cover object-center h-80 w-80 rounded-full" // Increased size
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FAman_01_a6144820a0.webp&w=1920&q=75"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Aman Gupta</h2>
            <h3 className="text-xl text-gray-500 uppercase">CTO, Co-founder</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://x.com/a_man__gupta?mx=2" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/aman-gupta1995/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl" />
              </a>
            </div>
          </div>

          {/* Third Profile */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6 flex flex-col items-center">
            <div className="rounded-lg h-80 w-80 overflow-hidden mb-4"> {/* Increased size */}
              <img
                alt="content"
                className="object-cover object-center h-80 w-80 rounded-full" // Increased size
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FAmeya_01_31f6b17ce0.webp&w=1920&q=75"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Ameya Kannamwar</h2>
            <h3 className="text-xl text-gray-500 uppercase">COO</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://x.com/ameyakannamwar" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/ameya-kannamwar-a6bb8242/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
