import { motion } from "framer-motion";

export function Education() {
  const educationList = [
    {
      degree: "Master of Science in Data Science",
      institution: "University Institute of Technology",
      period: "2021 — 2023",
      location: "Mumbai, India",
      details: "Specialization in Machine Learning, Statistical Inference, and Deep Learning Architectures.",
      courses: [
        "Advanced Machine Learning",
        "Deep Learning & Neural Networks",
        "Big Data Processing & Spark",
        "Natural Language Processing",
      ],
      honors: "First Class Distinction • Thesis on Transformer Optimization",
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "State Technological University",
      period: "2017 — 2021",
      location: "Mumbai, India",
      details: "Core Computer Science curriculum focusing on Data Structures, Algorithms, Systems & Software Engineering.",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems & Architecture",
        "Artificial Intelligence",
      ],
      honors: "Graduated with Honors • Capstone Project Award",
    },
  ];

  return (
    <section id="education" className="relative py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">
            <span>◆</span> Academic Degrees
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
            Education &amp; <span className="text-gradient-cyan">Background</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Solid foundations in computer engineering and empirical data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="modern-glass-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {edu.period}
                  </span>
                  <span className="text-xs text-slate-400">{edu.location}</span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading">{edu.degree}</h3>
                <h4 className="text-xs font-semibold text-slate-300 mt-0.5 mb-3">{edu.institution}</h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">{edu.details}</p>

                <div className="mb-4">
                  <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Key Coursework
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
                    {edu.courses.map((c) => (
                      <div key={c} className="flex items-center gap-1.5">
                        <span className="text-cyan-400">▸</span>
                        <span className="text-[11px]">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5">
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span>🏆</span> {edu.honors}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
