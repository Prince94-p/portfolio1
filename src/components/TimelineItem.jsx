import { motion } from "framer-motion";

const dotColor = {
  hackathon: "border-emerald-400",
  certification: "border-cyan-400",
  college: "border-amber-400",
};

export default function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0 border-l border-white/10 ml-1.5"
    >
      <span
        className={`absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-base-950 border-2 ${dotColor[item.type]}`}
      />
      <div className="font-mono text-xs text-slate-500 mb-1">{item.date}</div>
      <h3 className="font-semibold text-white mb-1">{item.title}</h3>
      <div className="text-sm text-cyan-300/80 mb-2">{item.place}</div>
      <p className="text-sm text-slate-400 max-w-xl">{item.description}</p>
    </motion.div>
  );
}
