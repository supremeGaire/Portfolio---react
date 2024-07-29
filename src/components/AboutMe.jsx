import React, { useState, useEffect } from "react";
import "../styles/index.css";
import wavingHello from "../assets/waving.png";

const AboutMe = () => {

    const quotes = [
        "Stay curious, keep learning, and embrace change",
        "The best error message is the one that never shows up.",
        "Experience is the name everyone gives to their mistakes."
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const quoteInterval = setInterval(() => {
            // Cycle through quotes by updating the index
            setCurrentQuoteIndex((prevIndex) =>
                prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5 seconds

        // Cleanup interval on component unmount
        return () => {
            clearInterval(quoteInterval);
        };
    }, [quotes.length]);

    return (
        <section id="about" className="pt-72 pb-14">
            <div className="w-10/12 m-auto">
                <h2 className="text-6xl font-bold mb-10 text-white">about me<span className="dot">.</span></h2>
                <div className="flex space-x-20 items-center">
                    <img src={wavingHello} alt="Hello" className="w-64" />
                    <p className="text-slate-400 text-lg">Hello! I'm a Web Front End Developer from Pokhara, Nepal with a love for crafting sleek and beautiful user interfaces.
                        <br /><br />
                        <i>"{quotes[currentQuoteIndex]}"</i>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;