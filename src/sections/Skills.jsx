import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-base-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="skills"
          title="Toolbox"
          subtitle="Labeled honestly — comfortable, learning, or exploring — instead of pretending I'm an expert."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
