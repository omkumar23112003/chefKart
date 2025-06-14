import ContactLower from "./ContactLower";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative" >
        <div className="container px-5 py-12 mx-auto flex lg:flex-nowrap flex-wrap">
          {/* Left Section: Map and Address */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-6 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3508.886116953435!2d77.08022800000002!3d28.422693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1732564051942!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md w-full">
              <div className="lg:w-1/2 px-6 mb-4">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  B-179, Sector 57, near Rail Vihar, Block B, Sushant Lok III,
                  Sector 57, Gurugram, Haryana 122003
                </p>
              </div>
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  karanchefkart@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+9189369369</p>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full mt-8 lg:mt-0 px-4 md:px-6">
            <h2 className="text-gray-900 text-3xl md:text-4xl text-center font-medium title-font mb-4">
              Contact Us
            </h2>
            <p className="leading-relaxed text-gray-700 text-center mb-6 text-lg">
              Fill out the form & get in touch
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Pune</option>
                  <option>Ahmedabad</option>
                  <option>Jaipur</option>
                  <option>Lucknow</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please write your message in detail"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <ContactLower />
    </div>
  );
};

export default Contact;
