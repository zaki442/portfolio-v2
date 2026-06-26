const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "JavaScript / TypeScript", "Angular", "React", "Next.js",
      "Tailwind CSS", "HTML / CSS",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js / Express", "Java / Spring Boot", "C# / .NET",
      "Python / Django", "REST APIs", "JWT / OAuth",
    ],
  },
  {
    label: "Database & DevOps",
    skills: [
      "MongoDB", "PostgreSQL", "MySQL", "Git / GitHub",
      "Docker", "Linux / Bash", "CI/CD",
    ],
  },
  {
    label: "AI & Data",
    skills: [
      "Python", "TensorFlow", "LangChain", "Pandas",
      "Machine Learning", "Kaggle", "Hugging Face",
    ],
  },
  {
    label: "Cybersecurity",
    skills: [
      "TryHackMe (Lvl 8)", "Kali Linux", "Nmap", "Wireshark",
      "Burp Suite", "OSINT", "XSS / SQLI",
    ],
  },
  {
    label: "Automation & Tools",
    skills: [
      "Selenium", "Playwright", "Alpaca API", "ccxt",
      "Backtrader", "Stripe API",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="w-12 h-1 bg-accent mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/50"
            >
              <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs border border-zinc-700 rounded-md text-muted hover:border-accent hover:text-accent transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
