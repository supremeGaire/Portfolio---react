import React from 'react';

const Designs = () => {
  return (
    <section id="designs" className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Designs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/path/to/design-image.png" alt="Design" className="w-full h-48 object-cover rounded-lg" />
        {/* Add more design items */}
      </div>
    </section>
  );
};

export default Designs;
