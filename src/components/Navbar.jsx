import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { scrollToId } from "../utils/scrollTo";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hackathons", label: "Hackathons" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  const handleClick = (id) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass !rounded-none border-x-0 border-t-0">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("home")}
          className="font-display font-semibold text-lg text-white"
        >
          prince<span className="gradient-text">.</span>dev
        </button>

        <ul className="hidden md:flex items-center gap-7 font-mono text-[13px]">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`transition-colors duration-200 ${
                  active === link.id
                    ? "text-emerald-300"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden flex flex-col gap-1 px-6 pb-4 font-mono text-sm"
          >
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleClick(link.id)}
                  className={`w-full text-left py-2 ${
                    active === link.id ? "text-emerald-300" : "text-slate-400"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
