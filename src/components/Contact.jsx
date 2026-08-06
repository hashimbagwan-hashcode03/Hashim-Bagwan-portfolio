import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="section-shell relative">
      <div className="hex-pattern" />
      <div className="orb-cyan" style={{ bottom: "0", right: "-60px", width: "300px", height: "300px", opacity: 0.4 }} />
      <div className="orb-teal" style={{ top: "15%", left: "-80px", width: "250px", height: "250px" }} />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-badge">
            <span style={{ color: "var(--cyan-glow)" }}>◆</span> Get In Touch
          </span>

          <h3 className="heading-section mt-6 text-4xl leading-tight lg:text-5xl">
            Let's Build the{" "}
            <span className="glow-text">Future</span> Together
          </h3>

          <p className="mt-6 max-w-lg text-base leading-8" style={{ color: "var(--text-secondary)" }}>
            Open to AI/ML research collaborations, data science consulting,
            model development, and full-stack ML engineering roles.
            Let's turn your data into intelligence.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 space-y-4">
            {[
              { icon: "📧", label: "Email", value: "hashimbagwan03@gmail.com", color: "var(--cyan-glow)" },
              { icon: "📍", label: "Location", value: "Mumbai, India", color: "var(--teal-accent)" },
              { icon: "💼", label: "Status", value: "Open for Opportunities", dot: true },
            ].map(({ icon, label, value, dot }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4 }}
                className="info-card flex items-center gap-4"
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center"
                  style={{
                    background: "rgba(0, 229, 255, 0.06)",
                    border: "1px solid rgba(0, 229, 255, 0.12)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <span className="text-lg">{icon}</span>
                </div>
                <div>
                  <p className="info-label">{label}</p>
                  <p className="info-value flex items-center gap-2">
                    {dot && <span className="available-dot" />}
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card p-8 lg:p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <h4 className="mb-8 text-lg font-bold" style={{ color: "var(--text-bright)", fontFamily: "var(--font-display)" }}>
            Send me a message
          </h4>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="form-label">Name</label>
              <input type="text" placeholder="Your name" className="form-input" />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input type="email" placeholder="your@email.com" className="form-input" />
            </div>
          </div>

          <div className="mt-5">
            <label className="form-label">Subject</label>
            <input type="text" placeholder="AI/ML project inquiry" className="form-input" />
          </div>

          <div className="mt-5">
            <label className="form-label">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project, dataset, and goals..."
              className="form-input resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-glow mt-8 w-full justify-center"
          >
            <span className="flex items-center gap-2">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}