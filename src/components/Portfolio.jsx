import React, { useState, useEffect } from "react";
import "../styles/index.css";
import rentalImg from "../assets/rentall.png";
import civilHeroImg from "../assets/civilHero.png";
import listifyImg from "../assets/listify.jpg";

const projects = [
    {
        id: 1,
        title: "01",
        name: "Rentall",
        description: "Rentall is a car renting web application for users to rent cars online in an easy way.",
        image: rentalImg,
        imageDesc: "A car renting app",
        link: "https://carrentall.vercel.app/",
    },
    {
        id: 2,
        title: "02",
        name: "Civil Hero",
        description: "A platform connecting Service Providers, Vendors, and Customers for civil services, equipment, and materials.",
        image: civilHeroImg,
        imageDesc: "Civil services and products platform",
        link: "https://civilhero.reev-it.com",
    },
    {
        id: 3,
        title: "03",
        name: "ToDos",
        description: "A simple to-do list app, where users can add, edit, delete tasks and also sort them.",
        image: listifyImg,
        imageDesc: "A to-do list app",
        link: "https://listify-rosy-eight.vercel.app/",
    },
];

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const handleNext = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleKeyPress = (event) => {
        if (event.key === "ArrowRight") {
            handleNext();
        } else if (event.key === "ArrowLeft") {
            handlePrev();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const project = projects[currentProject];

    return (
        <section id="portfolio" className="py-12">
            <div className="w-10/12 m-auto">
                <h2 className="text-6xl font-bold mb-10 text-white">
                    portfolio<span className="dot">.</span>
                </h2>
                <div className="flex justify-between items-center">
                    <div
                        className="text-white text-3xl md:text-5xl lg:text-6xl cursor-pointer"
                        onClick={handlePrev}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="w-10/12 m-auto mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div className="p-5 md:p-8 bg-gradient-to-bl from-sky-300 to-sky-50 flex flex-col md:flex-row justify-around items-center shadow-md rounded-lg relative">
                                <div className="w-3/4 text-center md:text-left md:w-1/2 space-y-2">
                                    <h2 className="text-6xl font-bold">{project.title}</h2>
                                    <h3 className="project-title text-4xl font-bold">
                                        {project.name}
                                    </h3>
                                    <p className="text-slate-600">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="project-image md:ml-4 mt-4 md:mt-0 w-48 h-48 p-2 border-4 border-sky-300 shadow-lg shadow-sky-700 flex justify-center items-center relative overflow-hidden rounded-lg text-center bg-sky-100">
                                    <img
                                        src={project.image}
                                        alt={project.imageDesc}
                                        className="w-full h-full object-cover rounded-md"
                                    />

                                    {project.link && (
                                        <button className="project-btn text-white py-2 px-3 rounded-full flex items-center justify-center cursor-pointer">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                                            <div className="circle-arrow ml-1 h-4 w-4 flex items-center justify-center">
                                                <i className="fa-solid fa-arrow-right text-sm"></i>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-white text-3xl md:text-5xl lg:text-6xl cursor-pointer"
                        onClick={handleNext}
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;




