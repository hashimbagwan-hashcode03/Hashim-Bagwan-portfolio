import { motion } from "framer-motion";

const skills = [
  {
    name: "Python",
    icon: "🐍",
    level: 96,
    desc: "Core language for data science, ML model development, scripting, and building end-to-end AI pipelines.",
  },
  {
    name: "TensorFlow / Keras",
    icon: "🔶",
    level: 92,
    desc: "Building and training deep neural networks for classification, regression, and generative models at scale.",
  },
  {
    name: "PyTorch",
    icon: "🔥",
    level: 90,
    desc: "Research-grade deep learning: custom architectures, transformers, GANs, and reinforcement learning agents.",
  },
  {
    name: "NLP & LLMs",
    icon: "💬",
    level: 88,
    desc: "Fine-tuning large language models, building RAG pipelines, sentiment analysis, and text generation systems.",
  },
  {
    name: "Computer Vision",
    icon: "👁️",
    level: 87,
    desc: "Object detection, image segmentation, facial recognition, and real-time video analytics with OpenCV & YOLO.",
  },
  {
    name: "Data Analysis",
    icon: "📊",
    level: 94,
    desc: "Advanced analytics with Pandas, NumPy, Scikit-learn. Statistical modeling, A/B testing, and feature engineering.",
  },
  {
    name: "MLOps & Cloud",
    icon: "☁️",
    level: 85,
    desc: "Model deployment on AWS/GCP, CI/CD for ML, Docker, Kubernetes, MLflow tracking, and monitoring systems.",
  },
  {
    name: "SQL & Big Data",
    icon: "🗄️",
    level: 89,
    desc: "Complex queries, data warehousing, Spark, and handling large-scale datasets for training and analytics.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell relative">
      <div className="hex-pattern" />
      <div className="orb-teal" style={{ top: "-60px", left: "-80px", width: "300px", height: "300px" }} />
      <div className="orb-cyan" style={{ bottom: "-40px", right: "-60px", width: "250px", height: "250px", opacity: 0.4 }} />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="section-badge">
            <span style={{ color: "var(--cyan-glow)" }}>◆</span> Technical Arsenal
          </span>
          <h3 className="heading-section mt-6 text-4xl lg:text-5xl">
            Skills &{" "}
            <span className="glow-text">Expertise</span>
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base" style={{ color: "var(--text-secondary)" }}>
            Tools and technologies I use daily to build intelligent systems,
            train state-of-the-art models, and deploy production ML pipelines.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="skill-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="skill-icon-wrap">
                  <span className="text-lg">{skill.icon}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold" style={{ color: "var(--text-bright)", fontFamily: "var(--font-display)" }}>
                    {skill.name}
                  </h4>
                  <p className="text-xs font-medium" style={{ color: "var(--cyan-glow)" }}>
                    {skill.level}%
                  </p>
                </div>
              </div>

              <div className="progress-bar mb-4">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>

              <p className="text-xs leading-6" style={{ color: "var(--text-muted)" }}>
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}