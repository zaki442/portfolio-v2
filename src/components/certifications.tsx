const certs = [
  "Python for Everybody Specialization — University of Michigan (Coursera)",
  "Django for Everybody Specialization — University of Michigan (Coursera)",
  "TryHackMe Level 8 — Cybersecurity",
  "TOEFL iBT 2026 — Udemy (In Progress)",
  "OSINT Fundamentals — Udemy",
  "Generative AI Learning Path — Google Cloud Skills Boost",
  "DeepLearning.AI TensorFlow Developer — Coursera",
  "IBM AI Engineering Professional Certificate — Coursera",
  "Practical Deep Learning for Coders — fast.ai",
  "Algorithms & Data Structures — Neetcode / LeetCode",
];

export default function Certifications() {
  return (
    <section className="py-24 px-4 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Certifications &amp; <span className="text-accent">Learning</span>
        </h2>
        <div className="w-12 h-1 bg-accent mb-12" />

        <div className="grid sm:grid-cols-2 gap-3">
          {certs.map((c) => (
            <div key={c} className="flex items-start gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/30">
              <span className="text-accent mt-0.5 shrink-0">&#9656;</span>
              <span className="text-sm text-muted leading-relaxed">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
