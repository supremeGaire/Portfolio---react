import React from "react";
import "../styles/ContactMe.css";

const ContactMe = () => {
    return (
        <section id="contact" className="p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
                <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
            </form>
        </section>
    );
};

export default ContactMe;