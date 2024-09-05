// import React from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';

import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require('./image1.jpg'),
    require('./image2.jpg'),
  ];

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change 3000 to any other value (milliseconds) for faster/slower transitions

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-64 object-cover"
        />
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
