import React from "react";
import {
  FaTrophy,
  FaLock,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";
import imageone from "../assets/images/bettingimage.jpg"; // Replace with your own image

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaTrophy className="text-white text-2xl" />,
      title: "Live Sports Betting",
      desc: "Bet on your favorite sports in real-time with dynamic odds and instant payouts.",
      bg: "bg-green-500",
    },
    {
      icon: <FaLock className="text-white text-2xl" />,
      title: "Secure Platform",
      desc: "Your data and transactions are protected with advanced encryption and safety protocols.",
      bg: "bg-slate-700",
    },
    {
      icon: <FaMoneyBillWave className="text-white text-2xl" />,
      title: "Fast Payouts",
      desc: "Withdraw your winnings quickly and hassle-free, straight to your account.",
      bg: "bg-teal-600",
    },
    {
      icon: <FaHeadset className="text-white text-2xl" />,
      title: "24/7 Support",
      desc: "Get assistance anytime via live chat, email, or phone—day or night.",
      bg: "bg-red-400",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-12 text-white">
          Why Choose <span className="text-yellow-500">Gaming Zone Book</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left features */}
          <div className="hidden lg:flex flex-col gap-12 w-1/3">
            {features.slice(0, 2).map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center mx-auto rounded-full ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mt-4 text-yellow-400">
                  {item.title}
                </h4>
                <p className="text-sm text-white mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="hidden md:block w-70 h-70 rounded-xl overflow-hidden mx-auto shadow-2xl">
            <img
              src={imageone}
              alt="Gaming zone book"
              className="w-full h-80 object-cover bg-gray-200"
            />
          </div>

          {/* Right features */}
          <div className="hidden lg:flex flex-col gap-12 w-1/3">
            {features.slice(2).map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className={`w-16 h-16 flex items-center justify-center mx-auto rounded-full ${item.bg}`}
                >
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mt-4 text-yellow-400">
                  {item.title}
                </h4>
                <p className="text-sm text-white mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden w-full flex flex-col items-center gap-8">
            <div className="grid grid-cols-2 gap-8 w-full">
              {features.slice(0, 2).map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center mx-auto rounded-full ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mt-3 text-yellow-400">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="w-60 h-60 rounded-full overflow-hidden shadow-xl shadow-gray-400">
              <img
                src={imageone}
                alt="BetMaster Pro"
                className="w-full h-70 object-cover bg-gray-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 w-full">
              {features.slice(2).map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center mx-auto rounded-full ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mt-3 text-yellow-400">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
