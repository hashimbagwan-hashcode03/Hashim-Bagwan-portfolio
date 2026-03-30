// import { motion } from "framer-motion";

// const skillGroups = [
//   {
//     category: "AI & Machine Learning",
//     icon: "🧠",
//     skills: [
//       { name: "Python", level: 95 },
//       { name: "PyTorch", level: 82 },
//       { name: "TensorFlow", level: 75 },
//       { name: "HuggingFace", level: 80 },
//       { name: "Scikit-learn", level: 90 },
//       { name: "OpenCV", level: 72 },
//     ],
//   },
//   {
//     category: "Data Science",
//     icon: "⚙️",
//     skills: [
//       { name: "Pandas", level: 92 },
//       { name: "NumPy", level: 90 },
//       { name: "SQL", level: 85 },
//       { name: "Apache Spark", level: 68 },
//       { name: "Kafka", level: 65 },
//       { name: "PostgreSQL", level: 80 },
//     ],
//   },
//   {
//     category: "Web Development",
//     icon: "🌐",
//     skills: [
//       { name: "React", level: 85 },
//       { name: "Tailwind CSS", level: 88 },
//       { name: "FastAPI", level: 82 },
//       { name: "Node.js", level: 70 },
//       { name: "TypeScript", level: 73 },
//       { name: "Next.js", level: 68 },
//     ],
//   },
//   {
//     category: "Tools & DevOps",
//     icon: "🛠️",
//     skills: [
//       { name: "Git", level: 90 },
//       { name: "Docker", level: 75 },
//       { name: "Linux", level: 78 },
//       { name: "VS Code", level: 95 },
//       { name: "Jupyter", level: 92 },
//       { name: "AWS (Basics)", level: 60 },
//     ],
//   },
// ];

// function SkillBar({ name, level, delay }) {
//   return (
//     <div className="space-y-1.5">
//       <div className="flex items-center justify-between">
//         <span className="text-sm text-gray-300 font-medium">{name}</span>
//         <span className="text-xs text-gray-600 font-mono">{level}%</span>
//       </div>
//       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: `${level}%` }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, delay, ease: "easeOut" }}
//           className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
//         />
//       </div>
//     </div>
//   );
// }

// function Skills() {
//   return (
//     <section id="skills" className="py-28 bg-black relative">
//       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full mb-4">
//             Skills
//           </span>
//           <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
//             My Tech Stack
//           </h2>
//           <p className="text-gray-500 max-w-xl mx-auto">
//             Tools and technologies I use to build intelligent, production-ready systems.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {skillGroups.map((group, gi) => (
//             <motion.div
//               key={group.category}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: gi * 0.1 }}
//               className="bg-[#0c0c0c] border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 transition-colors duration-300"
//             >
//               <div className="flex items-center gap-3 mb-5">
//                 <span className="text-2xl">{group.icon}</span>
//                 <h3 className="text-white font-bold">{group.category}</h3>
//               </div>
//               <div className="space-y-3.5">
//                 {group.skills.map((skill, si) => (
//                   <SkillBar
//                     key={skill.name}
//                     name={skill.name}
//                     level={skill.level}
//                     delay={gi * 0.1 + si * 0.07}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Badge cloud */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="mt-10 bg-[#0c0c0c] border border-white/[0.07] rounded-2xl p-6"
//         >
//           <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">
//             Also familiar with
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {[
//               "Matplotlib", "Seaborn", "Plotly", "Langchain", "Pinecone",
//               "Redis", "MongoDB", "GraphQL", "Tailwind", "Vite", "Vercel",
//               "GitHub Actions", "Streamlit", "Flask", "Django",
//             ].map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-gray-400 text-xs font-medium hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/25 transition-all duration-200 cursor-default"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Skills;

//---------------c-----------------------------------------------//

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "HuggingFace", level: "Intermediate" },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "OpenCV", level: "Intermediate" },
    ],
  },
  {
    category: "Data Engineering",
    icon: "⚙️",
    skills: [
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Apache Spark", level: "Beginner" },
      { name: "Kafka", level: "Beginner" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  {
    category: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Next.js", level: "Beginner" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Linux", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Jupyter", level: "Advanced" },
      { name: "AWS", level: "Beginner" },
    ],
  },
];

function SkillItem({ name, level }) {
  const levelColor =
    level === "Advanced"
      ? "text-emerald-400"
      : level === "Intermediate"
        ? "text-yellow-400"
        : "text-gray-500";

  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition">
      <span className="text-sm text-gray-300 font-medium">{name}</span>
      <span className={`text-xs font-medium ${levelColor}`}>
        {level}
      </span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-28 bg-black relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full mb-4">
            Skills
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Technical Skills
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Technologies I use to design, build, and deploy real-world AI systems.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="bg-[#0c0c0c] border border-white/[0.07] rounded-2xl p-6 hover:border-white/15 transition"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-white font-bold">{group.category}</h3>
              </div>

              <div className="space-y-2.5">
                {group.skills.map((skill) => (
                  <SkillItem key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-[#0c0c0c] border border-white/[0.07] rounded-2xl p-6"
        >
          <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-4">
            Also familiar with
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Matplotlib", "Seaborn", "Plotly", "Langchain", "Pinecone",
              "Redis", "MongoDB", "GraphQL", "Vite", "Vercel",
              "GitHub Actions", "Streamlit", "Flask", "Django",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-gray-400 text-xs font-medium hover:bg-indigo-500/10 hover:text-indigo-400 hover:border-indigo-500/25 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;