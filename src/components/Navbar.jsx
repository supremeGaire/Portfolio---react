import React, { useState } from "react";
import "../styles/index.css";

const Navbar = () => {
  // State to track the menu open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close status
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="home"
      className="flex justify-between items-center py-8 w-10/12 m-auto text-xl font-bold"
    >
      <div className="logo flex items-center ml-2 font-bold">
        {/* <img src="/path/to/logo.png" alt="Logo" className="h-8" /> */}
        <h1 className="xl:text-xl text-lg">
          Supreme<span>Gaire</span>
        </h1>
      </div>

      {/* Navbar for larger screens */}
      <nav className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-8 xl:text-xl lg:text-lg text-sm">
          <li>
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="">
              About Me
            </a>
          </li>
          <li>
            <a href="#career" className="">
              Career
            </a>
          </li>
          <li>
            <a href="#portfolio" className="">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu for smaller screens */}
      <div className="md:hidden">
        <button className="text-black focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Contact Button */}
      <a
        href="#contact"
        className="hidden md:flex contact-btn relative text-white xl:text-xl lg:text-lg text-sm py-2 px-4 rounded-full space-x-4 items-center cursor-pointer"
      >
        <div>Contact Me</div>
        <div className="circle-arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </a>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 right-0 z-20 bg-white shadow-lg text-center leading-10 md:hidden transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0 transition-all duration-500 ease-in-out"
            : "opacity-0 -translate-y-full transition-all duration-500 ease-in-out pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <ul>
            <li>
              <a href="#home" className="text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-black">
                About Me
              </a>
            </li>
            <li>
              <a href="#career" className="text-black">
                Career
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-black">
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="contact-btn text-white py-2 px-4 rounded-full flex space-x-4 items-center cursor-pointer bg-blue-600 hover:bg-blue-700 transition"
              >
                <div>Contact Me</div>
                <div className="circle-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
