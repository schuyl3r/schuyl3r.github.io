import { SkillGroup } from "@/components/skills/SkillGroup";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <FadeIn>
          <SectionHeading>Skills</SectionHeading>
        </FadeIn>
        <div className="space-y-8">
          {skills.map((group, index) => (
            <FadeIn key={group.label} delay={index * 40}>
              <SkillGroup group={group} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
