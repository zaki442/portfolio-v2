"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="text-sm font-bold tracking-tight">
          Zakaria <span className="text-accent">Abid</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv_resume_v_eng.pdf"
            target="_blank"
            className="bg-accent hover:bg-accent/90 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
          <div className="px-4 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/cv_resume_v_eng.pdf"
              target="_blank"
              onClick={() => setOpen(false)}
              className="bg-accent text-white px-3 py-1.5 rounded-md text-xs font-medium text-center transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
