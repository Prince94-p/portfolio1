// Real, verified projects have full detail.
// Placeholder projects are marked isPlaceholder: true and rendered with a
// "details coming soon" state — never invented, so nothing here overstates
// what's actually built yet. Fill these in as you finish each project.

export const projects = [
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
  {
    slug: "lost-found-tracker",
    name: "Lost & Found Tracker",
    isPlaceholder: false,
    tagline: "A campus lost-and-found web app with full user accounts.",
    description:
      "A lost-and-found listing platform with a complete account system — registration, login, password reset, and profile management — backed by Firebase for auth and data.",
    myRole: "Built solo, front to back.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/Prince94-p/Lost-Found-Tracker",
    demo: null,
    badge: null,
    languageStats: [
      { label: "HTML", pct: 41.2, color: "#f87171" },
      { label: "JavaScript", pct: 30.0, color: "#eab308" },
      { label: "CSS", pct: 28.8, color: "#22d3ee" },
    ],
  },
  {
    slug: "ai-soul",
    name: "AI-SOUL",
    isPlaceholder: false,
    tagline: "A solo exploration into AI-driven conversational experiences.",
    description:
      "A personal project exploring how AI models can be wired into an interactive frontend — part of getting hands-on with prompt engineering and AI-assisted development beyond just using the tools.",
    myRole: "Built solo.",
    tech: ["JavaScript", "AI APIs"],
    github: "https://github.com/Prince94-p/AI-SOUL",
    demo: null,
    badge: null,
  },
  {
    slug: "odoo-x-parul",
    name: "ODOO x PARUL",
    isPlaceholder: false,
    tagline: "A team-built Odoo-based project for a Parul University event.",
    description:
      "Built with a team around the Odoo ERP framework for a Parul University hackathon/event — contributed to the frontend as part of the team.",
    myRole: "Team project — contributed to the frontend.",
    tech: ["Odoo", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Prince94-p/ODOO-X-PARUL",
    demo: null,
    badge: "Team Project",
  },
];
