import { motion } from "framer-motion";

export function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "☁️",
      desc: "Validation of expertise in designing, deploying, and maintaining ML solutions on AWS.",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow Program",
      date: "2022",
      badge: "🔶",
      desc: "Proficiency in deep learning models using TensorFlow, Computer Vision, and NLP.",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2022",
      badge: "🧠",
      desc: "Neural networks, hyperparameter tuning, CNNs, Sequence Models, and structuring ML projects.",
    },
    {
      title: "Natural Language Processing Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      badge: "💬",
      desc: "Comprehensive expertise in sentiment analysis, machine translation, and Transformers.",
    },
  ];

  return (
    <section id="certifications" className="relative py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">
            <span>◆</span> Industry Credentials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
            Certifications &amp; <span className="text-gradient-cyan">Badges</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Official certifications validating domain expertise and technical capabilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="modern-glass-card p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {cert.badge}
                  </div>
                  <span className="text-[10px] font-bold text-cyan-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white font-heading mb-0.5 group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                <h4 className="text-[11px] font-semibold text-slate-400 mb-2">{cert.issuer}</h4>

                <p className="text-[11px] text-slate-400 leading-relaxed">{cert.desc}</p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 text-right">
                <span className="text-[10px] font-bold text-emerald-400 inline-flex items-center gap-1">
                  <span>Verified Credential</span> ✓
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
