import React, { useState, useEffect } from 'react';
import imageone from "../assets/images/horror.webp";

const slides = [
  {
    id: 1,
    bg: imageone,
  },
  {
    id: 2,
    bg: imageone,
  },
  {
    id: 3,
    bg: imageone,
  },
];

const whatsappLink =
  "https://wa.link/iwantgamingzoneid";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[27vh] md:h-[90vh] overflow-hidden ">
      {slides.map((slide, index) => (
        <a
          key={slide.id}
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="w-full h-60 md:h-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Optional slide content */}
          </div>
        </a>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
