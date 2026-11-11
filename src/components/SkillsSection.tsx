import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'PROGRAMMING',
    badge: 'CORE LOGIC',
    items: ['C', 'C++', 'Java', 'JavaScript'],
    description: 'Object-oriented programming in C++ and Java, algorithm implementation, and structured software logic.',
    stat: 'COMPILED & SCRIPT',
  },
  {
    title: 'FRONTEND',
    badge: 'USER INTERFACE',
    items: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Vite'],
    description: 'Crafting responsive user interfaces, fluid component trees, and high-performance client applications.',
    stat: 'FAST & RESPONSIVE',
  },
  {
    title: 'AI & PROTOCOLS',
    badge: 'INTELLIGENCE',
    items: ['Prompt Engineering', 'AI-assisted Development', 'MCP', 'AI Agents'],
    description: 'Autonomous agent design, context pipeline orchestration, and Model Context Protocol integrations.',
    stat: 'AGENTIC SYSTEMS',
  },
  {
    title: 'AI TOOLS',
    badge: 'ACCELERATION',
    items: ['ChatGPT', 'Claude', 'Gemini', 'Cursor', 'Perplexity', 'Antigravity'],
    description: 'Advanced generative workflows, rapid architecture prototyping, and automated code review.',
    stat: 'STATE-OF-THE-ART',
  },
  {
    title: 'TOOLS & ECOSYSTEM',
    badge: 'WORKFLOW',
    items: ['Git', 'GitHub', 'VS Code', 'Figma'],
    description: 'Git-based source control, UI mockups, terminal toolchains, and developer workflow automation.',
    stat: 'VERSION CONTROL',
  },
  {
    title: 'BACKEND SERVICES',
    badge: 'PERSISTENCE',
    items: ['Firebase', 'Supabase'],
    description: 'Cloud document and relational datastores, auth pipelines, real-time sync, and security rules.',
    stat: 'CLOUD & REALTIME',
  },
];

