import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8, 30, 30, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0, 229, 255, 0.1)"
          : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div
            className="flex h-10 w-10 items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(45, 212, 168, 0.1))",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              borderRadius: "var(--radius-md)",
              boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)",
            }}
          >
            <span className="text-sm font-bold" style={{ color: "var(--cyan-glow)" }}>HB</span>
          </div>
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-bright)" }}
          >
            Hashim<span style={{ color: "var(--cyan-glow)" }}>.</span>
          </span>
        </motion.a>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="relative text-sm font-medium transition-all duration-300"
                style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--cyan-glow)";
                  e.target.style.textShadow = "0 0 20px rgba(0, 229, 255, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--text-secondary)";
                  e.target.style.textShadow = "none";
                }}
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="btn-glow hidden sm:inline-flex"
        >
          <span>Let's Talk</span>
        </motion.a>
      </nav>
    </motion.header>
  );
}