import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.35 };
    const observers = [];

    navItems.forEach((item) => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        }, observerOptions);
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div
          className={`mx-auto max-w-6xl flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#0b1120]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "bg-[#0b1120]/40 backdrop-blur-md border border-white/5"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#030712]">
                <span className="text-xs font-extrabold tracking-tight text-cyan-400 font-heading">
                  HB
                </span>
              </div>
            </div>
            <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors font-heading">
              Hashim<span className="text-cyan-400">.ai</span>
            </span>
          </a>

          {/* Desktop Nav Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#030712]/50 p-1 rounded-full border border-white/5">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-glow-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/hashim-bagwan-cv.pdf"
              download
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
            >
              CV 📄
            </a>
            <a href="#contact" className="btn-primary-glow text-xs py-2 px-4">
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 border border-white/10 lg:hidden"
            aria-label="Toggle navigation"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="h-0.5 w-4 bg-cyan-400 rounded-full" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-4 bg-cyan-400 rounded-full" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="h-0.5 w-4 bg-cyan-400 rounded-full" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-[#0b1120]/95 backdrop-blur-2xl border-l border-white/10 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <span className="font-bold text-white font-heading">
                    Hashim<span className="text-cyan-400">.ai</span>
                  </span>
                  <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-white">✕</button>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  {navItems.map((item) => {
                    const id = item.href.replace("#", "");
                    const isActive = activeSection === id;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/30"
                            : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <a
                  href="/hashim-bagwan-cv.pdf"
                  download
                  className="block w-full text-center py-2.5 rounded-xl border border-white/10 text-slate-300 text-xs font-semibold"
                >
                  Download CV 📄
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary-glow w-full text-center text-xs py-2.5"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}