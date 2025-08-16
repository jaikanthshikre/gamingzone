import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageone from "../assets/images/gameone.webp"
import imagetwo from "../assets/images/gametwo.webp"
import imagethree from "../assets/images/gamethree.webp"
import imagefour from "../assets/images/gamefour.webp"
import imagefive from "../assets/images/gamefive.webp"
import imagesix from "../assets/images/gamesix.webp"
import imageseven from "../assets/images/gameseven.webp"
import imageeight from "../assets/images/gameeight.webp"
const cardsData = [
  {
    img: imageone,
    title: 'Cricket',
    desc: 'This is the description for card 1.',
  },
  {
    img: imagetwo,
    title: 'Poker',
    desc: 'This is the description for card 2.',
  },
  {
    img: imagethree,
    title: 'Football',
    desc: 'This is the description for card 3.',
  },
  {
    img:imagefour,
    title: 'Tennis',
    desc: 'This is the description for card 4.',
  },
  {
    img: imagefive,
    title: 'Casino',
    desc: 'This is the description for card 5.',
  },
  {
    img: imagesix,
    title: 'Lucky 7',
    desc: 'This is the description for card 6.',
  },
  {
    img:imageseven,
    title: 'Dragon Tiger',
    desc: 'This is the description for card 7.',
  },
  {
    img: imageeight,
    title: 'Teen Patti',
    desc: 'This is the description for card 8.',
  },
];

const CardsGrid = () => {
   useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <>
    <div className="bg-gray-900 text-white py-2  px-4">
        <h1 className='text-yellow-400 font-bold text-3xl text-center py-8'>Games We Provide on Gaming Zone Book </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"data-aos="zoom-in">
            <img src={card.img} alt={card.title} className="w-full md:h-50 md:object-cover" />
            <div className="p-4">
              <h1 className="text-xl font-bold mb-2">{card.title}</h1>
              <p className="text-sm text-gray-300 mb-4">{card.desc}</p>
             <a
  href="https://wa.me/919818462079?text=Hi%2C%20I%20want%20to%20get%20an%20online%20betting%20ID%20on%20GamingZoneBook."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition inline-block"
>
  GET ID NOW
</a>

            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CardsGrid;
