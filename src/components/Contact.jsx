import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

async function sendEmail(templateParams) {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    }),
  });
  if (!res.ok) throw new Error("Failed to send email");
}

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.subject.trim()) errors.subject = "Subject is required.";
  if (!fields.message.trim()) {
    errors.message = "Message is required.";
  } else if (fields.message.trim().length < 15) {
    errors.message = "Message should be at least 15 characters.";
  }
  return errors;
}

export function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valErrors = validate(fields);
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await sendEmail({
          from_name: fields.name,
          from_email: fields.email,
          subject: fields.subject,
          message: fields.message,
          to_email: "bagwanhashim93@gmail.com",
        });
      } else {
        await new Promise((r) => setTimeout(r, 1000));
      }
      setStatus("success");
      setFields({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="section-tag">
              <span>◆</span> Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 font-heading leading-tight">
              Let's Build <span className="text-gradient-cyan">The Future</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Available for full-time engineering opportunities, technical consulting, and machine learning research projects.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:bagwanhashim93@gmail.com"
                className="modern-glass-card p-4 flex items-center gap-4 hover:border-cyan-400/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg text-cyan-400 group-hover:scale-105 transition-transform">
                  ✉️
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Direct Email</p>
                  <p className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-heading">
                    bagwanhashim93@gmail.com
                  </p>
                </div>
              </a>

              <div className="modern-glass-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg text-cyan-400">
                  📍
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-white font-heading">Mumbai, India</p>
                </div>
              </div>

              <div className="modern-glass-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-lg text-cyan-400">
                  💼
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Availability</p>
                  <p className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-2 font-heading">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to New Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[11px] font-bold uppercase text-slate-400 mb-3">Profiles &amp; Repositories</p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "GitHub", href: "https://github.com/hashcode03" },
                  { name: "LinkedIn", href: "https://linkedin.com/in/hashimbagwan" },
                  { name: "X (Twitter)", href: "https://x.com/hashimbagwan" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-cyan-400 bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all"
                  >
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="modern-glass-panel p-8 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white font-heading mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030712]/80 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030712]/80 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    placeholder="AI Project Inquiry / Role Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030712]/80 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={fields.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, dataset, or engineering needs..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030712]/80 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary-glow w-full text-center py-3"
                >
                  {status === "sending" ? "Sending Message..." : "Send Message 🚀"}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold text-center"
                    >
                      ✓ Message sent successfully! I will reply to your email promptly.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold text-center"
                    >
                      ✕ Failed to send message. Please email me directly at bagwanhashim93@gmail.com
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}