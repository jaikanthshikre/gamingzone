import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-yellow-400 text-xl font-bold mb-4">GamingZoneBook</h3>
          <p className="text-sm text-white/80">
            Your trusted destination for online betting, sports wagering, and casino games. Play responsibly and enjoy the thrill.
          </p>
          <div className="flex space-x-4 mt-4">
           <a
  href="https://wa.link/iwantgamingzoneid"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition inline-block"
>
  GET ID NOW
</a>

          </div>
        </div>

        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">Home</a></li>
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">Sports Betting</a></li>
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">Casino</a></li>
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">Promotions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">Terms & Conditions</a></li>
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">Responsible Gambling</a></li>
            <li><a href="https://wa.link/iwantgamingzoneid" className="hover:text-yellow-400">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Responsible Gambling</h4>
          <p className="text-sm text-white/80">
            We encourage responsible gaming. Set limits, play for fun, and reach out for help if you need support.
          </p>
          <p className="text-sm text-white/50 mt-4">© 2024 GamingZoneBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
