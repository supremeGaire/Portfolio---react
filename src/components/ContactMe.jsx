import React from "react";
import "../styles/index.css";
import wavingHello from "../assets/waving.png";
import arrow from "../assets/arrow.png";

const ContactMe = () => {
    return (
        <section id="contact" className="py-4 mt-18 mb-10 w-10/12 m-auto">
            <h2 className="text-6xl font-bold my-10">
                contact<span className="dot">.</span>
            </h2>

            <div className="flex flex-col md:flex-row justify-between">
    <form action="https://formspree.io/f/xqazkebn" method="post" className="contact-form space-y-6 w-full md:w-3/5 text-lg">
        <input type="text" name="name" id="name" placeholder="Your Name" maxLength={50} className="w-full p-5 border bg-gray-200 placeholder-gray-400 text-gray-600 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500" required />
        <input type="email" name="email" id="email" placeholder="Your Email" maxLength={50} className="w-full p-5 border bg-gray-200 placeholder-gray-400 text-gray-600 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500" required />
        <textarea name="message" id="message" placeholder="Message" rows="5" className="w-full p-5 border bg-gray-200 placeholder-gray-400 text-gray-600 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none" required></textarea>
        <button type="submit" className="send-btn text-white py-3 px-12 rounded-full">Send</button>
    </form>

    <div className="flex flex-col items-start justify-between mt-6 md:mt-0 md:w-2/5">
        <h2 className="text-3xl hidden md:block md:ml-7">
            <span className="font-bold">Need Help?</span> <br />
            I'm just a <span className="font-bold">mail</span> away.
        </h2>
        <div className="hidden xl:block">
            <img src={arrow} alt="arrow" className="w-60" />
        </div>
        <img src={wavingHello} alt="Supreme" className="w-52 lg:w-60 transform scale-x-[-1] hidden md:block md:ml-7 xl:ml-0 xl:mt-6" />
    </div>
</div>


        </section>
    );
};

export default ContactMe;