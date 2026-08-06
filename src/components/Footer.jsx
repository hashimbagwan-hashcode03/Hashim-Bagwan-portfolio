import { motion } from "framer-motion";

export function Footer() {
  const socials = [
    { name: "GitHub", href: "https://github.com/hashcode03", icon: "GH" },
    { name: "LinkedIn", href: "https://linkedin.com/in/hashimbagwan", icon: "LI" },
    { name: "Kaggle", href: "https://kaggle.com/hashimbagwan", icon: "KG" },
    { name: "Twitter", href: "https://twitter.com/hashimbagwan", icon: "TW" },
  ];

  return (
    <footer className="footer-section relative overflow-hidden">
      {/* Top glow line */}
      <div
        className="absolute left-0 right-0 top-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.3), transparent)" }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div
              className="flex h-9 w-9 items-center justify-center"
              style={{
                background: "rgba(0, 229, 255, 0.1)",
                border: "1px solid rgba(0, 229, 255, 0.25)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <span className="text-xs font-bold" style={{ color: "var(--cyan-glow)" }}>HB</span>
            </div>
            <span className="font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
              Hashim Bagwan
            </span>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-3"
          >
            {socials.map(({ name, href, icon }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center text-xs font-bold transition-all duration-300"
                style={{
                  background: "rgba(0, 229, 255, 0.05)",
                  border: "1px solid rgba(0, 229, 255, 0.12)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                }}
                title={name}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="gradient-divider my-6 w-full" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-3 text-sm md:flex-row md:justify-between" style={{ color: "var(--text-muted)" }}>
          <p>
            © {new Date().getFullYear()} Hashim Bagwan. Built with{" "}
            <span style={{ color: "var(--cyan-glow)" }}>♥</span> & neural networks.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
            React • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
