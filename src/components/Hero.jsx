import React, { useState, useEffect } from "react";
import '../styles/index.css';
import supremeImage1 from '../assets/img1.jpeg';
// import supremeImage2 from '../assets/img2.jpeg';
import supremeImage3 from '../assets/img3.jpeg';

const Hero = () => {

  const images = [supremeImage1, supremeImage3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000); // Duration of the fade-out effect
    }, 3600);

    return () => clearInterval(timer);
  }, [images.length]);


  return (
    <section className="w-10/12 m-auto flex justify-between items-start pt-20 relative z-10">

      <div className="intro flex flex-col justify-between">
        <div>
        <h1 className="text-4xl font-bold">Hello, I’m<br /><span className='text-8xl font-extrabold'>Supreme <br /> Gaire</span></h1>
        {/* <p>.............................................................</p> */}
        </div>
        <div>
          <p className='text-slate-400'>Check out my qualifications...</p>
          <a href="../assets/resume.pdf" download="Supreme_Gaire_Resume.pdf" className="download-btn text-lg font-bold relative text-white py-2 px-4 mt-2 rounded-full inline-flex space-x-4 items-center cursor-pointer">
            <div>Download Resume</div>
            <div className="download-circle-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          </a>
        </div>
      </div>

      <div className="hero-image relative bg-white">
        <img src={images[currentImageIndex]} alt="Supreme" className={`object-cover ${fade ? 'fade-out' : ''}`} />
        <button className="contact-btn absolute top-56 text-white text-xl rounded-full flex items-center border-2 border-gray-600 cursor-pointer">
          <div className="circle-arrow"></div>
          <div className="text-white py-2 px-4 rounded-full">Front End Developer</div>
        </button>

        <button className="contact-btn absolute top-10 text-white text-xl rounded-full flex items-center border-2 border-gray-600 cursor-pointer">
          <div className="circle-arrow"></div>
          <div className=" text-white py-2 px-4 rounded-full">Graphic Designer</div>
        </button>

        <div className="social-media-icons absolute right-3 bottom-2 text-white text-xl flex space-x-2">
          <a href="https://facebook.com/superme.gaire.1/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com/supreme_gaire/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/supremegaire/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://github.com/supremeGaire/" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>

    </section>
  );
};

export default Hero;

