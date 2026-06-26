const interests = [
  {
    title: "Algorithmic Trading",
    desc: "Building automated trading systems with Python, Alpaca API, Backtrader, and ccxt for crypto market support. Applying moving-average crossover strategies and quantitative analysis.",
  },
  {
    title: "AI & Machine Learning",
    desc: "Exploring TensorFlow, LangChain, and data science pipelines. Working on AI agents, marketing automation, and Kaggle competitions to deepen ML expertise.",
  },
  {
    title: "Cybersecurity & OSINT",
    desc: "TryHackMe Level 8 with hands-on experience in Kali Linux, Nmap, Wireshark, and Burp Suite. Passionate about ethical hacking, network security, and open-source intelligence.",
  },
];

export default function Interests() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Interests &amp; <span className="text-accent">Focus</span>
        </h2>
        <div className="w-12 h-1 bg-accent mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((i) => (
            <div
              key={i.title}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-accent/50 transition-colors"
            >
              <h3 className="font-semibold mb-2">{i.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
