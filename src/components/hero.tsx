export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e94560_0%,_transparent_50%)] opacity-20" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-accent font-mono text-sm mb-4 tracking-widest uppercase">Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Zakaria <span className="text-accent">Abid</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-8 font-light">
          Full Stack Developer &mdash; Web, Python, AI &amp; Cybersecurity
        </p>
        <p className="text-muted max-w-xl mx-auto mb-10 text-sm leading-relaxed">
          Certified Full Stack Developer with 5+ years of experience across the MERN stack, Angular, .NET, and Java Spring Boot. Built production applications for US-based clients, an algorithmic trading system, and a Moroccan community platform.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            View Projects
          </a>
          <a href="cv_resume_v_eng.pdf" target="_blank" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium border border-zinc-600 transition-colors">
            Download CV
          </a>
          <a href="#contact" className="border border-zinc-700 hover:border-accent text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
