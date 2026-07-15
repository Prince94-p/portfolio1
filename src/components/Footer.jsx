import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display text-sm text-slate-400">
          prince<span className="text-emerald-400">.</span>dev
        </div>

        <div className="flex items-center gap-5 text-slate-400">
          <a
            href="mailto:princepatel98798@gmail.com"
            className="hover:text-emerald-300 transition-colors"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href="https://github.com/Prince94-p"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-patel-a9b579372"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>

        <div className="font-mono text-xs text-slate-500">
          Made with ❤️ by Prince Patel
        </div>
      </div>
    </footer>
  );
}
