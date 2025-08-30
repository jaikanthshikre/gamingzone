import React from 'react';
import {
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaGift,
  FaCreditCard,
  FaCheckCircle,
  FaTrophy,
  FaDice,
  FaVideo,
  FaCoins,
} from 'react-icons/fa';

const Section = ({ id, title, children }) => (
  <section id={id} className="relative scroll-mt-24">
    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-300 to-red-500">
        {title}
      </span>
    </h2>
    <div className="mt-4 text-gray-200 leading-relaxed">{children}</div>
  </section>
);

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <FaCheckCircle className="mt-1 shrink-0 text-red-400" />
    <span className="text-gray-200">{children}</span>
  </li>
);

const Card = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-red-500/20 bg-gray-800/70 p-5 shadow-lg shadow-black/10 hover:shadow-red-900/20 transition">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-gradient-to-br from-red-500/20 to-gray-900/40 p-2.5 border border-red-500/30">
        <Icon className="text-red-400 text-xl" />
      </div>
      <h3 className="text-white font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-gray-300 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function Casino() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-gray-900 mt-17">
      {/* top glow divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />

      <header className="relative isolate">
        {/* soft glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-red-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gray-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">
              <FaDice className="text-red-400" />
              Casino
            </p>

            <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Casino Betting with Gaming Zone Book – Your Ultimate Experience
            </h1>

            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Casino games have always been a symbol of entertainment, thrill, and big rewards. With the rise of online platforms, players
              can now enjoy the excitement of casino betting from the comfort of their homes. From slot machines to live dealer games,
              online casinos bring the glamour of Las Vegas directly to your screen. If you are looking for a secure and exciting platform,
              Gaming Zone Book is the perfect choice for casino betting.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 space-y-14">
        {/* Why Popular */}
        <Section id="why" title="Why Casino Betting is So Popular?">
          <p className="text-gray-300">
            The charm of casinos lies in their mix of luck, strategy, and instant rewards. Some key reasons for the popularity of online
            casino betting include:
          </p>
          <ul className="mt-4 grid gap-3">
            <Bullet>Wide Variety of Games: From slots and poker to roulette and blackjack, casino betting has something for everyone.</Bullet>
            <Bullet>Easy Access: Play anytime, anywhere without visiting a physical casino.</Bullet>
            <Bullet>Live Dealer Experience: Enjoy real-time games with professional dealers streaming live.</Bullet>
            <Bullet>Big Jackpots: Casino betting offers huge winnings with progressive jackpots and bonuses.</Bullet>
            <Bullet>Entertainment Value: Apart from winning money, casino games are fun and engaging.</Bullet>
          </ul>
        </Section>

        {/* Platform features */}
        <Section id="with-gzb" title="Casino Betting with Gaming Zone Book">
          <p className="text-gray-300">
            Choosing a trusted platform is crucial for safe and enjoyable betting. Gaming Zone Book ensures a smooth and secure casino
            betting experience with:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card icon={FaTrophy} title="Multiple Game Options" desc="Slots, roulette, poker, blackjack, baccarat, and more." />
            <Card icon={FaVideo} title="Live Casino" desc="Play with real dealers through high-quality video streaming." />
            <Card icon={FaBolt} title="User-Friendly Platform" desc="Simple design for beginners as well as experienced players." />
            <Card icon={FaCreditCard} title="Secure Payments" desc="Fast deposits and withdrawals with complete safety." />
            <Card icon={FaHeadset} title="24/7 Support" desc="Professional customer service available round the clock." />
          </div>
        </Section>

        {/* Popular Games */}
        <Section id="games" title="Popular Casino Games You Can Bet On">
          <p className="text-gray-300">At Gaming Zone Book, players can enjoy different types of casino betting games such as:</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon={FaCoins} title="Online Slots" desc="Colorful and exciting games with jackpots and free spins." />
            <Card icon={FaDice} title="Roulette" desc="Bet on numbers, colors, or odds/evens for thrilling wins." />
            <Card icon={FaShieldAlt} title="Blackjack" desc="Use strategy to beat the dealer and reach 21." />
            <Card icon={FaTrophy} title="Poker" desc="Test your skills in Texas Hold’em, Omaha, and more." />
            <Card icon={FaGift} title="Baccarat" desc="A simple yet exciting card game perfect for beginners." />
          </div>
        </Section>

        {/* Live Casino Experience */}
        <Section id="live" title="Live Casino Betting Experience">
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card icon={FaVideo} title="Real Dealers" desc="Play with real dealers in real-time." />
            <Card icon={FaHeadset} title="Interact & Socialize" desc="Chat with dealers and other players while betting." />
            <Card icon={FaTrophy} title="Authentic Atmosphere" desc="Enjoy the feel of a real casino without leaving your home." />
            <Card icon={FaShieldAlt} title="Fair & Transparent" desc="Advanced tech ensures integrity and clear outcomes." />
          </div>
        </Section>

        {/* Tips */}
        <Section id="tips" title="Tips for Successful Casino Betting">
          <ul className="mt-4 grid gap-3">
            <Bullet>Know the Rules: Understand the game before placing real bets.</Bullet>
            <Bullet>Start Small: Begin with smaller bets and gradually increase.</Bullet>
            <Bullet>Use Bonuses: Take advantage of welcome offers and promotions.</Bullet>
            <Bullet>Set a Budget: Always play responsibly and avoid chasing losses.</Bullet>
            <Bullet>Practice First: Try free demo versions before real betting.</Bullet>
          </ul>
        </Section>

        {/* Why choose */}
        <Section id="why-choose" title="Why Choose Gaming Zone Book for Casino Betting?">
          <ul className="mt-4 grid gap-3">
            <Bullet>Trusted and Reliable Platform – Safe and transparent gaming environment.</Bullet>
            <Bullet>Wide Range of Games – From classic casino games to modern slots.</Bullet>
            <Bullet>Competitive Odds and Bonuses – More chances to win big.</Bullet>
            <Bullet>Live Casino Experience – Real dealers and authentic gameplay.</Bullet>
            <Bullet>Responsible Gaming Policy – Encourages safe and enjoyable betting.</Bullet>
          </ul>
        </Section>

        {/* Final thoughts */}
        <Section id="final" title="Final Thoughts">
          <p className="text-gray-300">
            Casino betting is all about excitement, entertainment, and the chance to win big. Whether you love spinning the roulette wheel,
            testing your poker skills, or enjoying the thrill of slots, Gaming Zone Book offers the best online casino betting experience.
            With secure payments, live dealer games, and endless options, you can enjoy the glamour of a casino anytime, anywhere.
          </p>
          <p className="text-gray-300 mt-4">
            If you’re ready to explore the world of casino betting, join Gaming Zone Book today and experience non-stop entertainment with
            trusted and secure gameplay.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.link/iwantgamingzoneid"
              className="inline-flex items-center gap-2 rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-900/20 hover:scale-[1.02] transition"
            >
           Get ID Now
            </a>
           
          </div>
        </Section>
      </div>

      {/* bottom glow divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
      <footer className="text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} Gaming Zone Book • 18+ Only • Bet responsibly
      </footer>
    </main>
  );
}
