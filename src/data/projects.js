// Real, verified projects have full detail.
// Placeholder projects are marked isPlaceholder: true and rendered with a
// "details coming soon" state — never invented, so nothing here overstates
// what's actually built yet. Fill these in as you finish each project.

export const projects = [
  {
    slug: "anvay",
    name: "ANVAY — Healthcare Interoperability Network",
    isPlaceholder: false,
    tagline:
      "A secure healthcare interoperability platform connecting hospitals through unified patient digital records.",
    description:
      "Enables authorized healthcare institutions and doctors to securely access and update longitudinal patient medical histories across hospitals. Features unique ANVAY Health IDs, immutable record tracking, multi-role access control (Doctor, Hospital, Patient, Admin, Government), document uploads, and auditable emergency/break-glass access.",
    myRole:
      "Engineered the full-stack architecture — including role-based access control, Firebase Firestore data models & security rules, Express server API integration, multilingual i18n support, and a responsive multi-portal dashboard interface.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Firebase",
      "Firestore",
      "Tailwind CSS",
      "i18next",
      "REST APIs",
    ],
    github: "https://github.com/Prince94-p/ANVAY",
    demo: null,
    badge: "Healthcare Interoperability",
    languageStats: [
      { label: "JavaScript", pct: 99.4, color: "#eab308" },
      { label: "CSS", pct: 0.4, color: "#22d3ee" },
      { label: "HTML", pct: 0.2, color: "#f87171" },
    ],
  },
  {
    slug: "scamshield",
    name: "ScamShield",
    isPlaceholder: false,
    tagline:
      "An AI-powered scam detection app built in 3 days at a national hackathon.",
    description:
      "Built with Team HackX at Hacksagon 2026 (ABV-IIITM Gwalior), selected as a finalist among 2100+ registered teams. The app analyzes text, SMS, and email content for scam patterns and returns a live risk score, checks URLs for safety, and includes a 'ScamBait' chatbot that keeps scammers engaged instead of their real targets.",
    myRole:
      "Built the React frontend — landing page, authentication flow, and a real-time threat dashboard — and contributed to parts of the Express backend.",
    tech: ["React", "Vite", "Framer Motion", "React Router", "Node.js", "Express", "JWT"],
    github: "https://github.com/Prince94-p/Hacksagone2k26",
    demo: null,
    badge: "Hacksagon 2026 Finalist",
  },
  {
    slug: "odooxparul",
    name: "ODOO-X-PARUL — Trip & Travel Hub",
    isPlaceholder: false,
    tagline:
      "A comprehensive trip planning, itinerary budgeting, and community travel management platform.",
    description:
      "Built for the Odoo x Parul University hackathon. Features interactive itinerary builders, real-time budget and invoice tracking, packing checklists, community travel feeds, activity discovery, and admin analytics dashboards.",
    myRole:
      "Developed key React frontend modules including itinerary builder, trip notes, packing checklists, activity search, and invoice billing interfaces.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
    github: "https://github.com/Prince94-p/ODOO-X-PARUL",
    demo: null,
    badge: "Hackathon Project",
    languageStats: [
      { label: "JavaScript", pct: 56.2, color: "#eab308" },
      { label: "HTML", pct: 36.2, color: "#f87171" },
      { label: "CSS", pct: 7.6, color: "#22d3ee" },
    ],
  },
  {
    slug: "codementor",
    name: "CodeMentor",
    isPlaceholder: false,
    tagline: "A LeetCode / HackerRank-style coding practice platform, built solo.",
    description:
      "A frontend built from scratch to explore what a coding-practice product actually needs: a problem list, a workspace layout, and a clean way to move between problems.",
    myRole:
      "Designed and built the entire UI — problem listings and coding workspace — with a focus on clean component structure and responsive layout.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    github: "https://github.com/Prince94-p/codementor",
    demo: null,
    badge: null,
    languageStats: [
      { label: "JavaScript", pct: 97.6, color: "#eab308" },
      { label: "CSS", pct: 2.2, color: "#22d3ee" },
      { label: "HTML", pct: 0.2, color: "#f87171" },
    ],
  },
];
