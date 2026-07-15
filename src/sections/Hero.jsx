import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiArrowRight, FiFileText } from "react-icons/fi";
import avatar from "../assets/avatar.jpg";
import { scrollToId } from "../utils/scrollTo";

const phrases = [
  "Building Ideas into Reality.",
  "Passionate About AI & Frontend Development.",
  "Learning from Experienced Developers.",
  "Creating Projects That Solve Real Problems.",
  "Curious Mind. Growth Mindset.",
  "Always Exploring New Technologies.",
  "Open to Internships, Hackathons & Collaboration.",
  "Building Today. Improving Every Day.",
];

function useTypewriter(words, speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(phrases);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-grid-glow"
    >
      {/* floating orbs */}
      <div className="absolute top-24 -left-20 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-float" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-300">
              open to internships & hackathons
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
          >
            Hi, I'm <span className="gradient-text">Prince Patel</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-lg sm:text-xl text-cyan-300 h-8 mb-5"
          >
            {typed}
            <span className="border-r-2 border-cyan-300 ml-1 animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-slate-400 max-w-lg mb-8"
          >
            2nd-year Computer Engineering student who learns by building —
            currently deep in frontend development and experimenting with AI
            tools, one project at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <button onClick={() => scrollToId("projects")} className="btn-primary">
              View Projects <FiArrowRight />
            </button>
            <button onClick={() => scrollToId("resume")} className="btn-ghost">
              <FiFileText /> Resume
            </button>
            <button onClick={() => scrollToId("contact")} className="btn-ghost">
              <FiMail /> Contact
            </button>
            <a
              href="https://github.com/Prince94-p"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiGithub /> GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-accent-gradient rounded-[2rem] blur-2xl opacity-20 scale-95" />
          <div className="relative glass-card p-3 w-72 sm:w-80">
            <img
              src={avatar}
              alt="Prince Patel"
              className="rounded-2xl w-full aspect-[4/5] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
