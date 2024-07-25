import React from 'react';
import supremeImage1 from '../assets/img1.jpeg';
// import supremeImage2 from '../assets/img2.jpeg';
import supremeImage3 from '../assets/img3.jpeg';

const Designs = () => {
  const designImages = [
    { id: 1, src: '../assets/img1.jpeg', alt: 'Design 1' },
    { id: 2, src: '../assets/img2.jpeg', alt: 'Design 2' },
    { id: 3, src: '../assets/img3.jpeg', alt: 'Design 3' },
    { id: 4, src: '../assets/hello.png', alt: 'Design 4' },
    { id: 5, src: '/path/to/design-image5.png', alt: 'Design 5' },
    { id: 6, src: '/path/to/design-image6.png', alt: 'Design 6' },
  ];

  return (
    <section id="designs" className="my-10 w-10/12 m-auto">
      <h2 className="text-6xl font-bold mb-10 text-right">
        design<span className="dot">.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-2 row-span-2">
          <img src={designImages[0].src} alt={designImages[0].alt} className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-2 row-span-1">
          <img src={designImages[1].src} alt={designImages[1].alt} className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-2 row-span-1">
          <img src={designImages[2].src} alt={designImages[2].alt} className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-3 row-span-1">
          <img src={designImages[3].src} alt={designImages[3].alt} className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-3 row-span-2">
          <img src={designImages[4].src} alt={designImages[4].alt} className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
        <div className="col-span-6 row-span-1">
          <img src={designImages[5].src} alt={designImages[5].alt} className="w-full h-full object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Designs;
