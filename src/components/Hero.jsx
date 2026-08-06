import { motion } from "framer-motion";
import heroImg from "../assets/hero.jfif";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* Small neural-node dots for decoration */
function NeuralDots() {
  const dots = [
    { top: "15%", left: "5%", size: 6, delay: 0 },
    { top: "25%", left: "12%", size: 4, delay: 0.5 },
    { top: "60%", left: "8%", size: 5, delay: 1 },
    { top: "75%", left: "15%", size: 3, delay: 1.5 },
    { top: "40%", right: "3%", size: 7, delay: 0.3 },
    { top: "20%", right: "10%", size: 4, delay: 0.8 },
    { top: "80%", right: "7%", size: 5, delay: 1.2 },
    { top: "55%", right: "15%", size: 3, delay: 1.8 },
  ];

  return dots.map((d, i) => (
    <motion.div
      key={i}
      className="neural-node-dim"
      style={{ top: d.top, left: d.left, right: d.right, width: d.size, height: d.size }}
      animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
      transition={{ repeat: Infinity, duration: 3, delay: d.delay, ease: "easeInOut" }}
    />
  ));
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 lg:px-10 lg:pt-40"
    >
      {/* ── Background Effects ── */}
      <div className="grid-bg" />
      <div className="scan-line" />
      <NeuralDots />

      {/* Glow Orbs */}
      <div className="orb-cyan" style={{ top: "-10%", left: "-5%", width: "500px", height: "500px" }} />
      <div className="orb-teal" style={{ bottom: "-10%", right: "-5%", width: "400px", height: "400px" }} />

      {/* ── Main Grid ── */}
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* ── Left: Content ── */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10">
          {/* Status Badge */}
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <div className="available-dot" />
            <span
              className="text-xs font-medium uppercase"
              style={{ letterSpacing: "0.2em", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
            >
              Available for Research & Projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="heading-editorial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            <span style={{ color: "var(--text-bright)" }}>AI &</span>
            <br />
            <span className="glow-text animate-glow-pulse">Machine</span>
            <br />
            <span className="glow-text animate-glow-pulse">Learning</span>
            <br />
            <span style={{ color: "var(--text-bright)" }}>Engineer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg font-medium"
            style={{ color: "var(--cyan-soft)", fontFamily: "var(--font-body)" }}
          >
            Data Scientist • Deep Learning Researcher • MLOps
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            I build intelligent systems that transform raw data into actionable insights.
            From neural networks to production ML pipelines — pushing the boundaries
            of what machines can learn.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="btn-glow"
            >
              <span>View Projects</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              className="btn-glass"
            >
              Contact Me →
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={fadeUp} className="mt-14 flex gap-10">
            {[
              { num: "50+", label: "ML Models Built" },
              { num: "10M+", label: "Data Points" },
              { num: "15+", label: "Publications" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="stat-glow text-3xl lg:text-4xl">{num}</p>
                <p className="mt-1 text-xs font-medium uppercase" style={{ letterSpacing: "0.1em", color: "var(--text-muted)" }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Visual ── */}
        <motion.div
          initial={{ opacity: 0, x: 70, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="relative z-10"
        >
          {/* Orbital Ring */}
          <div
            className="deco-ring deco-ring-glow animate-rotate-slow"
            style={{ top: "-30px", left: "-30px", right: "-30px", bottom: "-30px" }}
          />

          {/* Profile Card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="glass-card overflow-hidden p-4"
          >
            <img
              src={heroImg}
              alt="Hashim Bagwan — AI/ML Engineer"
              className="h-[420px] w-full object-cover"
              style={{ borderRadius: "var(--radius-lg)" }}
            />
          </motion.div>

          {/* Floating Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="code-editor absolute -left-10 bottom-10 w-60"
            style={{ zIndex: 20 }}
          >
            <div className="code-editor-bar">
              <span className="code-editor-dot" style={{ background: "#ff5f57" }} />
              <span className="code-editor-dot" style={{ background: "#febc2e" }} />
              <span className="code-editor-dot" style={{ background: "#28c840" }} />
              <span className="ml-2 text-[10px]" style={{ color: "var(--text-muted)" }}>model.py</span>
            </div>
            <div className="code-editor-body">
              <div><span className="code-keyword">import</span> torch</div>
              <div><span className="code-keyword">class</span> <span className="code-function">NeuralNet</span>:</div>
              <div className="pl-4"><span className="code-keyword">def</span> <span className="code-function">forward</span>(self, x):</div>
              <div className="pl-8"><span className="code-keyword">return</span> self.model(x)</div>
              <div><span className="cursor-blink" /></div>
            </div>
          </motion.div>

          {/* Floating Accuracy Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -right-6 top-12"
            style={{ zIndex: 20 }}
          >
            <div className="glass-card flex items-center gap-3 px-5 py-3" style={{ borderRadius: "var(--radius-lg)" }}>
              <div
                className="flex h-10 w-10 items-center justify-center"
                style={{
                  background: "rgba(0, 229, 255, 0.1)",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <span className="text-lg">🧠</span>
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color: "var(--cyan-glow)" }}>98.7%</p>
                <p className="text-[10px] font-medium" style={{ color: "var(--text-muted)" }}>Model Accuracy</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}