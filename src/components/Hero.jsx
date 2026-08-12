import { motion } from "framer-motion";
import heroImg from "../assets/hero.jfif";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 flex items-center justify-center overflow-hidden">
      {/* Background Lighting & Grid */}
      <div className="ambient-glow-top" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full grid gap-12 lg:grid-cols-12 items-center relative z-10">
        {/* Left Column: Intro & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-[11px] font-bold tracking-wider text-cyan-300 uppercase">
              Open to AI/ML Engineering &amp; Research Roles
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-heading">
            Architecting <br />
            <span className="text-gradient-cyan">Next-Gen AI Systems</span> <br />
            &amp; Deep Neural Networks.
          </h1>

          {/* Subtitle */}
          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-slate-300">
            Hashim Bagwan — <span className="text-cyan-400">AI/ML Engineer &amp; Data Scientist</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-400 font-normal">
            Specializing in Deep Learning, NLP, RAG architecture, and Computer Vision. I build resilient, high-throughput machine learning pipelines that translate complex datasets into measurable real-world performance.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary-glow">
              <span>View Selected Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary-glass">
              <span>Contact Me</span>
            </a>
            <a
              href="/hashim-bagwan-cv.pdf"
              download
              className="text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors px-3 py-2"
            >
              Download CV 📥
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 pt-6 border-t border-white/10 grid grid-cols-3 gap-6 w-full max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading">5+</div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">50+</div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Models Deployed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">99.2%</div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">Top Accuracy</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Code & Visual Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Glass Code Editor & Profile Container */}
          <div className="modern-glass-panel p-5 relative overflow-hidden border border-cyan-500/20 shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-code text-slate-400">transformer_model.py</span>
              </div>
              <span className="text-[10px] font-code text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                PyTorch v2.3
              </span>
            </div>

            {/* Profile Image with subtle code overlay */}
            <div className="relative rounded-xl overflow-hidden mb-4 h-64">
              <img
                src={heroImg}
                alt="Hashim Bagwan — AI Engineer"
                className="w-full h-full object-cover filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-white font-heading">
                  Hashim Bagwan
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Active ML Pipeline
                </span>
              </div>
            </div>

            {/* Simulated Live Code Snippet */}
            <div className="bg-[#030712]/90 rounded-lg p-3 font-code text-xs space-y-1 text-slate-300 border border-white/5">
              <div><span className="text-cyan-400">import</span> torch.nn <span className="text-cyan-400">as</span> nn</div>
              <div><span className="text-purple-400">class</span> <span className="text-yellow-300">NeuralTransformer</span>(nn.Module):</div>
              <div className="pl-4 text-slate-400"># Initializing multi-head attention</div>
              <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">forward</span>(self, x):</div>
              <div className="pl-8 text-emerald-400">return self.attn_layer(x)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}