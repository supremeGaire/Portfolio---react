import React from "react";
import "../styles/Portfolio.css";

const Portfolio = () => {
    return (
        <section id="portfolio" className="p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white shadow-md rounded-lg">
                    <img src="/path/to/project-image.png" alt="Project" className="w-full h-48 object-cover rounded-lg" />
                    <h3 className="mt-4 text-xl font-bold">Project Name</h3>
                    <p className="text-gray-700">Project Description</p>
                    <a href="/path/to/project" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">View Project</a>
                </div>
                {/* Add more project items */}
            </div>
        </section>
    );
};

export default Portfolio;