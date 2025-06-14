import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cater = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/join/get')
      .then((res) => setData(res.data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="text-center text-black mt-10 text-5xl font-bold">ChefKart से क्यूँ जुड़ें?</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((item, key) => (
              <div key={item._id} className="p-4 md:w-1/3">
                <div className="h-full rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-6">
                    <h1 className="title-font font-bold text-gray-900 text-3xl text-center mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed mb-3 text-center font-bold text-black">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cater;
