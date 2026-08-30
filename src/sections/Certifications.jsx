import SectionHeading from "../components/SectionHeading";
import CertificateCard from "../components/CertificateCard";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-base-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="certifications" title="Certifications" />
        <div className="grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <CertificateCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
