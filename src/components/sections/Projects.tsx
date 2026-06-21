import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <FadeIn>
          <SectionHeading>Projects</SectionHeading>
          <p className="-mt-4 mb-8 text-sm text-muted">
            Earlier and personal work.
          </p>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <FadeIn key={project.name}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
