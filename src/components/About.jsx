import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

export function About() {
  return (
    <section id="about" className="relative py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">
            <span>◆</span> Background &amp; Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
            Engineering <span className="text-gradient-cyan">Reliable AI</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Bridging the gap between empirical machine learning research and enterprise software architecture.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Bento Item 1: Profile & Bio (Large Card - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 modern-glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-cyan-400/30">
                  <img src={profileImg} alt="Hashim Bagwan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">Hashim Bagwan</h3>
                  <p className="text-xs text-cyan-400 font-semibold">AI/ML Engineer &amp; Data Scientist</p>
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-200 font-heading mb-4 leading-snug">
                Dedicated to developing high-performance machine learning models and robust data pipelines.
              </h4>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Based in Mumbai, India, I specialize in training, optimizing, and deploying complex neural network models. My methodology focuses on data quality, model interpretability, and low-latency inference.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                From fine-tuning specialized Large Language Models (LLMs) to engineering computer vision pipelines for automated analysis, I build solutions designed for high stability and real-world scale.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Deep Learning
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> NLP &amp; RAG
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> MLOps
              </span>
            </div>
          </motion.div>

          {/* Bento Item 2: Core Focus Areas (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 modern-glass-card p-6 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Specializations</span>
              <h3 className="text-xl font-bold text-white font-heading mt-2 mb-6">Core Capabilities</h3>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-heading mb-1">
                    <span>💬</span> LLM &amp; RAG Engineering
                  </div>
                  <p className="text-xs text-slate-400">Fine-tuning open weights, building vector search indexes, and custom agentic workflows.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-heading mb-1">
                    <span>👁️</span> Computer Vision Systems
                  </div>
                  <p className="text-xs text-slate-400">Vision Transformers, object detection, and real-time image analysis pipelines.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-white font-heading mb-1">
                    <span>⚡</span> Model Optimization &amp; MLOps
                  </div>
                  <p className="text-xs text-slate-400">Quantization, ONNX conversion, containerized inference, and automated CI/CD for ML.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}