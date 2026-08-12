export function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/hashcode03" },
    { name: "LinkedIn", href: "https://linkedin.com/in/hashimbagwan" },
    { name: "X / Twitter", href: "https://x.com/hashimbagwan" },
    { name: "Email", href: "mailto:bagwanhashim93@gmail.com" },
  ];

  return (
    <footer className="relative bg-[#030712] border-t border-white/10 pt-16 pb-12 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#030712]">
                  <span className="text-xs font-extrabold text-cyan-400 font-heading">HB</span>
                </div>
              </div>
              <span className="text-lg font-bold text-white font-heading">
                Hashim Bagwan<span className="text-cyan-400">.ai</span>
              </span>
            </a>
            <p className="mt-3 text-xs text-slate-400 max-w-sm leading-relaxed">
              AI/ML Engineer &amp; Data Scientist. Architecting deep neural networks and high-availability production machine learning models.
            </p>
          </div>

          {/* Nav Jumps */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">Connect</h4>
            <div className="flex flex-col gap-1.5 text-xs">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-0.5 flex items-center gap-1"
                >
                  <span>{s.name}</span>
                  <span className="text-[10px]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Hashim Bagwan. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-cyan-400 font-semibold">React</span> • <span className="text-cyan-400 font-semibold">Tailwind CSS</span> • <span className="text-cyan-400 font-semibold">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
