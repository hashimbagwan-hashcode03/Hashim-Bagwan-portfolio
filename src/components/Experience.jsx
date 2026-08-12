import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "Senior AI/ML Engineer",
      company: "NeuralTech Solutions",
      period: "2023 — Present",
      location: "Mumbai, India",
      desc: "Leading the development of enterprise LLM applications and automated document intelligence platforms. Engineered custom RAG pipelines processing over 2M vectors daily with high retrieval precision.",
      skills: ["PyTorch", "LangChain", "RAG", "FastAPI", "Docker", "AWS SageMaker"],
    },
    {
      role: "Data Scientist & ML Developer",
      company: "Apex Analytics Lab",
      period: "2021 — 2023",
      location: "Mumbai, India",
      desc: "Built predictive analytics & computer vision models for threat detection and quality assurance systems. Reduced model inference latency by 45% using TensorRT & ONNX quantization.",
      skills: ["TensorFlow", "OpenCV", "Scikit-Learn", "SQL", "MLflow"],
    },
    {
      role: "AI Research Intern",
      company: "Cognitive AI Research Group",
      period: "2020 — 2021",
      location: "Mumbai, India",
      desc: "Researched multi-modal architectures and anomaly detection models for industrial IoT sensor data. Conducted benchmark studies on real-time time-series classification models.",
      skills: ["Python", "Keras", "Time-Series", "NumPy", "Pandas"],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">
            <span>◆</span> Career Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
            Experience &amp; <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Chronological overview of my professional engineering contributions and research roles.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Glass Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.6)] items-center justify-center z-10 hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className="modern-glass-card p-6 border border-white/10 hover:border-cyan-400/30">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-3 py-0.5 rounded-full border border-cyan-500/20">
                        {exp.period}
                      </span>
                      <span className="text-xs text-slate-400">{exp.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading">{exp.role}</h3>
                    <h4 className="text-xs font-semibold text-slate-300 mb-3">{exp.company}</h4>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{exp.desc}</p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {exp.skills.map((s) => (
                        <span key={s} className="text-[10px] font-semibold text-slate-300 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
