// MarqueeSection.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
  return (
    <div className="w-full bg-black py-6">
      <Marquee speed={50} gradient={false} pauseOnHover={true} className="text-yellow-500 text-2xl font-semibold">
        <span className="mx-8">🚀 20 Lakh+ Online Players</span>
        <span className="mx-8">🎮 10+ Online IDs</span>
        <span className="mx-8">🎁 10% Bonus on Every Deposit</span>
        <span className="mx-8">🔥 Fast Withdrawals</span>
        <span className="mx-8">🔒 Secure & Trusted Platform</span>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
