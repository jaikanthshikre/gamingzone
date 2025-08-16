import React from 'react';
import Marquee from 'react-fast-marquee';
import imageone from '../assets/images/pone.png';
import imagetwo from '../assets/images/ptwo.png';
import imagethree from '../assets/images/pthree.png';
import imagefour from '../assets/images/pfour.png';
import imagefive from '../assets/images/pfive.png';
import imagesix from '../assets/images/psix.png';
import imageseven from '../assets/images/pseven.png'
export const Payment = () => {
  const images = [imageone, imagetwo, imagethree, imagefour, imagefive, imagesix,imageseven];

  return (
    <div className="bg-gray-900 text-white py-12 px-5">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
          Payments Method Accepted
        </h1>

        <Marquee gradient={false} speed={40} pauseOnHover={true} className="gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-28 h-16 md:w-35 md:h-20 flex items-center justify-center px-3 py-2 bg-white rounded-lg shadow-md mx-5"
            >
              <img
                src={img}
                alt={`Payment ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
