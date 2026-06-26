const projects = [
  {
    title: "Agile B Darija",
    tech: "Next.js, React, Tailwind CSS, Python",
    desc: "Community platform promoting agile practices in Morocco. Volunteer management, event/training sections, online donations (CIH & PayPal), secure admin dashboard, and a Python certificate generator.",
  },
  {
    title: "Trading-Factory",
    tech: "Python, Alpaca API, Backtrader, ccxt",
    desc: "Modular algorithmic trading system implementing moving-average crossover strategies. Extended with vectorbt, TA-Lib, QuantStats for backtesting and performance analysis.",
  },
  {
    title: "Marketing AI Agent",
    tech: "Python, AI, CRM, Lead Generation",
    desc: "Autonomous marketing agent with modules for lead generation, CRM, content publishing, and analytics. Automated multi-platform engagement and image caching pipeline.",
  },
  {
    title: "Onirique-Ride",
    tech: "MERN Stack, Stripe API",
    desc: "Luxury chauffeur-service ride-hailing app with in-app booking, trip history, and payment processing for a US-based client.",
  },
  {
    title: "Online Bookstore",
    tech: "Angular, Java Spring Boot, Stripe",
    desc: "Full-stack e-commerce bookstore with JWT authentication, REST APIs, Stripe credit card payments, and input validation.",
  },
  {
    title: "LinkedIn Job Bot",
    tech: "Python, Selenium, Playwright",
    desc: "Automated LinkedIn Easy Apply system with stealth/human-like behavior patterns to avoid detection.",
  },
  {
    title: "Bassma Sweets",
    tech: "Next.js, Tailwind CSS",
    desc: "Modern e-commerce site for a local sweets shop with responsive design.",
  },
  {
    title: "Report Generator",
    tech: ".NET, Angular",
    desc: "Automated technical report writing system for Dekra control offices.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-accent mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-accent/50 hover:bg-zinc-900 transition-all"
            >
              <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-xs text-accent/70 mt-1 font-mono">{p.tech}</p>
              <p className="text-muted text-sm mt-3 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
