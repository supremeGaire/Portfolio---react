import React, { useState } from "react";
import "../styles/index.css";

const Footer = () => {
    const [magicText, setMagicText] = useState("Click here to see magic...");

    const handleMagicClick = () => {
        setMagicText("Under Construction...");

        // Change text back to original after 2 seconds
        setTimeout(() => {
            setMagicText("Click here to see magic...");
        }, 2000); // 2000 milliseconds = 2 seconds
    }; 

    return (
        <section id="footer" className="py-8">
<div className="w-10/12 m-auto">
    <div className="flex flex-col md:flex-row justify-between items-center text-xl space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-white flex space-x-2">
            <i className="fa-solid fa-phone text-xl"></i>
            <p>+977 98xxxxxxxx</p>
        </div>
        <div className="text-white flex space-x-2">
            <i className="fa-solid fa-envelope text-xl"></i>
            <p>supremegaire58@gmail.com</p>
        </div>

        <div className="social-media-icons text-white text-xl flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com/superme.gaire.1/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/supreme_gaire/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/supreme-gaire-a4ab01264/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/supremeGaire/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    </div>

    <div className="magic mt-12 text-center bg-slate-800 py-2 w-60 m-auto cursor-pointer rounded-md" onClick={handleMagicClick}>
        <p className="magic-text text-slate-400 italic">{magicText}</p>
    </div>

    <div className="mt-12 text-center">
        <p className="text-slate-400">Copyright &copy; 2024 <a href="#home" className="hover:text-sky-500">Supreme Gaire</a>. All rights reserved.</p>
    </div>
</div>

        </section>
    );
};

export default Footer;