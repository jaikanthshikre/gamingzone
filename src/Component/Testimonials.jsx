import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";


const testimonials = [
  {
    name: "Rohan Malik",
    location: "Delhi, India",
    feedback:
      "GamingZoneBook is the most reliable platform I’ve used for online betting. Fast payouts and amazing support—truly top-notch!",
    Icon: IoPersonCircleSharp ,
  },
  {
    name: "Sonia Verma",
    location: "Mumbai, India",
    feedback:
      "I’ve tried many betting sites, but GamingZoneBook stands out. The live sports betting and instant bonus system are unbeatable.",
    Icon: IoPersonCircleSharp ,
  },
  {
    name: "Arjun Singh",
    location: "Lucknow, India",
    feedback:
      "The platform is smooth, secure, and fun. I’ve recommended GamingZoneBook to all my friends. Trustworthy and engaging!",
    Icon: IoPersonCircleSharp ,
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-12">
          What Our Players Say About GamingZoneBook
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/30 transition duration-300"
            >
              <div className="flex flex-col items-center">
                <t.Icon className="text-4xl text-yellow-400 mb-4" />
                <p className="text-white/80 italic mb-4">“{t.feedback}”</p>
                <h4 className="text-lg font-semibold text-yellow-400">
                  {t.name}
                </h4>
                <span className="text-sm text-gray-400">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