const renderSkillIcon = (tech: string) => {
  switch (tech) {
    case 'Antigravity':
      return (
        <svg
          className="w-2.5 h-2.5 shrink-0 text-[#A16207]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.5L21.5 19H2.5L12 2.5ZM12 7.8L6.8 17H17.2L12 7.8Z" />
        </svg>
      );
    case 'ChatGPT':
      return (
        <svg className="w-2.5 h-2.5 shrink-0 opacity-75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22.28 9.37a5.99 5.99 0 0 0-.52-4.93 6.08 6.08 0 0 0-6.19-2.91 6.01 6.01 0 0 0-4.66-2.13 6.07 6.07 0 0 0-5.78 4.2 6.02 6.02 0 0 0-4.04 2.92 6.06 6.06 0 0 0 .73 6.8 5.98 5.98 0 0 0 .52 4.93 6.08 6.08 0 0 0 6.19 2.91 6.02 6.02 0 0 0 4.66 2.13 6.07 6.07 0 0 0 5.78-4.2 6.02 6.02 0 0 0 4.04-2.92 6.06 6.06 0 0 0-.73-6.8zm-9.39 12.63a4.57 4.57 0 0 1-2.95-1.07l.15-.08 4.88-2.82a.78.78 0 0 0 .39-.68v-6.88l2.06 1.19v5.69a4.58 4.58 0 0 1-4.53 4.57zm-8.8-4.6a4.56 4.56 0 0 1-.58-3.1 4.52 4.52 0 0 1 1.63-2.7l.15.09 4.88 2.82a.77.77 0 0 0 .78 0l5.96-3.44v2.38l-4.93 2.85a4.58 4.58 0 0 1-7.89 1.1zM3.46 8.7a4.55 4.55 0 0 1 2.37-2.03l-.01.17v5.63a.77.77 0 0 0 .39.67l5.96 3.44-2.06 1.19-4.92-2.84a4.58 4.58 0 0 1-1.73-6.26zm14.15 4.08l-5.96-3.44 2.06-1.19 4.92 2.84a4.58 4.58 0 0 1 1.73 6.26 4.55 4.55 0 0 1-2.37 2.03v-5.83a.77.77 0 0 0-.38-.67zm2.33-3.66l-.15-.09-4.88-2.82a.77.77 0 0 0-.78 0L8.17 9.65V7.27l4.93-2.85a4.58 4.58 0 0 1 7.89 1.1 4.56 4.56 0 0 1 .58 3.1 4.52 4.52 0 0 1-1.63 2.7zm-8.8-5.12a4.57 4.57 0 0 1 2.95 1.07l-.15.08-4.88 2.82a.78.78 0 0 0-.39.68v6.88l-2.06-1.19V8.01a4.58 4.58 0 0 1 4.53-4.57zM12 13.5l-2.6-1.5 2.6-1.5 2.6 1.5-2.6 1.5z"/>
        </svg>
      );
    case 'Claude':
      return (
        <svg className="w-2.5 h-2.5 shrink-0 opacity-75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.8 2.2L12 7.8 10.2 2.2H7.6l2.8 7.3L3.8 6.8v2.6l6.3 2.5-6.3 2.5v2.6l6.6-2.7-2.8 7.3h2.6L12 16l1.8 5.6h2.6l-2.8-7.3 6.6 2.7v-2.6l-6.3-2.5 6.3-2.5V6.8l-6.6 2.7 2.8-7.3h-2.6z"/>
        </svg>
      );
    case 'Gemini':
      return (
        <svg className="w-2.5 h-2.5 shrink-0 opacity-75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C12 7.52 7.52 12 2 12c5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z"/>
        </svg>
      );
    case 'Cursor':
      return (
        <svg className="w-2.5 h-2.5 shrink-0 opacity-75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M5.5 2L18.5 12L12.5 13.5L16 21L13 22.5L9.5 15L5.5 19V2Z"/>
        </svg>
      );
    case 'Perplexity':
      return (
        <svg className="w-2.5 h-2.5 shrink-0 opacity-75" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.1l-6 3.75-6-3.75V8.9l6-3.75 6 3.75v7.2zM11 9h2v6h-2V9z"/>
        </svg>
      );
    default:
      return null;
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative z-10 w-full bg-[#F8F7F4] text-[#141312] font-sans selection:bg-[#EAD8C7] selection:text-[#181614] py-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Ambient Tints */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#A16207]/[0.025] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#D97706]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#A16207]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECH MATRIX
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#A16207]/80 via-[#D0C7BC]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-[#141312] drop-shadow-[0_1px_2px_rgba(20,18,16,0.06)]">
              ARCHITECTURAL MASTERY.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#A16207] drop-shadow-[0_2px_12px_rgba(180,83,9,0.15)]">
              PRECISION APPLIED.
            </span>
          </h2>
        </motion.div>

        {/* Refined 6-Category Grid: Responsive (1 col small, 2 col med, 3 col large) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative p-6 sm:p-8 rounded-sm border border-[#E2DDD5] bg-white shadow-[0_6px_24px_rgba(24,22,20,0.04)] hover:shadow-[0_16px_40px_rgba(24,22,20,0.08)] hover:border-[#A16207] transition-all duration-500 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Top Subtle Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A16207]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Minimal Pins */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#A16207]/40 group-hover:border-[#A16207] transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#A16207]/40 group-hover:border-[#A16207] transition-colors duration-300" />

                {/* Card Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#A16207]">
                    {block.badge}
                  </span>
                  <span className="text-[9.5px] font-mono px-2 py-0.5 border border-[#E2DDD5] text-[#5A534B] bg-[#FAF9F6] rounded-xs font-medium group-hover:border-[#A16207]/40 transition-colors">
                    {block.stat}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl sm:text-3xl font-normal tracking-wide text-[#141312] mb-2.5 group-hover:text-[#A16207] transition-colors uppercase leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {block.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs text-[#45413C] font-normal leading-relaxed mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {block.description}
                </p>
              </div>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#ECE7E0]">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#E2DDD5] bg-[#FAF9F6] text-[#332F2A] group-hover:border-[#A16207]/40 group-hover:bg-[#FEF3C7] group-hover:text-[#92400E] transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {renderSkillIcon(tech)}
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
