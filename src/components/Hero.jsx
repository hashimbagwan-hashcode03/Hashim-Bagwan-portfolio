// import { motion } from "framer-motion";

// const container = {
//     hidden: {},
//     show: {
//         transition: { staggerChildren: 0.15 },
//     },
// };

// const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
// };

// function Hero() {
//     const handleScroll = (href) => {
//         const el = document.querySelector(href);
//         if (el) el.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <section
//             id="home"
//             className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16"
//         >
//             {/* Background glow */}
//             <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

//             {/* Animated grid */}
//             <div
//                 className="absolute inset-0 pointer-events-none opacity-[0.03]"
//                 style={{
//                     backgroundImage:
//                         "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
//                     backgroundSize: "60px 60px",
//                 }}
//             />

//             {/* Floating orbs */}
//             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
//             <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

//             {/* Content — py-20 gives breathing room above & below, preventing scroll indicator overlap */}
//             <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
//                 <motion.div
//                     variants={container}
//                     initial="hidden"
//                     animate="show"
//                     className="flex flex-col items-center gap-4"
//                 >
//                     {/* Badge */}
//                     <motion.div variants={fadeUp}>
//                         <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium backdrop-blur-sm">
//                             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                             Available for opportunities
//                         </span>
//                     </motion.div>

//                     {/* Name */}
//                     <motion.h1
//                         variants={fadeUp}
//                         className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
//                     >
//                         <span className="text-white">Hi, I'm </span>
//                         <span className="relative inline-block">
//                             <span className="gradient-accent">Hashim Bagwan</span>
//                             <svg
//                                 className="absolute -bottom-2 left-0 w-full"
//                                 height="6"
//                                 viewBox="0 0 100 6"
//                                 preserveAspectRatio="none"
//                             >
//                                 <path
//                                     d="M0 5 Q25 0 50 4 Q75 8 100 3"
//                                     stroke="url(#wg)"
//                                     strokeWidth="2"
//                                     fill="none"
//                                 />
//                                 <defs>
//                                     <linearGradient id="wg" x1="0" y1="0" x2="100%" y2="0">
//                                         <stop stopColor="#6366f1" />
//                                         <stop offset="1" stopColor="#a78bfa" />
//                                     </linearGradient>
//                                 </defs>
//                             </svg>
//                         </span>
//                     </motion.h1>

//                     {/* Role */}
//                     <motion.p
//                         variants={fadeUp}
//                         className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300"
//                     >
//                         AI / ML Engineer & Data Scientist
//                     </motion.p>

//                     {/* Tagline */}
//                     <motion.p
//                         variants={fadeUp}
//                         className="max-w-xl text-gray-500 text-sm sm:text-base leading-relaxed"
//                     >
//                         Crafting intelligent solutions at the intersection of machine learning,
//                         data engineering, and modern web development.
//                     </motion.p>

//                     {/* CTA Buttons */}
//                     <motion.div
//                         variants={fadeUp}
//                         className="flex flex-wrap gap-4 justify-center mt-1"
//                     >
//                         <button
//                             onClick={() => handleScroll("#projects")}
//                             className="group px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 flex items-center gap-2"
//                         >
//                             View Projects
//                             <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                             </svg>
//                         </button>

//                         <button
//                             onClick={() => handleScroll("#contact")}
//                             className="px-8 py-3.5 border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
//                         >
//                             Contact Me
//                         </button>
//                     </motion.div>

//                     {/* Social Links */}
//                     <motion.div variants={fadeUp} className="flex items-center gap-6 mt-2">
//                         <a
//                             href="https://github.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-gray-500 hover:text-white transition-colors duration-200"
//                             aria-label="GitHub"
//                         >
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
//                             </svg>
//                         </a>
//                         <a
//                             href="https://linkedin.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-gray-500 hover:text-white transition-colors duration-200"
//                             aria-label="LinkedIn"
//                         >
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                             </svg>
//                         </a>
//                         <div className="w-px h-6 bg-white/10" />
//                         <span className="text-gray-600 text-sm">Based in India</span>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }

// export default Hero;


import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16"
        >
            {/* Glow background */}
            <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

            {/* Animated grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none animate-[gridMove_20s_linear_infinite]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Floating glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center gap-5"
                >
                    {/* Availability badge */}
                    <motion.div variants={fadeUp}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
                    >
                        <span className="text-white">Building intelligent </span>
                        <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                            AI systems
                        </span>
                        <br />
                        <span className="text-white">that solve real problems</span>
                    </motion.h1>

                    {/* Name */}
                    <motion.h2
                        variants={fadeUp}
                        className="text-2x2 sm:text-3xl md:text-4xl font-semibold text-gray-200"
                    >
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            Hashim Bagwan
                        </span>
                    </motion.h2>

                    {/* Role */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base sm:text-lg md:text-xl text-gray-300 font-medium"
                    >
                        AI / ML Engineer & Data Scientist
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeUp}
                        className="max-w-2xl text-gray-500 text-sm sm:text-base leading-relaxed"
                    >
                        I turn complex AI ideas into real, usable products using machine learning,
                        data engineering, and modern web technologies.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-wrap gap-4 justify-center mt-3"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-1 flex items-center gap-2"
                        >
                            View Projects
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3.5 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Socials */}
                    <motion.div variants={fadeUp} className="flex items-center gap-6 mt-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-200"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-200"
                        >
                            LinkedIn
                        </a>
                        <div className="w-px h-6 bg-white/10" />
                        <span className="text-gray-600 text-sm">Based in India</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;