import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <FadeIn>
          <SectionHeading>Experience</SectionHeading>
        </FadeIn>
        <div className="space-y-6">
          {experience.map((entry, index) => (
            <FadeIn key={`${entry.company}-${entry.role}`} delay={index * 40}>
              <ExperienceCard entry={entry} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
