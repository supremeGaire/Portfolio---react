import React from "react";
import "../styles/index.css";
import wavingHello from "../assets/waving.png";

const ContactMe = () => {
    return (
        <section id="contact" className="my-14 w-10/12 m-auto">
            <h2 className="text-6xl font-bold my-10">
                contact<span className="dot">.</span>
            </h2>

            <div className="flex justify-between">
                <form className="contact-form space-y-6 w-3/5 text-lg">
                    <input type="text" placeholder="Your Name" className="w-full p-5 border bg-gray-200 placeholder-gray-400 text-gray-600 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                    <input type="email" placeholder="Your Email" className="w-full p-5 border bg-gray-200 placeholder-gray-400 text-gray-600 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500" />
                    <textarea placeholder="Message" className="w-full h-40 p-5 border bg-gray-200 placeholder-gray-400 text-gray-600 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"></textarea>
                    <button type="submit" className="send-btn text-white py-3 px-12 rounded-full">Send</button>
                </form>

                <div className="flex flex-col items-start justify-between ml-40">
                    <h2 className="text-3xl"><span className="font-bold">Need Help?</span> <br />
                    I'm just a <span className="font-bold">mail</span> away.
                    </h2>
                    <img src={wavingHello} alt="Supreme" className="w-56 transform scale-x-[-1]" />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;