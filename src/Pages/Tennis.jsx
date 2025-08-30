import React from 'react';
import {
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaChartLine,
  FaCoins,
  FaCheckCircle,
  FaTrophy,
  FaGlobeAsia,
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

export default function Tennis() {
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
              <FaTrophy className="text-red-400" />
              Tennis
            </p>

            <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Tennis Betting with Gaming Zone Book – A Complete Guide
            </h1>

            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Tennis is one of the most exciting and fast-paced sports in the world. From powerful serves to intense rallies, every point
              in tennis keeps fans on the edge of their seats. With the growing popularity of online betting, tennis betting has become a
              favorite choice for sports lovers. If you’re looking for a safe and trusted platform, Gaming Zone Book is the ultimate
              destination for tennis betting enthusiasts.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 space-y-14">
        {/* Why Popular */}
        <Section id="why" title="Why Tennis Betting is Popular?">
          <p className="text-gray-300">
            Tennis is different from team sports like cricket or football because it is usually played one-on-one. This makes the game more
            predictable and easier to analyze. Some reasons why tennis betting is loved worldwide are:
          </p>
          <ul className="mt-4 grid gap-3">
            <Bullet>Year-Round Tournaments: Unlike seasonal sports, tennis events take place almost throughout the year.</Bullet>
            <Bullet>Individual Performances: Since results depend on players, bettors can analyze form and stats easily.</Bullet>
            <Bullet>Global Coverage: Grand Slam tournaments and ATP/WTA tours offer constant betting opportunities.</Bullet>
            <Bullet>Live Betting Thrill: Every point can change the game, making in-play betting extremely exciting.</Bullet>
          </ul>
        </Section>

        {/* GZB features */}
        <Section id="with-gzb" title="Tennis Betting with Gaming Zone Book">
          <p className="text-gray-300">
            For a safe and smooth betting experience, choosing the right platform is essential. Gaming Zone Book ensures that players enjoy
            reliable, transparent, and fun betting:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card icon={FaChartLine} title="Real-Time Odds" desc="Get updated odds for every game, set, and match." />
            <Card icon={FaCoins} title="Multiple Betting Options" desc="From match winner to point-by-point betting." />
            <Card icon={FaBolt} title="User-Friendly Platform" desc="Designed for both beginners and experienced bettors." />
            <Card icon={FaShieldAlt} title="Secure Transactions" desc="Fast deposits and withdrawals with complete safety." />
            <Card icon={FaHeadset} title="24/7 Customer Support" desc="Quick assistance whenever you need it." />
          </div>
        </Section>

        {/* Markets */}
        <Section id="markets" title="Popular Tennis Betting Markets">
          <p className="text-gray-300">With Gaming Zone Book, tennis fans can explore a wide range of betting markets:</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon={FaTrophy} title="Match Winner" desc="Predict which player will win the match." />
            <Card icon={FaTrophy} title="Set Betting" desc="Bet on the exact scoreline of sets, like 2–1 or 3–0." />
            <Card icon={FaTrophy} title="Over/Under Games" desc="Wager on the total number of games being higher or lower." />
            <Card icon={FaTrophy} title="Handicap Betting" desc="Balance the odds by giving a virtual lead or disadvantage." />
            <Card icon={FaTrophy} title="In-Play Betting" desc="Place bets point by point as the game unfolds." />
          </div>
        </Section>

        {/* Tournaments */}
        <Section id="tournaments" title="Major Tennis Tournaments for Betting">
          <p className="text-gray-300">
            Tennis provides year-round opportunities for betting across different formats and competitions. Some of the most popular include:
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon={FaGlobeAsia} title="Grand Slams" desc="Australian Open, French Open, Wimbledon, US Open." />
            <Card icon={FaGlobeAsia} title="ATP Tour" desc="Men’s professional tennis tournaments." />
            <Card icon={FaGlobeAsia} title="WTA Tour" desc="Women’s international tennis matches." />
            <Card icon={FaGlobeAsia} title="Davis Cup & Laver Cup" desc="Exciting team-based tennis competitions." />
          </div>
        </Section>

        {/* Tips */}
        <Section id="tips" title="Tips for Successful Tennis Betting">
          <ul className="mt-4 grid gap-3">
            <Bullet>Study Player Form: Recent results and consistency matter a lot.</Bullet>
            <Bullet>Surface Advantage: Some players are better on clay, while others dominate grass or hard courts.</Bullet>
            <Bullet>Head-to-Head Records: Past encounters between players can guide betting choices.</Bullet>
            <Bullet>Check Match Conditions: Weather and court speed can influence performance.</Bullet>
            <Bullet>Bankroll Management: Always set a budget and stick to it for responsible betting.</Bullet>
          </ul>
        </Section>

        {/* Why choose */}
        <Section id="why-choose" title="Why Choose Gaming Zone Book for Tennis Betting?">
          <ul className="mt-4 grid gap-3">
            <Bullet>Trusted and Secure Service – 100% reliable platform for all users.</Bullet>
            <Bullet>Best Betting Odds – Enjoy competitive returns on every match.</Bullet>
            <Bullet>Wide Tournament Coverage – From ATP tours to Grand Slams, all events are available.</Bullet>
            <Bullet>Beginner-Friendly Interface – Easy to use even for first-time bettors.</Bullet>
            <Bullet>Responsible Gaming Policy – Promotes safe and balanced betting habits.</Bullet>
          </ul>
        </Section>

        {/* Final thoughts */}
        <Section id="final" title="Final Thoughts">
          <p className="text-gray-300">
            Tennis betting is exciting because the game is unpredictable and filled with thrilling moments. Whether it’s a Grand Slam final,
            an ATP clash, or a WTA battle, betting adds an extra layer of excitement. With Gaming Zone Book, you get access to secure
            betting, competitive odds, and a wide range of markets to explore.
          </p>
          <p className="text-gray-300 mt-4">
            If you love tennis and want to turn your knowledge of the game into winning opportunities, sign up with Gaming Zone Book today
            and enjoy the best of tennis betting.
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
