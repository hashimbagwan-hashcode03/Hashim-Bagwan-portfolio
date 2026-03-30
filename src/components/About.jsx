// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// function SectionTitle({ label, title, subtitle }) {
//   return (
//     <div className="text-center mb-16">
//       <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full mb-4">
//         {label}
//       </span>
//       <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{title}</h2>
//       {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
//     </div>
//   );
// }

// const timeline = [
//   {
//     year: "2022",
//     title: "Started CS Journey",
//     desc: "Enrolled in B.Tech Computer Science with AI & Data Science specialization.",
//   },
//   {
//     year: "2023",
//     title: "Machine Learning Deep Dive",
//     desc: "Completed advanced ML courses and built first end-to-end AI models.",
//   },
//   {
//     year: "2024",
//     title: "Full Stack & AI Projects",
//     desc: "Built real-world applications combining ML backends with modern React frontends.",
//   },
//   {
//     year: "2025",
//     title: "Open Source & Research",
//     desc: "Contributing to open source AI tools and exploring LLM fine-tuning.",
//   },
// ];

// function About() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="about" ref={ref} className="py-28 bg-black relative overflow-hidden">
//       {/* Subtle bg accent */}
//       <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//         >
//           <SectionTitle label="About Me" title="Building the Future with AI" />
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-16 items-start">
//           {/* Bio */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="space-y-5"
//           >
//             <p className="text-gray-400 text-lg leading-relaxed">
//               I'm a passionate <span className="text-white font-semibold">AI & Data Science student</span> with
//               a strong foundation in machine learning, deep learning, and scalable data systems.
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               I love building things that sit at the intersection of intelligent systems and elegant
//               user experiences. Whether it's training neural networks, building REST APIs, or crafting
//               pixel-perfect UIs — I bring the same obsessive attention to detail everywhere.
//             </p>
//             <p className="text-gray-400 leading-relaxed">
//               Outside of code, I explore research papers, contribute to open source projects, and
//               occasionally write about AI trends and my learning journey.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4 pt-4">
//               {[
//                 { value: "15+", label: "Projects" },
//                 { value: "3+", label: "Years Learning" },
//                 { value: "5+", label: "Tech Stacks" },
//               ].map(({ value, label }) => (
//                 <div
//                   key={label}
//                   className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
//                 >
//                   <p className="text-2xl font-black text-white">{value}</p>
//                   <p className="text-xs text-gray-500 mt-1">{label}</p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Timeline */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="space-y-6"
//           >
//             {timeline.map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
//                 className="flex gap-4 group"
//               >
//                 {/* Timeline line */}
//                 <div className="flex flex-col items-center">
//                   <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0 group-hover:bg-indigo-400 transition" />
//                   {i < timeline.length - 1 && (
//                     <div className="w-px flex-1 bg-white/10 mt-2" />
//                   )}
//                 </div>
//                 <div className="pb-6">
//                   <span className="text-xs font-mono text-indigo-400">{item.year}</span>
//                   <h3 className="text-white font-semibold mt-0.5">{item.title}</h3>
//                   <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


//--------------------------------------------------------------------c--//

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SectionTitle({ label, title, subtitle }) {
    return (
        <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full mb-4">
                {label}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>
            )}
        </div>
    );
}

const timeline = [
    {
        year: "2022",
        title: "Started Computer Science",
        desc: "Began B.Tech with specialization in AI & Data Science.",
    },
    {
        year: "2023",
        title: "Core ML Foundations",
        desc: "Learned machine learning fundamentals and built initial projects.",
    },
    {
        year: "2024",
        title: "Full-Stack + AI Integration",
        desc: "Developed applications combining ML models with React frontends.",
    },
    {
        year: "2025",
        title: "Advanced AI Systems",
        desc: "Working on LLMs, scalable pipelines, and production-ready ML systems.",
    },
];

function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={ref}
            className="py-28 bg-black relative overflow-hidden"
        >
            {/* subtle divider */}
            <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                >
                    <SectionTitle
                        label="About Me"
                        title="About Me"
                        subtitle="Focused on building real-world AI systems and scalable applications."
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* 🔥 Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-5"
                    >
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I'm an{" "}
                            <span className="text-white font-semibold">
                                AI & Data Science student
                            </span>{" "}
                            focused on building practical machine learning systems — not just
                            training models, but deploying them into real-world applications.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            My work sits at the intersection of{" "}
                            <span className="text-white">
                                machine learning, data engineering, and modern web development
                            </span>
                            . I build end-to-end systems — from data pipelines and model
                            training to APIs and frontend interfaces.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            Currently, I'm exploring advanced areas like{" "}
                            <span className="text-white">
                                LLM fine-tuning, scalable ML systems, and real-time data
                                processing
                            </span>
                            , while continuously improving how I design and ship
                            production-ready solutions.
                        </p>

                        {/* 🔥 Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { value: "15+", label: "Projects" },
                                { value: "3+", label: "Years Learning" },
                                { value: "5+", label: "Tech Stacks" },
                            ].map(({ value, label }) => (
                                <div
                                    key={label}
                                    className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                                >
                                    <p className="text-2xl font-black text-white">{value}</p>
                                    <p className="text-xs text-gray-500 mt-1">{label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* 🔥 Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                                className="flex gap-4 group"
                            >
                                {/* dot + line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 mt-1.5 group-hover:bg-indigo-400 transition" />
                                    {i < timeline.length - 1 && (
                                        <div className="w-px flex-1 bg-white/10 mt-2" />
                                    )}
                                </div>

                                <div className="pb-6">
                                    <span className="text-xs font-mono text-indigo-400">
                                        {item.year}
                                    </span>
                                    <h3 className="text-white font-semibold mt-0.5">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
