import FAQ from "./FAQ";

const ContactLower = () => {
    const content = [
      {
        text2: "Our mission is to provide at-home cooking services in a way that has never been experienced before by empowering millions of cooks across India.",
        imgSrc: "https://thechefkart.com/_next/image?url=%2FM_F_Home%20chef_refine%201.png&w=1920&q=75",
      },
      {
        text1: "ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!",
        imgSrc: "https://thechefkart.com/_next/image?url=%2FImage.png&w=1920&q=75",
        extraText1: "Read about our story.",
      },
    ];
  
    return (
        <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              {/* Image */}
              {item.text2 && (
                <p className="text-black text-xl md:text-2xl font-bold text-center md:text-left mb-4">
                  {item.text2}
                </p>
              )}
              <img
                className="object-cover object-center rounded w-full md:w-auto mb-6"
                alt="hero"
                src={item.imgSrc}
              />
              {/* Text */}
              
              {item.text1 && (
                <p className="text-black text-lg md:text-xl text-center md:text-left mb-4">
                  {item.text1}
                </p>
              )}
              {item.extraText1 && (
                <p className="text-red-500 text-lg md:text-xl underline text-center md:text-left cursor-pointer">
                  {item.extraText1}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <FAQ/>
      </div>
    );
  };
  
  export default ContactLower;
  