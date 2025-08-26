import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounterSection = () => {
  const [players, setPlayers] = useState(0);
  const [ids, setIds] = useState(0);
  const [bonus, setBonus] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });

    // Counter Logic
    const playerTarget = 2000000;
    const idsTarget = 10;
    const bonusTarget = 10;

    const playerInterval = setInterval(() => {
      setPlayers((prev) => {
        if (prev < playerTarget) return prev + 5000;
        clearInterval(playerInterval);
        return playerTarget;
      });
    }, 1);

    const idsInterval = setInterval(() => {
      setIds((prev) => {
        if (prev < idsTarget) return prev + 1;
        clearInterval(idsInterval);
        return idsTarget;
      });
    }, 150);

    const bonusInterval = setInterval(() => {
      setBonus((prev) => {
        if (prev < bonusTarget) return prev + 1;
        clearInterval(bonusInterval);
        return bonusTarget;
      });
    }, 150);

    return () => {
      clearInterval(playerInterval);
      clearInterval(idsInterval);
      clearInterval(bonusInterval);
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 text-white py-15 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        
        {/* Card 1 */}
        <div
          data-aos="zoom-in"
          className="bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
        >
          <div className="text-6xl mb-4 animate-pulse">🎮</div>
          <h2 className="text-5xl font-extrabold text-yellow-400">
            {players.toLocaleString()}+
          </h2>
          <p className="mt-3 text-lg font-medium">Online Players</p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="zoom-in"
          className="bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
        >
          <div className="text-6xl mb-4 animate-pulse">🆔</div>
          <h2 className="text-5xl font-extrabold text-yellow-400">
            {ids}+
          </h2>
          <p className="mt-3 text-lg font-medium">Active Online IDs</p>
        </div>

        {/* Card 3 */}
        <div
          data-aos="zoom-in"
          className="bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
        >
          <div className="text-6xl mb-4 animate-pulse">🎁</div>
          <h2 className="text-5xl font-extrabold text-yellow-400">
            {bonus}%
          </h2>
          <p className="mt-3 text-lg font-medium">Bonus on Every Deposit</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
