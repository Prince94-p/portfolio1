import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiExternalLink, FiLoader } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

export default function Resume() {
  const [downloading, setDownloading] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}Prince_Patel_Resume.pdf`;

  const handleDownload = async (e) => {
    e.preventDefault();
    if (downloading) return;

    setDownloading(true);
    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error("Network response was not ok");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Prince_Patel_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      console.error("Download failed, falling back to direct link:", err);
      // Fallback: open file directly in new tab/window
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  };

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
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="btn-primary shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {downloading ? (
                <>
                  <FiLoader className="animate-spin" size={18} /> Downloading...
                </>
              ) : (
                <>
                  <FiDownload size={18} /> Download Resume (PDF)
                </>
              )}
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <FiExternalLink size={18} /> View in New Tab
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
