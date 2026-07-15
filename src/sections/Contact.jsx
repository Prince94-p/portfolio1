import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // NOTE: this form is UI-only for now. Wire it up to a service like
  // Formspree, EmailJS, or your own API endpoint before going live —
  // it currently doesn't send anything.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-24 bg-base-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something."
          subtitle="Open to internships, hackathon teams, and open-source collaborations."
        />

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass-card p-7 flex flex-col gap-4 h-fit"
          >
            <a
              href="mailto:princepatel98798@gmail.com"
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-300 transition-colors"
            >
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <FiMail />
              </span>
              princepatel98798@gmail.com
            </a>
            <a
              href="https://github.com/Prince94-p"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-300 transition-colors"
            >
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <FiGithub />
              </span>
              github.com/Prince94-p
            </a>
            <a
              href="https://www.linkedin.com/in/prince-patel-a9b579372"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-300 transition-colors"
            >
              <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <FiLinkedin />
              </span>
              LinkedIn
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7 flex flex-col gap-4"
          >
            <input
              required
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/50"
            />
            <input
              required
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/50"
            />
            <textarea
              required
              rows={4}
              placeholder="What do you want to build / discuss?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/50 resize-none"
            />
            <button type="submit" className="btn-primary justify-center">
              {sent ? (
                <>
                  <FiCheck /> Message noted
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 font-mono">
              // form UI only — connect to Formspree/EmailJS to actually send
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
