import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

export default function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}Prince_Patel_Resume.pdf`;

  return (
    <section id="resume" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="resume"
          title="Resume"
          subtitle="Download my resume directly to your device."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-10 text-center flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 shadow-lg shadow-emerald-500/10">
            <FiFileText size={32} />
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Prince Ashvinkumar Patel
          </h3>
          <p className="text-slate-400 text-sm max-w-md mb-8">
            B.Tech Computer Engineering student passionate about frontend development, full-stack systems, and AI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={resumeUrl}
              download="Prince_Patel_Resume.pdf"
              className="btn-primary shadow-lg shadow-emerald-500/20"
            >
              <FiDownload size={18} /> Download Resume (PDF)
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <FiExternalLink size={18} /> View in New Tab
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
