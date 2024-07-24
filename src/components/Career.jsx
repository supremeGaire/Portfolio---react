import React, { useState, useEffect } from "react";
import "../styles/index.css";

const Career = () => {
  const [year, setYear] = useState(2016);
  const [activeEducations, setActiveEducations] = useState([]);

  // Update activeEducations based on the slider year
  useEffect(() => {
    const active = [];
    if (year >= 2016 && year < 2017) {
      active.push("2016-2017");
    }
    if (year >= 2017 && year < 2019) {
      active.push("2017-2019");
    }
    if (year >= 2019 && year < 2021) {
      active.push("2019-present");
    }
    if (year >= 2021 && year < 2024) {
      active.push("2019-present", "2021");
    }
    if (year >= 2024) {
      active.push("2019-present", "2024");
    }
    setActiveEducations(active);
  }, [year]);

  // Function to handle slider input change
  const handleSliderChange = (e) => {
    setYear(parseFloat(e.target.value));
  };

  const educationData = {
    "2016-2017": {
      time: "2016 - 2017",
      title: "Diploma in Basic Computer Course",
      institution: "CallMe Info Pvt. Ltd.",
      description: "Learnt Graphic Design, Logo Design using tools like Adobe Photoshop, Adobe Illustrator. Also learnt MS Office.",
    },
    "2017-2019": {
      time: "2017 - 2019",
      title: "Secondary Education, +2 (Science)",
      institution: "Prativa Secondary School",
    },
    "2019-present": {
      time: "2019 - present",
      title:
        "Bachelor of Science in Computer Science and Information Technology",
      institution: "Soch College of IT",
    },
    "2021": {
      time: "2021 - 2022",
      title: "Web Development Training (3 months)",
      institution: "TukiSoft Pvt. Ltd.",
    },
    "2024": {
      time: "2024 - present",
      title: "Front End Developer Intern",
      institution: "Reev InfoTech Pvt. Ltd.",
    },
  };

  return (
    <section id="career" className="py-10 w-10/12 mx-auto my-10">
      <h2 className="text-6xl font-bold mb-8">
        career<span className="dot">.</span>
      </h2>

      <h3 className="text-2xl font-bold mb-5">Education & Trainings</h3>
      <div
        className={`relative bg-gray-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out p-8 ${activeEducations.length === 1
          ? "h-28"
          : activeEducations.length === 2
            ? "h-48"
            : "h-64"
          }`}
      >
        <div className="flex flex-col space-y-4 overflow-hidden">
          {Object.entries(educationData).map(([key, { time, title, institution, description }]) =>
            activeEducations.includes(key) ? (
              <div key={key} className="flex w-full transition-opacity duration-700 ease-in-out opacity-100">
                <div className="w-1/6">
                  <h2 className="text-lg font-bold">{time}</h2>
                </div>
                <div>
                  <h2 className="education-title text-2xl font-bold">{title}</h2>
                  <p className="font-semibold text-slate-600">{institution}</p>
                  {/* <p className="italic">{description}</p> */}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="mt-10 w-1/2 m-auto flex flex-col items-center">
        <input
          type="range"
          min="2016"
          max="2024"
          value={year}
          step="0.01"
          className="slider-bg w-full h-2 rounded-lg"
          onChange={handleSliderChange}
        />
        <div className="flex justify-between text-sm font-bold w-full mt-2">
          <span>2016</span>
          <span>2017</span>
          <span>2018</span>
          <span>2019</span>
          <span>2020</span>
          <span>2021</span>
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-5 mt-10">Experience</h3>
      <div className="bg-gray-100 flex p-8 rounded-lg shadow-lg">
        <div className="w-1/6">
          <h2 className="text-lg font-bold">Present</h2>
        </div>
        <div>
          <div className="education-title text-2xl font-bold">
            Web Front End Developer
          </div>
          <p className="font-semibold text-slate-600">Reev InfoTech Pvt. Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default Career;
