import React from 'react';
import {
  FaShieldAlt,
  FaBolt,
  FaHeadset,
  FaChartLine,
  FaCoins,
  FaCheckCircle,
  FaTrophy,
  FaFutbol,
  FaGlobe,
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

export default function Football() {
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
              <FaFutbol className="text-red-400" />
              Football
            </p>

            <h1 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Football Betting with Gaming Zone Book – The Complete Guide
            </h1>

            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Football, also called the “beautiful game,” is the most followed sport in the world. With billions of fans across countries
              and countless tournaments happening every year, football has become a global phenomenon. Adding to the thrill, football
              betting allows fans to engage with the game in an exciting and rewarding way. If you’re looking for a secure and reliable
              platform, Gaming Zone Book is the perfect choice for football betting lovers.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 space-y-14">
        {/* Why Popular */}
        <Section id="why" title="Why Football Betting is So Popular?">
          <p className="text-gray-300">
            Football’s universal appeal makes it one of the top sports for betting worldwide. Some key reasons are:
          </p>
          <ul className="mt-4 grid gap-3">
            <Bullet>Global Reach: From the FIFA World Cup to the English Premier League, football has fans everywhere.</Bullet>
            <Bullet>Regular Matches: Leagues, friendlies, and cups create year-round betting opportunities.</Bullet>
            <Bullet>Multiple Betting Markets: Far more than just match results.</Bullet>
            <Bullet>Live Betting Thrill: In-play betting makes every pass, corner, and goal more exciting.</Bullet>
          </ul>
        </Section>

        {/* Platform features */}
        <Section id="with-gzb" title="Football Betting with Gaming Zone Book">
          <p className="text-gray-300">
            Choosing a trusted betting platform ensures safety and better chances of winning. Gaming Zone Book provides football fans with a
            seamless and enjoyable experience:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card icon={FaChartLine} title="Real-Time Odds" desc="Get competitive and updated odds for every match." />
            <Card icon={FaCoins} title="Variety of Markets" desc="From goals to player stats, bet on multiple aspects of the game." />
            <Card icon={FaBolt} title="Beginner-Friendly Design" desc="Easy navigation for both new and experienced users." />
            <Card icon={FaShieldAlt} title="Safe Transactions" desc="Secure deposits and withdrawals with full transparency." />
            <Card icon={FaHeadset} title="24/7 Support" desc="Assistance whenever you need it." />
          </div>
        </Section>

        {/* Markets */}
        <Section id="markets" title="Popular Football Betting Markets">
          <p className="text-gray-300">At Gaming Zone Book, football fans can explore exciting betting options, including:</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon={FaTrophy} title="Match Result (1X2)" desc="Home win, away win, or draw." />
            <Card icon={FaTrophy} title="Both Teams to Score (BTTS)" desc="Back both teams to score or not." />
            <Card icon={FaTrophy} title="Over/Under Goals" desc="Total goals line for the match." />
            <Card icon={FaTrophy} title="Correct Score" desc="Predict the exact scoreline." />
            <Card icon={FaTrophy} title="Player Specials" desc="Back a player to score, assist, or get a card." />
            <Card icon={FaTrophy} title="Live In-Play Betting" desc="Place bets as the match unfolds." />
          </div>
        </Section>

        {/* Tournaments */}
        <Section id="tournaments" title="Major Football Tournaments for Betting">
          <p className="text-gray-300">
            Football betting gives fans opportunities all year round. Some of the most exciting competitions include:
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon={FaGlobe} title="FIFA World Cup" desc="The biggest football event, held every four years." />
            <Card icon={FaGlobe} title="UEFA Champions League" desc="Elite European club competition." />
            <Card icon={FaGlobe} title="English Premier League (EPL)" desc="The most-watched league globally." />
            <Card icon={FaGlobe} title="La Liga, Serie A, Bundesliga, Ligue 1" desc="Top domestic leagues with global fan bases." />
            <Card icon={FaGlobe} title="UEFA Euro & Copa América" desc="International tournaments filled with drama and passion." />
          </div>
        </Section>

        {/* Tips */}
        <Section id="tips" title="Tips for Successful Football Betting">
          <ul className="mt-4 grid gap-3">
            <Bullet>Analyze Team Form: Check recent results and performances.</Bullet>
            <Bullet>Study Head-to-Head Records: Past meetings can hint at outcomes.</Bullet>
            <Bullet>Follow Team News: Injuries, suspensions, and lineup changes matter.</Bullet>
            <Bullet>Consider Home/Away Records: Many teams perform differently on the road.</Bullet>
            <Bullet>Set a Budget: Always bet responsibly; avoid chasing losses.</Bullet>
          </ul>
        </Section>

        {/* Why choose */}
        <Section id="why-choose" title="Why Choose Gaming Zone Book for Football Betting?">
          <ul className="mt-4 grid gap-3">
            <Bullet>Trusted Platform: 100% safe and reliable betting environment.</Bullet>
            <Bullet>Best Odds: Competitive odds ensuring higher returns.</Bullet>
            <Bullet>Wide Match Coverage: From local leagues to global tournaments.</Bullet>
            <Bullet>Beginner-Friendly Experience: Easy for anyone to start betting.</Bullet>
            <Bullet>Responsible Gaming Policy: Encourages safe and enjoyable betting.</Bullet>
          </ul>
        </Section>

        {/* Final thoughts */}
        <Section id="final" title="Final Thoughts">
          <p className="text-gray-300">
            Football betting combines skill, analysis, and passion. Every goal, pass, and penalty brings new excitement, and betting makes
            the experience even more thrilling. Whether it’s the FIFA World Cup final or a weekend EPL clash, Gaming Zone Book provides
            everything you need for safe, secure, and enjoyable football betting.
          </p>
          <p className="text-gray-300 mt-4">
            If you’re a football fan looking to take your love for the game to the next level, join Gaming Zone Book today and explore the
            exciting world of football betting.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-600 via-red-500 to-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-900/20 hover:scale-[1.02] transition"
            >
              Get Started
            </a>
            <a
              href="#responsible"
              className="inline-flex items-center gap-2 rounded-2xl border border-red-500/30 bg-gray-800/70 px-5 py-3 font-semibold text-red-200 hover:text-white hover:border-red-400 transition"
            >
              Responsible Gaming
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
