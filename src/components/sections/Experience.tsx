import { ExperienceBrief } from "@/components/experience/ExperienceBrief";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience, experienceBrief } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <FadeIn>
          <SectionHeading>Experience</SectionHeading>
        </FadeIn>
        <div className="space-y-6">
          {experience.map((entry) => (
            <FadeIn key={entry.company}>
              <ExperienceCard entry={entry} />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-6">
          <ExperienceBrief entry={experienceBrief} />
        </FadeIn>
      </Container>
    </section>
  );
}
