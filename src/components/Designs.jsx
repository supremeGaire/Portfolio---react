import React, { useState } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import hello from "../assets/hello.png";

const Designs = () => {
  const designImages = [
    { id: 1, src: img1, alt: "Design 1", description: "A sleek modern design showcasing minimalist aesthetics." },
    { id: 2, src: img2, alt: "Design 2", description: "Vibrant color palette for an energizing visual experience." },
    { id: 3, src: img3, alt: "Design 3", description: "Sophisticated design with a focus on typography and layout." },
    { id: 4, src: hello, alt: "Design 4", description: "Whimsical and playful design with creative elements." },
    { id: 5, src: img3, alt: "Design 5", description: "Bold and dynamic design capturing attention." },
    { id: 6, src: img2, alt: "Design 6", description: "Elegant design with a touch of luxury and class." },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle opening the modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="designs" className="my-10 py-4 w-10/12 m-auto">
      <h2 className="text-6xl font-bold mb-10 text-right">
        design<span className="dot">.</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {designImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
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
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-screen w-auto max-w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Designs;
