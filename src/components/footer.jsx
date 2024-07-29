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
                <div className="flex justify-between items-center text-xl">
                    <div className="text-white flex space-x-2">
                        <i class="fa-solid fa-phone text-xl"></i>
                        <p>+977 9806737450</p>
                    </div>
                    <div className="text-white flex space-x-2">
                        <i class="fa-solid fa-envelope text-xl"></i>
                        <p>supremegaire57@gmail.com</p>
                    </div>
                    <div className="social-media-icons text-white text-xl flex space-x-2">
                        <a href="https://facebook.com/superme.gaire.1/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://instagram.com/supreme_gaire/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://x.com/supremegaire/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://github.com/supremeGaire/" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div
                    className="magic mt-12 text-center bg-slate-800 py-2 w-60 m-auto cursor-pointer rounded-md"
                    onClick={handleMagicClick}
                >
                    <p className="magic-text text-slate-400 italic">{magicText}</p>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-slate-400">Copyright &copy; 2024 Supreme Gaire. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;