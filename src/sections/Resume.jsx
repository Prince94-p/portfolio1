import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="resume" title="Resume" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-10 flex flex-col items-center text-center gap-5 max-w-xl mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent-gradient flex items-center justify-center">
            <FiFileText className="text-base-950" size={26} />
          </div>
          <div>
            <h3 className="font-semibold text-white text-lg mb-1">
              Prince Patel — Resume
            </h3>
            <p className="text-slate-400 text-sm">
              PDF · updated regularly as projects and certifications are added
            </p>
          </div>
          <a href="/resume.pdf" download className="btn-primary">
            <FiDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
