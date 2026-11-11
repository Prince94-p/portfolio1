import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface FeaturedProject {
  number: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  isSaaS?: boolean;
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
    title: 'CertFlow',
    category: 'SAAS / CERTIFICATE MANAGEMENT PLATFORM',
    badge: 'PRODUCTION SAAS',
    description:
      'CertFlow is a certificate management platform designed to simplify and streamline certificate generation and distribution. Upload custom templates, import participant data via CSV or Excel, dynamically position recipient credentials, and automate batch generation with direct email delivery and bulk ZIP export.',
    demoUrl: 'https://getcertflow.in/',
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'REST APIs',
      'Automation',
    ],
    metrics: [
      { label: 'PIPELINE', value: 'Automated Batch Generation' },
      { label: 'DELIVERY', value: 'Direct Email & Bulk ZIP Export' },
      { label: 'INGESTION', value: 'Dynamic CSV / Excel Mapping' },
    ],
    isSaaS: true,
  },
  {
    number: '02',
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
    number: '03',
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
    number: '04',
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
    number: '05',
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

const CertFlowStudioVisual: React.FC = () => (
  <div className="relative w-full rounded-md border border-[#E2DDD5] bg-[#FAF9F6] p-3.5 mb-4 overflow-hidden shadow-xs">
    {/* Studio Header Bar */}
    <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#ECE7E0]">
      <div className="flex items-center space-x-1.5">
        <span className="w-2 h-2 rounded-full bg-[#D5CEC4]" />
        <span className="w-2 h-2 rounded-full bg-[#D5CEC4]" />
        <span className="w-2 h-2 rounded-full bg-[#D5CEC4]" />
        <span className="text-[9.5px] font-mono text-[#756E65] ml-1 tracking-wider">certflow.studio</span>
      </div>
      <span className="text-[8.5px] font-mono uppercase px-2 py-0.5 rounded-xs bg-[#DCFCE7] text-[#15803D] font-semibold flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] inline-block animate-pulse" />
        LIVE SAAS
      </span>
    </div>

    {/* Certificate Mockup Canvas */}
    <div className="relative rounded-sm border border-[#D0C7BC]/70 bg-white p-3.5 shadow-inner flex flex-col items-center justify-center text-center">
      {/* Ornamental Frame Border */}
      <div className="absolute inset-1 border border-[#A16207]/20 pointer-events-none rounded-xs" />
      
      <span className="text-[8px] font-mono tracking-[0.25em] uppercase text-[#A16207] font-semibold mb-1.5">
        CERTIFICATE OF ACHIEVEMENT
      </span>
      <div className="my-1 px-3 py-1.5 rounded-xs border border-dashed border-[#A16207]/60 bg-[#FEF3C7]/40">
        <span className="text-[10.5px] font-mono font-bold text-[#141312] tracking-wide">
          [ RECIPIENT FULL NAME ]
        </span>
      </div>
      <span className="text-[7.5px] font-mono text-[#756E65] mt-1">
        DYNAMIC COORDINATE MAPPING • AUTO BATCH RENDER
      </span>
    </div>

    {/* Pipeline Telemetry Strip */}
    <div className="mt-2.5 pt-2 border-t border-[#ECE7E0] flex items-center justify-between text-[9px] font-mono text-[#5A534B]">
      <span>PIPELINE: CSV / XLSX → RENDER</span>
      <span className="text-[#A16207] font-semibold">100% DISPATCHED</span>
    </div>
  </div>
);

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative z-10 w-full bg-[#F8F7F4] text-[#141312] font-sans selection:bg-[#EAD8C7] selection:text-[#181614] pt-20 pb-20 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Tints */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#A16207]/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#D97706]/[0.02] rounded-full blur-[170px] pointer-events-none" />

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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#A16207]/80 via-[#D0C7BC]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-[#141312] drop-shadow-[0_1px_2px_rgba(20,18,16,0.06)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#A16207] drop-shadow-[0_2px_12px_rgba(180,83,9,0.15)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-normal text-[#45413C] max-w-sm mt-4 md:mt-0 leading-relaxed"
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
              <div className="relative w-full rounded-2xl border border-[#E2DDD5] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(24,22,20,0.06)] group overflow-hidden transition-all duration-500 hover:border-[#A16207]">
                
                {/* Top Subtle Amber Border Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A16207]/50 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#A16207]/40 group-hover:border-[#A16207] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#A16207]/40 group-hover:border-[#A16207] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#A16207]/40 group-hover:border-[#A16207] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#A16207]/40 group-hover:border-[#A16207] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#141312]/[0.03] select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-3.5">
                        <span className="text-xs font-mono font-bold text-[#A16207]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.22em] uppercase text-[#756E65]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#141312] mb-3.5 group-hover:text-[#A16207] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-normal text-[#45413C] leading-[1.85] tracking-wide mb-7 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-[#E2DDD5]">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase rounded-sm border border-[#E2DDD5] bg-[#FAF9F6] text-[#332F2A] group-hover:border-[#A16207]/40 group-hover:bg-[#FEF3C7] group-hover:text-[#92400E] transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5 lg:pl-6 lg:border-l lg:border-[#ECE7E0]">
                    {/* Visual Product Thumbnail for CertFlow */}
                    {project.isSaaS && <CertFlowStudioVisual />}

                    <div className="space-y-2.5">
                      <span className="text-[9.5px] font-mono font-semibold tracking-[0.25em] uppercase text-[#756E65] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#EAE5DC] bg-[#FAF9F6] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono font-medium text-[#756E65]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-[#141312]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-sm bg-[#A16207] hover:bg-[#78350F] text-white text-[10.5px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_2px_10px_rgba(161,98,7,0.2)]"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>LIVE DEMO</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-sm border border-[#D0C7BC] bg-white hover:bg-[#F4F1EA] hover:border-[#A16207] text-[#181614] text-[10.5px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-xs"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>VIEW GITHUB</span>
                          <span className="text-xs">↗</span>
                        </a>
                      ) : (
                        <div
                          className="flex-1 inline-flex items-center justify-center space-x-1.5 px-4 py-3 rounded-sm border border-[#E2DDD5] bg-[#FAF9F6] text-[#756E65] text-[10px] font-mono tracking-wider uppercase select-none"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] inline-block animate-pulse" />
                          <span>PRODUCTION SAAS</span>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* ================= MORE PROJECTS (COMPACT GRID) ================= */}
        <div className="mt-20 sm:mt-28">
          {/* Eyebrow Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-3.5"
          >
            <span
              className="text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#A16207]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ARCHIVE // EXPLORATIONS
            </span>
            <div className="w-16 h-[1.5px] bg-gradient-to-r from-[#A16207]/80 via-[#D0C7BC]/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-8"
          >
            <h3
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight uppercase leading-[0.9] text-[#141312]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              MORE PROJECTS.
            </h3>
            <p
              className="text-xs text-[#756E65] font-normal max-w-sm mt-2 sm:mt-0 leading-relaxed"
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
                className="relative p-6 sm:p-8 rounded-sm border border-[#E2DDD5] bg-white shadow-[0_6px_24px_rgba(24,22,20,0.04)] hover:shadow-[0_12px_36px_rgba(24,22,20,0.08)] hover:border-[#A16207] transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Top Subtle Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#A16207]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Minimal Pins */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#A16207]/40 group-hover:border-[#A16207] transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#A16207]/40 group-hover:border-[#A16207] transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-semibold tracking-[0.25em] uppercase text-[#A16207]">
                      {proj.category}
                    </span>
                    <span className="text-[9.5px] font-mono px-2 py-0.5 border border-[#E2DDD5] text-[#5A534B] bg-[#FAF9F6] rounded-xs font-medium">
                      {proj.event}
                    </span>
                  </div>

                  <h4
                    className="text-2xl sm:text-3xl font-normal tracking-wide text-[#141312] mb-2.5 group-hover:text-[#A16207] transition-colors uppercase leading-tight"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {proj.title}
                  </h4>

                  <p
                    className="text-xs text-[#45413C] font-normal leading-relaxed mb-6 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE7E0] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9.5px] font-mono uppercase rounded-xs border border-[#E2DDD5] bg-[#FAF9F6] text-[#45413C]"
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
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-[10px] font-mono font-semibold text-[#A16207] border border-[#D0C7BC] bg-[#FAF9F6] hover:bg-[#181614] hover:text-white hover:border-[#181614] uppercase tracking-wider transition-all duration-300 rounded-xs"
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
