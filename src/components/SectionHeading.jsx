import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="section-eyebrow mb-3">// {eyebrow}</div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-3 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
