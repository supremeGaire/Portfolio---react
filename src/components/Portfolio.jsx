import React, { useState, useEffect } from "react";
import "../styles/index.css";

const projects = [
    {
        id: 1,
        title: "01",
        name: "Rentall",
        description: "Rentall is a car renting web application for users to rent cars online in an easy way.",
        image: "Rentall",
        imageDesc: "A car renting app",
        link: "https://carrentall.vercel.app/",
    },
    {
        id: 2,
        title: "02",
        name: "ToDos",
        description: "A simple to-do list app, where users can add, edit, delete tasks and also sort them.",
        image: "ToDos",
        imageDesc: "A to-do list app",
        link: "https://todoapp.vercel.com",
    },
    {
        id: 3,
        title: "03",
        name: "Resume Generator",
        description: "A resume generator app, where users can fill their information and generate a resume by choosing among various templates and download them in PDF format.",
        image: "Resume Generator",
        imageDesc: "A resume generator app",
        link: "https://resumegenerator.vercel.com",
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

        // Cleanup event listener on component unmount
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
                        className="text-white text-6xl cursor-pointer"
                        onClick={handlePrev}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="w-10/12 m-auto mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div className="p-8 bg-gradient-to-bl from-sky-300 to-sky-50 flex justify-around items-center shadow-md rounded-lg relative">
                                <div className="w-1/2 space-y-2">
                                    <h2 className="text-6xl font-bold">{project.title}</h2>
                                    <h3 className="project-title text-4xl font-bold">
                                        {project.name}
                                    </h3>
                                    <p className="text-slate-600">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="project-image min-w-48 min-h-48 p-4 bg-gradient-to-tr from-sky-300 to-sky-500 flex flex-col justify-center items-center relative overflow-hidden">
                                    <h2 className="text-2xl font-bold">{project.image}</h2>
                                    <p>{project.imageDesc}</p>
                                    {project.link && (
                                        <button className="project-btn text-white py-2 px-3 rounded-full flex items-center justify-center cursor-pointer">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                                            <div className="circle-arrow ml-1 h-4 w-4">
                                                <i className="fa-solid fa-arrow-right text-sm"></i>
                                            </div>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-white text-6xl cursor-pointer"
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
