import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Connect to your backend API using the environment variable!
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to connect to the server. Is your backend running?");
    }
  };

  return (
    <section id="contact" className="py-28 bg-black relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whether you have a project in mind, a collaboration idea, or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Email card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c0c0c] border border-white/[0.07]">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-1">Email</p>
                <a
                  href="mailto:bagwanhashim93@gmail.com"
                  className="text-white hover:text-indigo-400 transition-colors font-medium"
                >
                  bagwanhashim93@gmail.com
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c0c0c] border border-white/[0.07]">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-1">Location</p>
                <p className="text-white font-medium">India 🇮🇳</p>
                <p className="text-gray-500 text-sm">Open to Remote Opportunities</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0c0c0c] border border-white/[0.07]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-medium">Available for Internships & Freelance</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.07] text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0c0c0c] border border-white/[0.07] rounded-2xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-500 font-medium uppercase tracking-wider" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-gray-500 font-medium uppercase tracking-wider" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wider" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 font-medium uppercase tracking-wider" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

//--------------------c-----------------------------------------//

// import { motion } from "framer-motion";
// import { useState } from "react";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [sent, setSent] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ⚠️ Still fake — you'll replace this later with EmailJS / backend
//     console.log(formData);

//     setSent(true);
//     setTimeout(() => setSent(false), 3000);

//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <section id="contact" className="py-28 bg-black relative">
//       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
//       <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full mb-4">
//             Contact
//           </span>

//           <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
//             Let’s Build Something Real
//           </h2>

//           <p className="text-gray-500 max-w-xl mx-auto">
//             Got an idea, project, or opportunity? Don’t just think about it — reach out.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* LEFT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             {/* Email */}
//             <div className="p-5 rounded-2xl bg-[#0c0c0c] border border-white/[0.07]">
//               <p className="text-xs text-gray-500 uppercase mb-1">Email</p>
//               <a
//                 href="mailto:bagwanhashim93@gmail.com"
//                 className="text-white font-medium hover:text-indigo-400"
//               >
//                 bagwanhashim93@gmail.com
//               </a>
//             </div>

//             {/* Location */}
//             <div className="p-5 rounded-2xl bg-[#0c0c0c] border border-white/[0.07]">
//               <p className="text-xs text-gray-500 uppercase mb-1">Location</p>
//               <p className="text-white font-medium">India 🇮🇳</p>
//               <p className="text-gray-500 text-sm">
//                 Open to Remote & Freelance Work
//               </p>
//             </div>

//             {/* Status */}
//             <div className="p-5 rounded-2xl bg-[#0c0c0c] border border-white/[0.07]">
//               <p className="text-xs text-gray-500 uppercase mb-1">Status</p>
//               <p className="text-emerald-400 font-medium">
//                 ● Available for Internships
//               </p>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE FORM */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="bg-[#0c0c0c] border border-white/[0.07] rounded-2xl p-8 space-y-5"
//             >
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   required
//                   className="input"
//                 />

//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   required
//                   className="input"
//                 />
//               </div>

//               <input
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Subject"
//                 required
//                 className="input"
//               />

//               <textarea
//                 name="message"
//                 rows={5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message..."
//                 required
//                 className="input resize-none"
//               />

//               <button
//                 type="submit"
//                 className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200"
//               >
//                 {sent ? "Message Sent ✓" : "Send Message"}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;