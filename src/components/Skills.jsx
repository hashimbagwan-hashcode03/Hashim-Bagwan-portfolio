import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      category: "Machine Learning & Deep Learning",
      icon: "🧠",
      items: [
        { name: "PyTorch & TensorFlow", level: 95 },
        { name: "Scikit-Learn & XGBoost", level: 92 },
        { name: "Deep Neural Networks (CNN/RNN/ViT)", level: 90 },
      ],
    },
    {
      category: "NLP & LLM Engineering",
      icon: "💬",
      items: [
        { name: "LangChain & LlamaIndex", level: 88 },
        { name: "RAG & Vector DBs (Chroma/FAISS)", level: 90 },
        { name: "BERT & HuggingFace Fine-Tuning", level: 87 },
      ],
    },
    {
      category: "Computer Vision",
      icon: "👁️",
      items: [
        { name: "OpenCV & Image Processing", level: 89 },
        { name: "YOLO Object Detection", level: 88 },
        { name: "Grad-CAM & Explainable AI", level: 85 },
      ],
    },
    {
      category: "MLOps & Cloud Infrastructure",
      icon: "☁️",
      items: [
        { name: "Docker & Kubernetes", level: 86 },
        { name: "AWS (SageMaker, S3, EC2)", level: 85 },
        { name: "MLflow & CI/CD Pipelines", level: 84 },
      ],
    },
    {
      category: "Data Science & Analytics",
      icon: "📊",
      items: [
        { name: "Pandas & NumPy", level: 96 },
        { name: "SQL & Data Warehousing", level: 90 },
        { name: "Exploratory Data Analysis", level: 94 },
      ],
    },
    {
      category: "Programming & Tools",
      icon: "⚡",
      items: [
        { name: "Python (Advanced)", level: 96 },
        { name: "C++ & Algorithms", level: 82 },
        { name: "Git, Linux, Bash Scripting", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">
            <span>◆</span> Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading">
            Skills &amp; <span className="text-gradient-cyan">Frameworks</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            A comprehensive breakdown of tools, libraries, and platforms I work with daily.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="modern-glass-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-base font-bold text-white font-heading">{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-300">{item.name}</span>
                        <span className="text-cyan-400">{item.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#030712] rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}