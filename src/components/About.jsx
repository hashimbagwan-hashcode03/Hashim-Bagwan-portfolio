import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export function About() {
  return (
    <section
      id="about"
      className="section-shell"
      style={{ background: "linear-gradient(180deg, var(--bg-primary), var(--bg-secondary), var(--bg-primary))" }}
    >
      <div className="grid-bg" />

      {/* Orbs */}
      <div className="orb-cyan" style={{ top: "10%", right: "-100px", width: "350px", height: "350px", opacity: 0.5 }} />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
        {/* ── Left: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="glass-card overflow-hidden p-3">
            <img
              src={profileImg}
              alt="Hashim Bagwan"
              className="h-[480px] w-full object-cover"
              style={{ borderRadius: "var(--radius-lg)" }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-5 -right-5 z-10"
          >
            <div className="glass-card px-6 py-4 text-center" style={{ borderRadius: "var(--radius-xl)" }}>
              <p className="stat-glow text-3xl">5+</p>
              <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.15em", color: "var(--text-muted)" }}>
                Years in AI/ML
              </p>
            </div>
          </motion.div>

          {/* Decorative ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="deco-ring deco-ring-glow absolute -left-8 -top-8"
            style={{ width: "100px", height: "100px" }}
          />
        </motion.div>

        {/* ── Right: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-badge">
            <span style={{ color: "var(--cyan-glow)" }}>◆</span> About Me
          </span>

          <h3 className="heading-section mt-6 text-4xl lg:text-5xl">
            The Mind Behind{" "}
            <span className="glow-text">The Models</span>
          </h3>

          <p className="mt-7 text-base leading-8" style={{ color: "var(--text-secondary)" }}>
            I'm a passionate AI/ML Engineer and Data Scientist based in Mumbai, India.
            With deep expertise in deep learning, natural language processing, and
            computer vision, I build intelligent systems that solve real-world problems
            at scale.
          </p>

          <p className="mt-4 text-base leading-8" style={{ color: "var(--text-secondary)" }}>
            From training transformer models on massive datasets to deploying 
            production ML pipelines on cloud infrastructure — I obsess over model 
            accuracy, data quality, and system reliability. Every project is an 
            opportunity to push the frontier of what AI can achieve.
          </p>

          {/* Info Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: "🎓", label: "Education", value: "M.S. Data Science" },
              { icon: "📍", label: "Location", value: "Mumbai, India" },
              { icon: "🧠", label: "Focus", value: "AI/ML + Research" },
            ].map(({ icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="info-card"
              >
                <div className="mb-2 text-xl">{icon}</div>
                <p className="info-label">{label}</p>
                <p className="info-value">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}