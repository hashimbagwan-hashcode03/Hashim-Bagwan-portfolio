// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Projects", href: "#projects" },
//   { label: "Skills", href: "#skills" },
//   { label: "Contact", href: "#contact" },
// ];

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);

//       const sections = navLinks.map((l) => l.href.slice(1));
//       for (let i = sections.length - 1; i >= 0; i--) {
//         const el = document.getElementById(sections[i]);
//         if (el && window.scrollY >= el.offsetTop - 120) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (e, href) => {
//     e.preventDefault();
//     setMenuOpen(false);
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
//           {/* Logo */}
//           <a
//             href="#home"
//             onClick={(e) => handleNavClick(e, "#home")}
//             className="text-white font-bold text-lg tracking-tight"
//           >
//             <span className="text-indigo-400">&lt;</span>
//             Hashim
//             <span className="text-indigo-400">/&gt;</span>
//           </a>

//           {/* Desktop Links */}
//           <ul className="hidden md:flex items-center gap-1">
//             {navLinks.map(({ label, href }) => {
//               const isActive = activeSection === href.slice(1);
//               return (
//                 <li key={href}>
//                   <a
//                     href={href}
//                     onClick={(e) => handleNavClick(e, href)}
//                     className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
//                       isActive
//                         ? "text-white"
//                         : "text-gray-400 hover:text-white"
//                     }`}
//                   >
//                     {isActive && (
//                       <motion.span
//                         layoutId="nav-active"
//                         className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
//                         transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
//                       />
//                     )}
//                     <span className="relative z-10">{label}</span>
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* CTA */}
//           <a
//             href="#contact"
//             onClick={(e) => handleNavClick(e, "#contact")}
//             className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
//           >
//             Hire Me
//           </a>

//           {/* Mobile Burger */}
//           <button
//             className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <motion.span
//               animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
//               className="block w-5 h-0.5 bg-white origin-center transition-transform"
//             />
//             <motion.span
//               animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
//               className="block w-5 h-0.5 bg-white"
//             />
//             <motion.span
//               animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
//               className="block w-5 h-0.5 bg-white origin-center"
//             />
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             className="fixed top-16 inset-x-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/5"
//           >
//             <ul className="flex flex-col px-6 py-4 gap-1">
//               {navLinks.map(({ label, href }) => (
//                 <li key={href}>
//                   <a
//                     href={href}
//                     onClick={(e) => handleNavClick(e, href)}
//                     className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//               <li className="pt-2">
//                 <a
//                   href="#contact"
//                   onClick={(e) => handleNavClick(e, "#contact")}
//                   className="block text-center px-4 py-3 text-sm font-medium bg-indigo-600 text-white rounded-lg"
//                 >
//                   Hire Me
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Navbar;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
                        : "bg-transparent"
                    }`}
            >
                {/* subtle glow line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                    {/* 🔥 Logo */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, "#home")}
                        className="text-white font-bold text-lg tracking-tight flex items-center gap-1"
                    >
                        <span className="text-indigo-400">&lt;</span>
                        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                            Hashim
                        </span>
                        <span className="text-indigo-400">/&gt;</span>
                    </a>

                    {/* 🔥 Desktop Links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <li key={href}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleNavClick(e, href)}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${isActive
                                                ? "text-white"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/20 rounded-lg"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                            />
                                        )}
                                        <span className="relative z-10">{label}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* 🔥 CTA Button */}
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                    >
                        Hire Me
                    </a>

                    {/* 🔥 Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-0.5 bg-white origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-5 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-0.5 bg-white origin-center"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* 🔥 Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 inset-x-0 z-40 bg-black/90 backdrop-blur-2xl border-b border-white/5"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-1">
                            {navLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        onClick={(e) => handleNavClick(e, href)}
                                        className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-1 rounded-lg transition-all duration-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}

                            <li className="pt-2">
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, "#contact")}
                                    className="block text-center px-4 py-3 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600"
                                >
                                    Hire Me
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;