const techSkills = [
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "Angular / React / Next.js", level: 85 },
  { name: "Java / Spring Boot", level: 88 },
  { name: "Python / Django", level: 85 },
  { name: "C# / .NET", level: 75 },
  { name: "SQL / NoSQL / MongoDB", level: 80 },
  { name: "Node.js / Express", level: 85 },
  { name: "Git / Docker / Linux", level: 78 },
];

const professionalSkills = [
  { name: "Communication", level: 95 },
  { name: "Team Work", level: 85 },
  { name: "Problem Solving", level: 88 },
  { name: "Adaptability", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="w-12 h-1 bg-accent mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">Technical Skills</h3>
            <div className="space-y-4">
              {techSkills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{s.name}</span>
                    <span className="text-muted">{s.level}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-6 tracking-wider uppercase">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((s) => (
                <div key={s.name} className="text-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
                      <circle cx="36" cy="36" r="30" fill="none" stroke="#27272a" strokeWidth="6" />
                      <circle
                        cx="36" cy="36" r="30"
                        fill="none" stroke="#e94560" strokeWidth="6"
                        strokeDasharray={`${2 * Math.PI * 30}`}
                        strokeDashoffset={`${2 * Math.PI * 30 * (1 - s.level / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">{s.level}%</span>
                  </div>
                  <p className="text-sm text-muted">{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
