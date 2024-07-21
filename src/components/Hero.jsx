import React from 'react';
import '../styles/index.css';
import supremeImage from '../assets/supreme.jpg';

const Hero = () => {
  return (
    <section className="w-10/12 m-auto flex justify-between items-start pt-20 relative z-10">

      <div className="intro flex flex-col justify-between">
        <h1 className="text-4xl font-bold">Hello, I’m<br /><span className='text-8xl font-extrabold'>Supreme <br /> Gaire</span></h1>
        <div>
          <p className='text-slate-400'>Check out my qualifications...</p>
          <button className="download-btn text-lg font-bold relative text-white py-2 px-4 mt-2 rounded-full flex justify-between items-center cursor-pointer">
            <a href="/path/to/cv.pdf">Download CV</a>
            <div className="download-circle-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={supremeImage} alt="Supreme" className="object-cover" />
      </div>

    </section>
  );
};

export default Hero;

/* <span className="bg-blue-500 text-white py-2 px-4 rounded">Front End Developer</span>
<span className="bg-gray-700 text-white py-2 px-4 rounded">Graphic Designer</span> */