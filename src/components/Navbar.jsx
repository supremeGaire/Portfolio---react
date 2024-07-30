import React from "react";
import "../styles/index.css";

const Navbar = () => {
    return (
        <header id="home" className="flex justify-between items-center py-8 w-10/12 m-auto text-xl font-bold">
            <div className="logo flex items-center ml-2 font-bold">
                {/* <img src="/path/to/logo.png" alt="Logo" className="h-8" /> */}
                Supreme<span>Gaire</span>
            </div>
            <nav className="navbar">
                <ul className="flex space-x-8">
                    <li><a href="#home" className=" ">Home</a></li>
                    <li><a href="#about" className=" ">About Me</a></li>
                    <li><a href="#career" className=" ">Career</a></li>
                    <li><a href="#portfolio" className=" ">Portfolio</a></li>
                </ul>
            </nav>
            <a href="#contact" className="contact-btn relative text-white text-lg py-2 px-4 rounded-full flex space-x-4 items-center cursor-pointer">
                <div className=" ">Contact Me</div>
                <div className="circle-arrow"><i class="fa-solid fa-arrow-right"></i></div>
            </a>
        </header>
    );
};

export default Navbar;