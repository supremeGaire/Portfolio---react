import React, { useState } from "react";
import "../styles/index.css";

const projects = [
    {
        id: 1,
        title: "01",
        name: "NexNote",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "NexNote",
        imageDesc: "A note taking app",
    },
    {
        id: 2,
        title: "02",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "Name",
        imageDesc: "A different app",
    },
    {
        id: 3,
        title: "03",
        name: "Another Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        image: "Name",
        imageDesc: "App description",
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
                                <div className="project-image w-48 h-48 bg-gradient-to-tr from-sky-300 to-sky-500 flex flex-col justify-center items-center relative overflow-hidden">
                                    <h2 className="text-2xl font-bold">{project.image}</h2>
                                    <p>{project.imageDesc}</p>
                                    <button className="project-btn text-white py-2 px-3 rounded-full flex items-center justify-center cursor-pointer">
                                        <a href="#">View Project</a>
                                        <div className="circle-arrow ml-1 h-4 w-4">
                                            <i className="fa-solid fa-arrow-right text-sm"></i>
                                        </div>
                                    </button>
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
