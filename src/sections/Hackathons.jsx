import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { timeline } from "../data/hackathons";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 bg-base-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="hackathons & milestones"
          title="So far"
          subtitle="National-level hackathons, college events, and the certifications along the way."
        />
        <div className="max-w-2xl">
          {timeline.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
