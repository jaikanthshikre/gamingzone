import React from 'react';
import imageone from "../assets/images/contactimg.png";

export const Contact = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container flex mx-auto flex-col md:flex-row items-center gap-8 max-w-6xl py-12 px-6">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-yellow-400 text-4xl font-bold leading-tight">
            We’re Always Here to Assist You
          </h1>
          <p className="text-white/80 text-lg">
            Whether you're having trouble accessing your account, need help with payments,
            or want to know more about responsible gambling—we're just a message away.
          </p>
          <ul className="text-white/70 space-y-2">
            <li>✅ 24/7 Live Chat Support</li>
            <li>✅ Fast Email Assistance</li>
            <li>✅ Secure Account Verification Help</li>
            <li>✅ Withdrawal & Bonus Queries</li>
          </ul>
          <a
  href="https://wa.me/919818462079?text=Hi%2C%20I%20want%20to%20get%20an%20online%20betting%20ID%20on%20GamingZoneBook."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition inline-block"
>
  Contact Support
</a>

        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img src={imageone} alt="Contact Support" className="w-full max-h-[400px] object-contain" />
        </div>
      </div>
    </div>
  );
};
