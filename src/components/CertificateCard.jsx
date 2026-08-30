import { motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";

export default function CertificateCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`glass-card p-6 flex gap-4 ${cert.isPlaceholder ? "opacity-50" : ""}`}
    >
      <div className="w-11 h-11 rounded-xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
        <FiAward className="text-base-950" size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm mb-1">{cert.name}</h3>
        <p className="text-slate-400 text-xs mb-2">
          {cert.issuer} {cert.date && `· ${cert.date}`}
        </p>
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-300 hover:underline"
          >
            <FiCheckCircle /> verify
          </a>
        )}
      </div>
    </motion.div>
  );
}
