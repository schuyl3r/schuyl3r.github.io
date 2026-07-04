import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { earlierProjects, featuredProjects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <FadeIn>
          <p className="mb-4 max-w-xl text-base text-muted">
            After a React internship at BotBros AI, I started building on my
            own. The earlier projects below eventually led to these.
          </p>
          <SectionHeading>Projects</SectionHeading>
        </FadeIn>
        <div className="grid items-stretch gap-8 sm:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.name} className="h-full" delay={index * 40}>
              <FeaturedProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        <p className="font-heading mt-16 mb-6 text-[13px] font-semibold tracking-wider text-subtle uppercase">
          Earlier projects
        </p>
        <div className="grid items-stretch gap-6 sm:grid-cols-2">
          {earlierProjects.map((project, index) => (
            <FadeIn key={project.name} className="h-full" delay={index * 40}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
