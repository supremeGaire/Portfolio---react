import React from "react";
import "../styles/index.css";

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-12">
            <div className="w-10/12 m-auto">
                <h2 className="text-6xl font-bold mb-10 text-white">
                    portfolio<span className="dot">.</span>
                </h2>
                <div className="flex justify-between items-center">
                    <div className="text-white text-6xl">
                        <i className="fa-solid fa-angle-left cursor-pointer"></i>
                    </div>
                    <div className="w-10/12 m-auto mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div className="p-8 bg-gradient-to-bl from-sky-300 to-sky-50 flex justify-around items-center shadow-md rounded-lg relative">
                                <div className="w-1/2 space-y-2">
                                    <h2 className="text-6xl font-bold">01</h2>
                                    <h3 className="project-title text-4xl font-bold">
                                        Project Name
                                    </h3>
                                    <p className="text-slate-600">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Doloremque repellendus natus hic voluptate maiores sed quam
                                        culpa, reprehenderit totam. Accusantium fuga deserunt eaque,
                                        provident ad perspiciatis deleniti voluptatibus ducimus
                                        temporibus.
                                    </p>
                                </div>
                                <div className="project-image w-48 h-48 bg-gradient-to-tr from-sky-300 to-sky-500 flex flex-col justify-center items-center relative overflow-hidden">
                                    <h2 className="text-2xl font-bold">NexNote</h2>
                                    <p>A note taking app</p>
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
                    <div className="text-white text-6xl">
                        <i className="fa-solid fa-angle-right cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
