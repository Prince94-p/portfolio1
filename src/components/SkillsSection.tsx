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
    items: ['ChatGPT', 'Claude', 'Gemini', 'Cursor', 'Perplexity'],
    description: 'Advanced generative workflows, rapid architecture prototyping, and automated code review.',
    stat: 'STATE-OF-THE-ART',
  },
  {
    title: 'TOOLS & ECOSYSTEM',
    badge: 'WORKFLOW',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Antigravity'],
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
                    className="px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#E2DDD5] bg-[#FAF9F6] text-[#332F2A] group-hover:border-[#A16207]/40 group-hover:bg-[#FEF3C7] group-hover:text-[#92400E] transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
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