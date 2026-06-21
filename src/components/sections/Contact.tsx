import { Briefcase, Code2, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactLinks } from "@/data/contact";
import type { ContactIcon } from "@/types/content";

const icons: Record<ContactIcon, typeof Mail> = {
  mail: Mail,
  linkedin: Briefcase,
  github: Code2,
};

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <FadeIn>
          <SectionHeading>Contact</SectionHeading>
          <ul className="space-y-4">
            {contactLinks.map((link) => {
              const Icon = icons[link.icon];
              const isExternal = link.icon !== "mail";
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-base text-muted transition-colors hover:text-accent"
                  >
                    <Icon className="h-4 w-4 text-subtle" aria-hidden />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
