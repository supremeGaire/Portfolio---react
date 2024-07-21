import React from "react";
import "../styles/Career.css";

const Career = () => {
    return (
        <section id="career" className="p-8 bg-white">
            <h2 className="text-2xl font-bold mb-4">Career</h2>
            <ul>
                <li className="mb-4">
                    <h3 className="font-bold">2017 - 2019</h3>
                    <p className="text-gray-700">Secondary Education, +2 (Science)</p>
                </li>
                <li className="mb-4">
                    <h3 className="font-bold">2019 - Present</h3>
                    <p className="text-gray-700">Bachelor of Science in Computer Science and Information Technology</p>
                </li>
                {/* Add more career items */}
            </ul>
        </section>
    );
};

export default Career;