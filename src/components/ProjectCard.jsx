import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className={`glass-card p-7 flex flex-col ${
        project.isPlaceholder ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display text-xl font-semibold text-white">
          {project.name}
        </h3>
        {project.badge && (
          <span className="badge-comfortable whitespace-nowrap">
            {project.badge}
          </span>
        )}
        {project.isPlaceholder && (
          <span className="badge text-slate-400 bg-white/5 border-white/10 whitespace-nowrap">
            coming soon
          </span>
        )}
      </div>

      <p className="text-slate-400 text-sm mb-4">{project.tagline}</p>

      {!project.isPlaceholder && project.description && (
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>
      )}

      {!project.isPlaceholder && project.myRole && (
        <p className="text-sm text-emerald-300/90 mb-4">
          <span className="font-mono text-xs text-emerald-400/70 mr-2">
            my role
          </span>
          {project.myRole}
        </p>
      )}

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {project.languageStats && (
        <div className="mb-5">
          <div className="flex h-1.5 rounded-full overflow-hidden mb-2">
            {project.languageStats.map((l) => (
              <span
                key={l.label}
                style={{ width: `${l.pct}%`, background: l.color }}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-[11px] text-slate-500">
            {project.languageStats.map((l) => (
              <span key={l.label} className="flex items-center gap-1.5">
                <i
                  className="w-2 h-2 rounded-sm inline-block"
                  style={{ background: l.color }}
                />
                {l.label} {l.pct}%
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-auto flex gap-3 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-emerald-300 transition-colors"
          >
            <FiGithub /> repo
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-cyan-300 transition-colors"
          >
            <FiExternalLink /> live demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
