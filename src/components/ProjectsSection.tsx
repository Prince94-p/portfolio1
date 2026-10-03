import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface FeaturedProject {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  demoUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

interface SecondaryProject {
  title: string;
  category: string;
  event: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    number: '01',
    title: 'WeatherGPT',
    category: 'AI / WEATHER INTELLIGENCE',
    description:
      'National Weather Intelligence Platform featuring real-time weather monitoring, AI assistant, citizen reporting, map-based visualization, and multi-language support.',
    githubUrl: 'https://github.com/Prince94-p',
    demoUrl: 'https://weather-a9f6b.web.app',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'OpenAI API',
      'Tailwind CSS',
      'REST APIs',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'Weather Intelligence' },
      { label: 'ASSISTANT', value: 'AI-Powered Insights' },
      { label: 'INTERFACE', value: 'Map & Multilingual' },
    ],
  },
  {
    number: '02',
    title: 'PixelProof',
    category: 'IMAGE FORENSICS / AI ANALYSIS',
    description:
      'Image forensics and authenticity analysis platform. Implements Error Level Analysis (ELA), copy-move detection, noise consistency checks, and EXIF metadata extraction.',
    githubUrl: 'https://github.com/Prince94-p/PixelProof',
    demoUrl: 'https://pixelproof-1.onrender.com',
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'FastAPI',
      'OpenCV',
      'NumPy',
      'REST APIs',
    ],
    metrics: [
      { label: 'ANALYSIS', value: 'Multi-Signal ELA & EXIF' },
      { label: 'DETECTION', value: 'Copy-Move & Noise' },
      { label: 'DEPLOYMENT', value: 'Render Cloud' },
    ],
  },
  {
    number: '03',
    title: 'Carbon Core',
    category: 'SUSTAINABILITY / CARBON INTELLIGENCE',
    description:
      'Industrial carbon intelligence platform designed to help industries identify major emission sources and leak points and explore circular alternatives with estimated CO₂ savings and cost impact.',
    githubUrl: 'https://github.com/Prince94-p/Hackout',
    demoUrl: 'https://hackout-s9bc.onrender.com/',
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Supabase',
    ],
    metrics: [
      { label: 'HONOR', value: "HackOut'26 Rank 1 / 3,453" },
      { label: 'QUALIFIER', value: 'DA-IICT Offline Finalist' },
      { label: 'SYSTEM', value: 'Industrial Intelligence' },
    ],
  },
  {
    number: '04',
    title: 'ANVAY Healthcare Network',
    category: 'HEALTHCARE / INTEROPERABILITY PLATFORM',
    description:
      'Secure healthcare interoperability platform connecting hospitals through unified digital records, unique Health IDs, multi-role access control, document uploads, and auditable emergency access.',
    githubUrl: 'https://github.com/Prince94-p/ANVAY',
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Firebase',
      'Firestore',
      'REST APIs',
    ],
    metrics: [
      { label: 'SECURITY', value: 'Multi-Role RBAC & Audit' },
      { label: 'RECORDS', value: 'Longitudinal Health ID' },
      { label: 'DATABASE', value: 'Firebase Firestore' },
    ],
  },
];

const secondaryProjects: SecondaryProject[] = [
  {
    title: 'SCAMSHIELD',
    category: 'AI / CYBERSECURITY',
    event: 'HACKSAGON 2026 • IIITM GWALIOR',
    description:
      'An AI-powered scam detection platform designed to identify suspicious and potentially fraudulent email content, combining a Gmail-focused workflow with a web interface for analyzing messages and surfacing scam indicators. Built with Team HackX (National Finalist).',
    tech: [
      'React.js',
      'Vite',
      'Framer Motion',
      'Node.js',
      'Express.js',
      'JWT',
      'REST APIs',
    ],
    githubUrl: 'https://github.com/Prince94-p/Hacksagone2k26',
  },
  {
    title: 'Odoo × Parul University Hackathon',
    category: 'HACKATHON PARTICIPATION',
    event: 'PARUL UNIVERSITY',
    description:
      'Collaborative hackathon project developed during the Odoo × Parul University Hackathon sprint.',
    tech: ['Hackathon Sprint', 'Web Development'],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-20 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

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
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {featuredProjects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 border border-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>LIVE DEMO</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#1F1914] text-[#EAD8C7] hover:text-[#FFF5EB] text-[10.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW GITHUB</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* ================= MORE PROJECTS (COMPACT GRID) ================= */}
        <div className="mt-24 sm:mt-32">
          {/* Eyebrow Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-4"
          >
            <span
              className="text-[10.5px] font-medium tracking-[0.3em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ARCHIVE // EXPLORATIONS
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-8"
          >
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight uppercase leading-[0.9] text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              MORE PROJECTS.
            </h3>
            <p
              className="text-xs text-[#A8988B] font-light max-w-sm mt-2 sm:mt-0 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Additional hackathon builds, architectural prototypes, and engineering sprints.
            </p>
          </motion.div>

          {/* Grid of secondary projects: Desktop 2 columns, Mobile 1 column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {secondaryProjects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative p-7 sm:p-8 rounded-sm border border-[#8C6D4F]/35 bg-[#0D0B09]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/70 hover:shadow-[0_12px_35px_rgba(212,175,55,0.1)] group flex flex-col justify-between"
              >
                {/* Top Subtle Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Minimal Pins */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                      {proj.category}
                    </span>
                    <span className="text-[9.5px] font-mono px-2 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F]">
                      {proj.event}
                    </span>
                  </div>

                  <h4
                    className="text-2xl sm:text-3xl font-normal tracking-wide text-white mb-2.5 group-hover:text-[#F7E7C4] transition-colors uppercase leading-tight"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {proj.title}
                  </h4>

                  <p
                    className="text-xs text-[#A8988B] font-light leading-relaxed mb-6 group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#8C6D4F]/20 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9.5px] font-mono uppercase rounded-xs border border-[#8C6D4F]/30 bg-[#14100D] text-[#C4B29E]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-[10px] font-mono text-[#D4AF37] border border-[#8C6D4F]/40 bg-[#16120E] hover:border-[#D4AF37] hover:text-white uppercase tracking-wider transition-all duration-300"
                    >
                      <span>VIEW GITHUB</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;