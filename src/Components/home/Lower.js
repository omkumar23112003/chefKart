import React from 'react'

const Lower = () => {
  return (
    <div className="hidden md:flex justify-center items-center bg-orange-200 py-16">
      <section className="text-gray-600 body-font max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-center">
        <h2 className=" leading-[4rem] tracking-wide font-bold text-5xl text-gray-900 mb-4 md:w-2/5 text-center md:text-left">
  ChefKart के <span className='text-orange-400 tracking-wide'>4500 से भी ज़्यादा कुक्स</span> का हिस्सा बनें।
</h2>


          <div className="md:w-3/5 md:pl-6  mt-4 md:mt-0">
           <button className=' text-white ml-36 h-14 w-72 rounded-lg bg-orange-500  text-3xl font-bold'>Chefkart to join</button>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lower;
