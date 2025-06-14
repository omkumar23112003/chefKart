import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
        <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link to="#" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FLogo_black_9e78b44631.webp&w=1920&q=75"></img>
        
      </Link>
      <p class="mt-2 text-black font-bold  text-center ">Get The App Now</p>
   <div className="flex flex-row space-x-7 mt-5">
    <img src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/app_store_e12d7f52d9.svg" alt="app"/>
    <img src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/google_play_bb87168764.svg" alt="app"/>   
   </div>

    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold  text-gray-900 tracking-widest text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">
            Cook for a Month</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Blog</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">About us</Link>
          </li>
         
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Chefit: One-Time Cook
            </Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">ChefKart से जुड़ें</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Cooks Near me</Link>
          </li>
        
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-bold text-gray-900 tracking-widest text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Chef for Party</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Contact</Link>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font  text-gray-900 tracking-widest font-bold text-md mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#" class="text-gray-600 normal leading-loose hover:text-gray-800">Terms of Servicek</Link>
          </li>
          
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-black  font-bold text-md text-center sm:text-left ">Copyright 2024 ChefKart Hospitality Pvt Ltd.
       
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link to="https://www.facebook.com/thechefkart" class="text-orange-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link to="https://twitter.com/x/migrate?tok=7b2265223a222f746865636865666b617274222c2274223a313733313932313339347d3aa8556f7b3639d4e784c9c276fb8842" class="ml-3 text-orange-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link to="https://www.instagram.com/thechefkart/" class="ml-3 text-orange-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link to="https://www.linkedin.com/company/42762980/" class="ml-3 text-orange-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
      
    </div>
  )
}

export default Footer
