import { motion } from "framer-motion";
import project1 from "../assets/project1.jfif";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jfif";

const projects = [
  {
    title: "Neural Sentinel",
    desc: "Real-time anomaly detection system using LSTM autoencoders for cybersecurity threat analysis. Processes 1M+ events/sec with 99.2% accuracy.",
    img: project1,
    tag: "Deep Learning • Security",
    metrics: "99.2% Accuracy",
  },
  {
    title: "MedVision AI",
    desc: "Computer vision pipeline for medical image analysis — detecting tumors in radiology scans using Vision Transformers with attention maps.",
    img: project2,
    tag: "Computer Vision • Healthcare",
    metrics: "97.8% F1-Score",
  },
  {
    title: "LinguaFlow NLP",
    desc: "Multi-language sentiment analysis engine powered by fine-tuned BERT models. Processing 50K+ reviews daily for enterprise clients.",
    img: project3,
    tag: "NLP • Production ML",
    metrics: "50K+ Daily Reviews",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="section-shell"
      style={{ background: "linear-gradient(180deg, var(--bg-primary), var(--bg-secondary), var(--bg-primary))" }}
    >
      <div className="grid-bg" />
      <div className="orb-teal" style={{ top: "20%", left: "-80px", width: "300px", height: "300px" }} />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-badge">
            <span style={{ color: "var(--cyan-glow)" }}>◆</span> Featured Work
          </span>
          <h3 className="heading-section mt-6 text-4xl lg:text-5xl">
            Selected{" "}
            <span className="glow-text">Projects</span>
          </h3>
          <p className="mt-5 max-w-2xl text-base" style={{ color: "var(--text-secondary)" }}>
            AI/ML systems built for real-world impact — from research prototypes
            to production-grade machine learning pipelines.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="project-card group"
            >
              {/* Image */}
              <div className="project-img-wrap">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="h-52 w-full object-cover"
                />
                {/* Metric Badge */}
                <div
                  className="absolute bottom-3 right-3 z-10 px-3 py-1.5 text-xs font-bold"
                  style={{
                    background: "rgba(8, 30, 30, 0.8)",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
                    borderRadius: "var(--radius-full)",
                    color: "var(--cyan-glow)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {project.metrics}
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 px-1">
                <span className="tag-pill">{project.tag}</span>

                <h4 className="mt-4 text-lg font-bold" style={{ color: "var(--text-bright)", fontFamily: "var(--font-display)" }}>
                  {project.title}
                </h4>

                <p className="mt-3 text-sm leading-7" style={{ color: "var(--text-muted)" }}>
                  {project.desc}
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                  style={{ color: "var(--cyan-glow)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.textShadow = "0 0 15px rgba(0,229,255,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.textShadow = "none")}
                >
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}