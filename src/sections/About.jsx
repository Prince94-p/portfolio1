import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const traits = [
  "Curious learner",
  "Self-driven",
  "Fast learner",
  "Strong problem-solver",
  "Loves experimenting with AI",
  "Growth mindset",
  "Team player",
  "Always improving",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="about"
          title="Still a student — building like it's the job."
        />

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-slate-300 leading-relaxed"
          >
            <p>
              I'm a 2nd-year B.Tech Computer Engineering student at CSPIT,
              CHARUSAT. I'm not going to pretend I have years of experience —
              what I do have is a habit of picking up a tool, building
              something real with it, and figuring out the rest along the way.
            </p>
            <p>
              I am passionate about learning new technologies and believe the
              best way to grow is by learning from experienced developers. As
              a student, I see every project as an opportunity to improve my
              skills, ask questions, and gain real-world experience. I enjoy
              collaborating with others, experimenting with new ideas, and
              continuously building projects that help me become a better
              software engineer.
            </p>
            <p>
              Right now that means frontend development with React, getting
              comfortable with Tailwind CSS, and using AI tools like Claude,
              ChatGPT, and Cursor as part of how I actually build — not as a
              shortcut, but as a way to learn faster and ship more. I've also
              started exploring how AI agents and the Model Context Protocol
              (MCP) work under the hood.
            </p>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7 h-fit"
          >
            <h3 className="section-eyebrow mb-5">// how i work</h3>
            <div className="grid grid-cols-2 gap-3">
              {traits.map((t) => (
                <div
                  key={t}
                  className="text-sm text-slate-300 bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5"
                >
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
