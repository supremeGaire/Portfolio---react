import React from "react";
import "../styles/index.css";
import wavingHello from "../assets/waving.png";

const AboutMe = () => {
    return (
        <section id="about" className="pt-72 pb-14">
            <div className="w-10/12 m-auto">
                <h2 className="text-6xl font-bold mb-10 text-white">about me<span className="dot">.</span></h2>
                <div className="flex space-x-20 items-center">
                    <img src={wavingHello} alt="Hello" className="w-64"/>
                    <p className="text-slate-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam nisl, vitae ultricies nisl nisl aliquam nisl.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam nisl, vitae ultricies nisl nisl aliquam nisl.
                        <br /><br />
                        <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquam nisl."</i>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;