import { motion } from "framer-motion";

const projects = [
    {
        title: "SentimentAI",
        description:
            "Real-time sentiment analysis dashboard powered by a fine-tuned BERT model.",
        tags: ["Python", "PyTorch", "FastAPI", "React"],
        github: "https://github.com",
        live: "https://example.com",
        featured: true,
    },
    {
        title: "DataVault",
        description:
            "Scalable ETL pipeline using Kafka & Spark for large-scale ML workflows.",
        tags: ["Python", "Kafka", "Spark", "PostgreSQL"],
        github: "https://github.com",
        live: null,
        featured: true,
    },
    {
        title: "VisionBoard",
        description:
            "Real-time object detection app using YOLO v8 with React frontend.",
        tags: ["Python", "YOLO", "React"],
        github: "https://github.com",
        live: "https://example.com",
    },
    {
        title: "ChurnPredict",
        description:
            "ML system predicting churn with 94% accuracy + analytics dashboard.",
        tags: ["Python", "XGBoost", "React"],
        github: "https://github.com",
    },
    {
        title: "LexiBot",
        description:
            "Context-aware chatbot using LoRA + streaming API.",
        tags: ["HuggingFace", "FastAPI", "WebSocket"],
        github: "https://github.com",
    },
];

function ProjectCard({ project, featured }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={`group relative rounded-2xl border border-white/10 bg-[#0c0c0c] overflow-hidden ${featured ? "p-8 col-span-2" : "p-6"
                }`}
        >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-600/10 to-violet-600/10" />

            {/* Title */}
            <h3 className="text-white font-bold text-xl mb-2">
                {project.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-400 text-sm mb-4">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 text-sm">
                <a
                    href={project.github}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                >
                    Code →
                </a>
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        className="text-indigo-400 hover:text-indigo-300"
                    >
                        Live →
                    </a>
                )}
            </div>
        </motion.div>
    );
}

function Projects() {
    const featured = projects.filter((p) => p.featured);
    const others = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-28 bg-black">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                        Projects that matter
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Not just demos — real systems solving real problems.
                    </p>
                </div>

                {/* 🔥 Featured Projects */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {featured.map((p) => (
                        <ProjectCard key={p.title} project={p} featured />
                    ))}
                </div>

                {/* Other Projects */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {others.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 transition"
                    >
                        View All Projects →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;