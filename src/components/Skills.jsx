import React from 'react';
import photoshopIcon from '../assets/photoshop.svg';
import illustratorIcon from '../assets/illustrator.svg';
import tailwindIcon from '../assets/tailwind.svg';
import typeScriptIcon from '../assets/typescript.svg';
import nextjsIcon from '../assets/nextjs.svg';
import svelteIcon from '../assets/svelte-logo.png';

const Skills = () => {
  return (
    <section id="skills" className="w-10/12 m-auto pb-8">
      <h2 className="text-6xl font-bold mb-8 text-right">skills<span className='dot'>.</span></h2>
      <div className="skills-container">
        <div className="skill-icons">
          <div className="skill-icon">
            <i className="fab fa-html5 fa-4x text-orange-600"></i>
            <p className="text-center mt-2">HTML</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-css3-alt fa-4x text-blue-600"></i>
            <p className="text-center mt-2">CSS</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-js-square fa-4x text-yellow-500"></i>
            <p className="text-center mt-2">JavaScript</p>
          </div>
          <div className="skill-icon">
          <img src={typeScriptIcon} alt="TypeScript" className="h-16 w-16" />
            <p className="text-center mt-2">TypeScript</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-react fa-4x text-sky-500"></i>
            <p className="text-center mt-2">React</p>
          </div>
          <div className="skill-icon">
            <img src={nextjsIcon} alt="NextJS" className="h-16 w-16" />
            <p className="text-center mt-2">Next.js</p>
          </div>
          <div className="skill-icon">
            <img src={svelteIcon} alt="Svelte" className="h-16 w-16" />
            <p className="text-center mt-2">Svelte</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-git-alt fa-4x text-orange-600"></i>
            <p className="text-center mt-2">Git</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-github fa-4x text-gray-800"></i>
            <p className="text-center mt-2">GitHub</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-bootstrap fa-4x text-purple-600"></i>
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
          <div className="skill-icon">
            <i className="fab fa-figma fa-4x text-orange-600"></i>
            <p className="text-center mt-2">Figma</p>
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
          <img src={typeScriptIcon} alt="TypeScript" className="h-16 w-16" />
            <p className="text-center mt-2">TypeScript</p>
          </div>
          <div className="skill-icon">
            <i className="fab fa-react fa-4x"></i>
            <p className="text-center mt-2">React</p>
          </div>
          <div className="skill-icon">
          <img src={nextjsIcon} alt="NextJS" className="h-16 w-16" />
            <p className="text-center mt-2">Next.js</p>
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
          <div className="skill-icon">
            <i className="fab fa-figma fa-4x"></i>
            <p className="text-center mt-2">Figma</p>
          </div>
        </div>
        
        <div className="blur-left"></div>
        <div className="blur-right"></div>
      </div>

      <h2 className='text-2xl font-bold mt-10'>Front End Development</h2>
      <div className="skill-line-base mt-2 rounded-full">
        <div className="skill-line-fd rounded-full"></div>
      </div>
      <h2 className='text-2xl font-bold mt-8'>Graphic Design</h2>
      <div className="skill-line-base mt-2 rounded-full">
        <div className="skill-line-gd rounded-full"></div>
      </div>
      <h2 className='text-2xl font-bold mt-8'>UI/UX Design</h2>
      <div className="skill-line-base mt-2 rounded-full">
        <div className="skill-line-ud rounded-full"></div>
      </div>

      <p className="text-slate-600 mt-10 italic text-lg">I am always looking to learn more and improve my skills.</p>
    </section>
  );
};

export default Skills;
