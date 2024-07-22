import React from 'react';
import photoshopIcon from '../assets/photoshop.svg';
import illustratorIcon from '../assets/illustrator.svg';
import tailwindIcon from '../assets/tailwind.svg';
const Skills = () => {
  return (
    <section id="skills" className="w-10/12 m-auto pb-8">
      <h2 className="text-6xl font-bold mb-8 text-right">skills<span className='dot'>.</span></h2>
      <div className="skills-container">
        <div className="skill-icons">
          <div className="skill-icon">
            <i className="fab fa-html5 fa-4x"></i>
            <p className="text-center mt-2">HTML</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-css3-alt fa-4x"></i>
            <p className="text-center mt-2">CSS</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-js-square fa-4x"></i>
            <p className="text-center mt-2">JavaScript</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-react fa-4x"></i>
            <p className="text-center mt-2">React</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-git-alt fa-4x"></i>
            <p className="text-center mt-2">Git</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-github fa-4x"></i>
            <p className="text-center mt-2">GitHub</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-bootstrap fa-4x"></i>
            <p className="text-center mt-2">Bootstrap</p>
          </div>
          <div className="skill-icon">
            <img src={tailwindIcon} alt="Adobe Photoshop" className="h-16 w-16" />
            <p className="text-center mt-2">Tailwind CSS</p>
          </div>
          <div className="skill-icon">
            <img src={photoshopIcon} alt="Adobe Photoshop" className="h-16 w-16" />
            <p className="text-center mt-2">Adobe Photoshop</p>
          </div>
          <div className="skill-icon">
            <img src={illustratorIcon} alt="Adobe Photoshop" className="h-16 w-16" />
            <p className="text-center mt-2">Adobe Illustrator</p>
          </div>

          {/* Repeat the icons to ensure smooth transition */}
          <div className="skill-icon">
            <i className="fab fa-html5 fa-4x"></i>
            <p className="text-center mt-2">HTML</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-css3-alt fa-4x"></i>
            <p className="text-center mt-2">CSS</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-js-square fa-4x"></i>
            <p className="text-center mt-2">JavaScript</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-react fa-4x"></i>
            <p className="text-center mt-2">React</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-git-alt fa-4x"></i>
            <p className="text-center mt-2">Git</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-github fa-4x"></i>
            <p className="text-center mt-2">GitHub</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-bootstrap fa-4x"></i>
            <p className="text-center mt-2">Bootstrap</p>
          </div>
          <div className="skill-icon">
            <img src={tailwindIcon} alt="Adobe Photoshop" className="h-16 w-16" />
            <p className="text-center mt-2">Tailwind CSS</p>
          </div>
          <div className="skill-icon">
            <img src={photoshopIcon} alt="Adobe Photoshop" className="h-16 w-16" />
            <p className="text-center mt-2">Adobe Photoshop</p>
          </div>
          <div className="skill-icon">
            <img src={illustratorIcon} alt="Adobe Photoshop" className="h-16 w-16" />
            <p className="text-center mt-2">Adobe Illustrator</p>
          </div>
        </div>
        
        <div className="blur-left"></div>
        <div className="blur-right"></div>
      </div>

      <h2 className='text-2xl font-bold mt-10'>Front End Development</h2>
      <div className="skill-line-base mt-2 rounded-full">
        <div className="skill-line rounded-full"></div>
      </div>
      <h2 className='text-2xl font-bold mt-8'>Graphic Design</h2>
      <div className="skill-line-base mt-2 rounded-full">
        <div className="skill-line-2 rounded-full"></div>
      </div>
    </section>
  );
};

export default Skills;
