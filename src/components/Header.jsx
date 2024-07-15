import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">Logo</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-me">About Me</a></li>
                    <li><a href="#career">Career</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                </ul>
                <button className="contact-button">Contact Me</button>
            </nav>
            <section className="hero">
                <div className="hero-text">
                    <h1>Hello! I'm<br />Supreme Gaire</h1>
                    <button className="cv-button">Download CV</button>
                </div>
                <div className="hero-image">
                    <img src="/images/my-image.jpg" alt="Supreme Gaire" />
                </div>
            </section>
        </header>
    );
};

export default Header;