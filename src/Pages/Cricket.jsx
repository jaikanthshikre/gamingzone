import React from 'react';
import {
  FaShieldAlt,
  FaBolt,
  FaClock,
  FaHeadset,
  FaChartLine,
  FaCoins,
  FaCheckCircle,
  FaTrophy,
  FaGlobeAsia,
} from 'react-icons/fa';

const Section = ({ id, title, children }) => (
  <section id={id} className="relative">
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

export default function Cricket() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-gray-900">
      {/* top glow divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent mt-17" />

      <header className="relative isolate ">
        {/* soft glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-red-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-gray-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300">
              <FaTrophy className="text-red-400" />
              Cricket
            </p>

            <h1 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Cricket Betting with Gaming Zone Book – Your Ultimate Guide
            </h1>

            <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
              Cricket is more than just a sport in India; it is an emotion that brings millions of fans together. From local matches to
              international tournaments like the IPL, cricket has always been the heartbeat of sports lovers. With the rise of online
              platforms, cricket betting has become a popular way for fans to add extra thrill to every match. If you are looking for a
              safe and trusted platform, Gaming Zone Book is the perfect destination for cricket betting enthusiasts.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 space-y-14">
        {/* Why Popular */}
        <Section id="why" title="Why Cricket Betting is Popular?">
          <ul className="mt-4 grid gap-3">
            <Bullet>Nationwide Craze: Cricket is the most followed sport in India, making betting on it highly popular.</Bullet>
            <Bullet>Tournaments All Year Round: From IPL to World Cup, betting opportunities never stop.</Bullet>
            <Bullet>Live Action: Online cricket betting lets you place bets in real time, adding thrill to every ball.</Bullet>
            <Bullet>Variety of Options: Bettors can explore multiple markets like toss, top scorer, or match winner.</Bullet>
          </ul>
        </Section>

        {/* GZB features */}
        <Section id="with-gzb" title="Cricket Betting with Gaming Zone Book">
          <p className="text-gray-300">
            When it comes to cricket betting, choosing the right platform is key. Gaming Zone Book provides a smooth, transparent, and
            exciting betting experience:
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card icon={FaBolt} title="Easy Registration" desc="Hassle-free sign-up and instant access to your betting account." />
            <Card icon={FaChartLine} title="Live Cricket Odds" desc="Real-time updates and competitive odds for every match." />
            <Card icon={FaCoins} title="Multiple Betting Markets" desc="From toss prediction to player performance, you can bet on everything." />
            <Card icon={FaShieldAlt} title="Safe Transactions" desc="Secure deposits and quick withdrawals with complete transparency." />
            <Card icon={FaHeadset} title="24/7 Customer Support" desc="Get instant help whenever you need." />
            <Card icon={FaClock} title="Fast Experience" desc="Optimized flows so you spend time watching, not waiting." />
          </div>
        </Section>

        {/* Markets */}
        <Section id="markets" title="Popular Cricket Betting Markets">
          <p className="text-gray-300">On Gaming Zone Book, you can enjoy different types of cricket betting options such as:</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon={FaTrophy} title="Match Winner" desc="Bet on which team will win the game." />
            <Card icon={FaTrophy} title="Toss Winner" desc="Predict the toss outcome." />
            <Card icon={FaTrophy} title="Top Batsman / Bowler" desc="Wager on the best-performing player of the match." />
            <Card icon={FaTrophy} title="Runs Over/Under" desc="Bet on total team runs being above or below a set number." />
            <Card icon={FaTrophy} title="Ball-by-Ball Betting" desc="Place bets live for every delivery in the match." />
          </div>
        </Section>

        {/* Tournaments */}
        <Section id="tournaments" title="Major Cricket Tournaments to Bet On">
          <p className="text-gray-300">
            With cricket being a global sport, there are tournaments happening throughout the year. Some of the most exciting events include:
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card icon={FaGlobeAsia} title="Indian Premier League (IPL)" desc="The biggest T20 league." />
            <Card icon={FaGlobeAsia} title="ICC World Cup" desc="The ultimate cricket championship." />
            <Card icon={FaGlobeAsia} title="T20 World Cup" desc="Fast-paced, high-energy cricket." />
            <Card icon={FaGlobeAsia} title="Bilateral Series" desc="International tours between nations." />
            <Card icon={FaGlobeAsia} title="Domestic Leagues" desc="Big Bash League, CPL, and more." />
          </div>
        </Section>

        {/* Tips */}
        <Section id="tips" title="Tips for Successful Cricket Betting">
          <ul className="mt-4 grid gap-3">
            <Bullet>Analyze Team Form: Check recent performances and squad strength.</Bullet>
            <Bullet>Study Pitch &amp; Weather Conditions: These factors heavily affect match outcomes.</Bullet>
            <Bullet>Check Player Records: A batsman’s form or a bowler’s wicket-taking ability can change the game.</Bullet>
            <Bullet>Follow Experts: Read cricket insights and predictions for better decision-making.</Bullet>
            <Bullet>Manage Your Budget: Always bet responsibly and set limits.</Bullet>
          </ul>
        </Section>

        {/* Why choose */}
        <Section id="why-choose" title="Why Choose Gaming Zone Book for Cricket Betting?">
          <ul className="mt-4 grid gap-3">
            <Bullet>Trusted Platform: 100% safe and reliable.</Bullet>
            <Bullet>Competitive Odds: Better returns with higher odds.</Bullet>
            <Bullet>Wide Coverage: All major and minor cricket matches covered.</Bullet>
            <Bullet>User-Friendly Interface: Simple to use for beginners and experienced players.</Bullet>
            <Bullet>Responsible Gaming: Promotes safe and controlled betting.</Bullet>
          </ul>
        </Section>

        {/* Final thoughts */}
        <Section id="final" title="Final Thoughts">
          <p className="text-gray-300">
            Cricket betting is an exciting way to enjoy the game while testing your knowledge and instincts. Whether it’s the high drama of
            the IPL, the glory of the World Cup, or a thrilling T20 match, every moment becomes more exciting with betting. Gaming Zone Book
            provides the perfect platform for fans to experience cricket betting with security, variety, and real-time excitement.
          </p>
          <p className="text-gray-300 mt-4">
            If you’re passionate about cricket and want to take your experience to the next level, join Gaming Zone Book today and start
            your journey in the world of cricket betting.
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
