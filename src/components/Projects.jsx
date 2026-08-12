import { motion } from "framer-motion";
import project1 from "../assets/project1.jfif";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jfif";

export function Projects() {
  const projects = [
    {
      title: "Neural Sentinel — Real-time Anomaly Detection",
      desc: "An end-to-end cybersecurity threat detection system using LSTM autoencoders and Transformer models. Processes 1M+ network events per second with 99.2% accuracy.",
      img: project1,
      tag: "Deep Learning • Cybersecurity",
      metrics: "99.2% Accuracy",
      tech: ["PyTorch", "LSTM Autoencoder", "Kafka", "Docker", "FastAPI"],
      github: "https://github.com/hashcode03",
    },
    {
      title: "MedVision AI — Medical Diagnostic Pipeline",
      desc: "Computer vision solution leveraging Vision Transformers (ViT) and Grad-CAM attention maps for early radiological anomaly detection with visual heatmaps.",
      img: project2,
      tag: "Computer Vision • Healthcare",
      metrics: "97.8% F1-Score",
      tech: ["Vision Transformers", "OpenCV", "PyTorch", "Grad-CAM", "AWS S3"],
      github: "https://github.com/hashcode03",
    },
    {
      title: "LinguaFlow NLP — Enterprise RAG & Sentiment Engine",
      desc: "Multi-lingual sentiment engine and document Q&A assistant built with fine-tuned BERT models and LangChain vector search, handling 50K+ daily enterprise queries.",
      img: project3,
      tag: "NLP • Generative AI",
      metrics: "50K+ Daily Queries",
      tech: ["HuggingFace", "BERT", "LangChain", "ChromaDB", "Python"],
      github: "https://github.com/hashcode03",
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">
            <span>◆</span> Selected Repositories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
            Featured <span className="text-gradient-cyan">AI/ML Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real-world systems engineered for high accuracy, low latency, and automated scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="modern-glass-card flex flex-col justify-between overflow-hidden group border border-white/10 hover:border-cyan-400/40"
            >
              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#030712]/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-400/30 text-xs font-bold text-cyan-400">
                    {p.metrics}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                    {p.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white font-heading mt-3 leading-snug">
                    {p.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[10px] font-medium text-slate-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline"
                >
                  <span>View Code on GitHub</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/hashcode03"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glass"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.907-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <span>Explore All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}