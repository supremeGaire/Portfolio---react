import React, { useState } from "react";
import design1 from "../assets/gham chaya.png";
import design2 from "../assets/movie poster.jpg";
import design3 from "../assets/turtle-summer poster.jpg";
import design4 from "../assets/tea package design.jpg";
import design5 from "../assets/logo design.jpg";
import design6 from "../assets/karma.jpg";
import design7 from "../assets/icecream advertisement.png";

const Designs = () => {
  const designImages = [
    { id: 1, src: design1, alt: "Design 1", description: "Photo manipulation 01 (For youtube thumbnail)", categories: ["Photo Manipulation", "Featured"] },
    { id: 2, src: design2, alt: "Design 2", description: "A movie poster", categories: ["Featured", "Photo Manipulation"] },
    { id: 3, src: design3, alt: "Design 3", description: "Photo manipulation 02", categories: ["Photo Manipulation"] },
    { id: 4, src: design4, alt: "Design 4", description: "A simple Packet Design", categories: ["Others"] },
    { id: 5, src: design5, alt: "Design 5", description: "Some Logo Designs", categories: ["Logo", "Featured"] }, // Now appears in both Logo and Featured
    { id: 6, src: design6, alt: "Design 6", description: "Branding for a Japanese restaurant", categories: ["Featured"] },
    { id: 7, src: design7, alt: "Design 7", description: "Ice cream advertisement Design", categories: ["Others"] },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="designs" className="my-10 py-4 w-10/12 m-auto">
      <h2 className="text-6xl font-bold mb-10 text-right">
        design<span className="dot">.</span>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {["Featured", "Logo", "Photo Manipulation", "Others"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-xs sm:text-base font-semibold transition-all duration-200 ${selectedCategory === category
                ? "blue-bg text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>


      {/* Filtered images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {designImages
          .filter((image) => image.categories.includes(selectedCategory)) // Filter by category
          .map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              <div
                className="absolute inset-0 bg-black bg-opacity-45 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <span className="text-white text-xl font-bold text-center px-4">
                  {image.description}
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* Modal Component */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <button
              className="w-8 h-8 flex justify-center items-end absolute top-0 right-0 mt-2 mr-2 text-white bg-gray-900 rounded-full text-4xl hover:text-gray-300 transition duration-200"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-screen w-auto max-w-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Designs;
