import { motion } from "framer-motion";

const badgeClass = {
  comfortable: "badge-comfortable",
  learning: "badge-learning",
  exploring: "badge-exploring",
};

export default function SkillCard({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="glass-card p-6"
    >
      <h3 className="font-mono text-sm text-cyan-300 mb-4">{group.title}</h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill.name} className={badgeClass[skill.level]}>
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
