import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import imageone from "../assets/images/1.webp"
import imagetwo from "../assets/images/2.webp"
import imagethree from "../assets/images/3.png"
import imagefour from "../assets/images/4.webp"

const images = [imageone, imagetwo, imagethree, imagefour];

const steps = [
  {
    icon: '🌐',
    title: 'Visit Our Site',
    desc: 'Go to our official website using any browser to begin your registration.',
    color: 'text-blue-600',
  },
  {
    icon: '📝',
    title: 'Register an Account',
    desc: 'Click the register button and provide your details to create an account.',
    color: 'text-purple-400',
  },
  {
    icon: '✅',
    title: 'Verify & Sign Up',
    desc: 'Verify your information and complete the signup to activate your profile.',
    color: 'text-blue-400',
  },
  {
    icon: '🎯',
    title: 'Get Your Online ID',
    desc: 'Receive your unique online betting ID and start playing instantly.',
    color: 'text-cyan-400',
  },
];

const BettingRegistrationSteps = () => {
  useEffect(() => {
      // Initialize AOS
      AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white py-13 px-4 md:px-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 uppercase text-yellow-400">
        How to Register on Our Betting Platform
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line for desktop only */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center mb-12 relative w-full`}
          >
            {/* Icon on timeline (desktop only) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`text-4xl ${step.color}`}>{step.icon}</div>
            </div>

            {/* Text first on mobile */}
            <div className="w-full md:w-1/2 p-6 text-center md:text-left">
              <div className={`text-2xl font-bold ${step.color}`}> {step.title}</div>
              <p className="text-white/80 mt-2">{step.desc}</p>
            </div>

            {/* Image second on mobile */}
            <div className="w-full md:w-1/2 p-4 flex justify-center" data-aos="zoom-in">
              <img
                src={images[index]}
                alt="Step"
                className="rounded-lg w-full md:w-auto md:h-70 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BettingRegistrationSteps;
