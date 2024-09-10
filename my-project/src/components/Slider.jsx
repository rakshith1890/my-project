import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
    "https://images.shiksha.com/mediadata/images/1555582672php73KVPG_g.jpg",
    "https://content.jdmagicbox.com/v2/comp/rangareddy/i9/040pxx40.xx40.140629164625.a2i9/catalogue/vignana-bharathi-institute-of-technology-ghatkesar-rangareddy-colleges-rhmw6b.jpg",
    "https://vbithyd.ac.in/wp-content/uploads/2014/12/Alumni-Association-2k13-@-VBIT-2.jpg",
    "https://vbithyd.ac.in/wp-content/uploads/2016/05/Association-of-Lady-Entrepreneurs-of-India-ALEAP-1.jpg",
    "https://vbithyd.ac.in/wp-content/uploads/2020/12/vbit-srudent-at-amity.jpg"
  ];

  const [counter, setCounter] = useState(0);

  const slideNext = () => {
    let nextCounter = counter >= images.length - 1 ? 0 : counter + 1;
    setCounter(nextCounter);
  };

  const slidePrev = () => {
    let prevCounter = counter === 0 ? images.length - 1 : counter - 1;
    setCounter(prevCounter);
  };

  const switchImage = (index) => {
    setCounter(index);
  };

  useEffect(() => {
    const autoSlide = setInterval(slideNext, 3000);

    return () => clearInterval(autoSlide); // Cleanup interval on unmount
  }, [counter]);

  return (
    <div className="relative w-[800px] h-[350px] border-4 border-[#ede6d6] shadow-lg mx-auto my-10">
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              counter === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-5">
        <span className="text-2xl text-gray-300 font-bold hover:bg-[#ede6d6] hover:text-gray-900 cursor-pointer" onClick={slidePrev}>
          &#10094;
        </span>
        <span className="text-2xl text-gray-300 font-bold hover:bg-[#ede6d6] hover:text-gray-900 cursor-pointer" onClick={slideNext}>
          &#10095;
        </span>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-gray-400 cursor-pointer ${
              counter === index ? 'bg-gray-800' : ''
            }`}
            onClick={() => switchImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;