import { useState } from "react";
import { FaHamburger, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <header className="fixed top-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link to="/" className="flex title-font font-medium items-center text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoErvIxAIWybuxDrbVZuRTz1B3ZaYWZTSqMw&s"
            alt="Logo"
            className="w-48 h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center text-base justify-center">
          <div className="relative">
            <button
              className="mr-5 text-2xl text-white hover:text-orange-500 hover:underline flex items-center"
              onClick={toggleDropdown}
            >
              Our Services
              <span className="ml-2">
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-60 bg-white text-black shadow-lg rounded-md z-10">
                <Link
                  to="/cook-for-month"
                  className="px-4 py-2 block text-lg font-bold hover:text-orange-500"
                >
                  Cook for a Month
                  <FaChevronRight className="ml-2" />
                </Link>
                <hr />
                <Link
                  to="/one-time-cook"
                  className="px-4 py-2 block text-lg font-bold hover:text-orange-500"
                >
                  Chiefit: One Time Cook
                  <FaChevronRight className="ml-2" />
                </Link>
                <hr />
                <Link
                  to="/chef-for-party"
                  className="px-4 py-2 block text-lg font-bold hover:text-orange-500"
                >
                  Chef for Party
                  <FaChevronRight className="ml-2" />
                </Link>
              </div>
            )}
          </div>
          <Link to="/join-chefkart" className="mr-5 text-2xl text-white hover:underline">
            ChefKart से जुड़ें
          </Link>
          <Link to="/chef-search" className="mr-5 text-2xl text-white hover:underline">
            Cooks Near Me
          </Link>
          <Link to="/contact">
          <button className="text-white text-2xl bg-orange-500 py-2 px-6 rounded-lg hover:bg-orange-600">
            Contact Us
          </button>
          </Link>
          <Link to="/register-chef">
          <button className="text-white text-2xl  py-2 px-6 rounded-lg ">
            Registration as the chef
          </button>
          </Link>
        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FaHamburger className="w-10 h-10" />
        </button>
      </div>

      {/* Slide-in Menu from the Right */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-1/2 bg-white text-black shadow-lg z-50">
          <div className="flex flex-col p-5 space-y-4">
            {/* Close Button */}
            <button
              className="self-end focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <GiTireIronCross className="w-10 h-10 text-black" />
            </button>

            {/* Menu Links */}
            <Link
              to="/about"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <hr />
            <Link
              to="/blog"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <hr />
            <Link
              to="/career"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Career
            </Link>
            <hr />
            <Link
              to="/investor-relation"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Investor Relations
            </Link>
            <hr />
            <Link
              to="/testimonial"
              className="text-lg font-bold hover:text-orange-500"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <hr />
            <button
              className="mt-4 inline-flex items-center bg-orange-500 border-0 py-2 px-4 rounded text-white text-lg"
              onClick={toggleMenu}
            >
              Contact Us
              <FaChevronRight className="ml-1" />
            </button>
          
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
