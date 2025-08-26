'use client'

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaGamepad, FaTrophy, FaFire, FaGift, FaStar, FaBars, FaTimes } from 'react-icons/fa';


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu if viewport grows past sm
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const offers = [
    { icon: FaFire, text: "🔥 GET 500% WELCOME BONUS", color: "text-orange-400" },
    { icon: FaTrophy, text: "🏆 WIN BIG - DAILY JACKPOTS AVAILABLE", color: "text-yellow-400" },
    { icon: FaGift, text: "🎁 FREE ₹1000 ON FIRST DEPOSIT", color: "text-green-400" },
    { icon: FaStar, text: "⭐ VIP MEMBERSHIP - EXCLUSIVE REWARDS", color: "text-purple-400" },
    { icon: FaFire, text: "🎯 INSTANT WITHDRAWALS - 24/7 SUPPORT", color: "text-blue-400" },
    { icon: FaTrophy, text: "💎 PREMIUM BETTING IDS AVAILABLE NOW", color: "text-pink-400" },
  ];

  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      className="hover:text-cyan-400 transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Offers Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 border-b border-red-500/30 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...offers, ...offers, ...offers].map((offer, idx) => (
            <div key={idx} className="flex items-center mx-8 text-sm font-semibold">
              <offer.icon className={`mr-2 ${offer.color}`} />
              <span className="text-white">{offer.text}</span>
              <div className="ml-4 flex">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-yellow-400 rounded-full mx-0.5 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50'
            : 'bg-gradient-to-r from-gray-900 via-red-900 to-gray-900'
        }`}
      >
        {/* Decorative particles (hidden on mobile) */}
        <div className="absolute inset-0 overflow-hidden hidden sm:block">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Glowing bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-60" />

        <div className="relative flex items-center justify-between py-2 sm:py-4 md:px-9 px-2">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer mb-3 sm:mb-0">
            <div className="relative mr-3 sm:mr-4">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 p-2 sm:p-3 rounded-full border border-cyan-400/50">
                <FaGamepad className="text-cyan-400 text-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div>
              <NavLink href="/">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 font-bold sm:text-2xl text-lg uppercase tracking-wider drop-shadow-lg">
                GamingZoneBook
              </h1>
              <p className="text-gray-400 text-xs uppercase tracking-widest mt-0.5 font-medium">
                Premium Gaming Platform
              </p></NavLink>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex gap-6 text-sm font-semibold text-gray-300 uppercase tracking-wide">
            <NavLink href="cricket">Cricket</NavLink>
            <NavLink href="casino">Casino</NavLink>
            <NavLink href="tennis">Tennis</NavLink>
            <NavLink href="football">Football</NavLink>
          </div>

          {/* Right cluster: WhatsApp + Mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* WhatsApp CTA */}
            <div className="relative">
              <a
                href="https://wa.me/919818462079?text=Hi%2C%20I%20want%20to%20get%20an%20online%20betting%20ID%20on%20GamingZoneBook."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative flex items-center gap-2 sm:gap-3 px-2 sm:px-2 py-2 sm:py-3 rounded-2xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 text-white font-bold text-xs sm:text-sm transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/50 border border-green-400/50">
                  <FaWhatsapp className={`text-xl transition-all duration-300 ${isHovered ? 'animate-bounce scale-110' : ''}`} />
                  <div className="flex leading-tight">
                    <span className="uppercase tracking-wide">GET ID</span>
                  </div>
                </div>
                {/* Glow layers */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 opacity-20 blur-lg scale-110 group-hover:opacity-40 transition-all duration-300"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-300 opacity-10 blur-xl scale-125 group-hover:opacity-30 transition-all duration-300"></div>
              </a>
              {/* Floating particles (hidden on mobile) */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping hidden sm:block"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-400 rounded-full animate-ping delay-300 hidden sm:block"></div>
              <div className="absolute top-1/2 -left-5 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500 hidden sm:block"></div>
            </div>

            {/* Mobile hamburger (sm:hidden) */}
            <button
              type="button"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-xl border border-gray-700/60 bg-gray-800/70 text-gray-200 hover:text-white hover:border-red-500/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-3 pb-3 pt-1">
            <div className="rounded-2xl border border-gray-700/60 bg-gray-800/70 backdrop-blur-md shadow-xl">
              <nav className="grid gap-1 p-2 text-sm font-semibold text-gray-200 uppercase tracking-wide">
                <a
                  href="#cricket"
                  className="px-3 py-2 rounded-lg hover:bg-gray-700/60 hover:text-cyan-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Cricket
                </a>
                <a
                  href="#casino"
                  className="px-3 py-2 rounded-lg hover:bg-gray-700/60 hover:text-cyan-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Casino
                </a>
                <a
                  href="#tennis"
                  className="px-3 py-2 rounded-lg hover:bg-gray-700/60 hover:text-cyan-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Tennis
                </a>
                <a
                  href="#football"
                  className="px-3 py-2 rounded-lg hover:bg-gray-700/60 hover:text-cyan-400 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Football
                </a>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};
