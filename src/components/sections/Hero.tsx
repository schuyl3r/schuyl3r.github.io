import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <FadeIn>
          <p className="mb-3 text-sm font-medium tracking-wide text-muted uppercase">
            Frontend Engineer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Schuyler Ng
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">
            I build clean, performant interfaces and the systems behind
            them.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            I started in backend, fixing Java bugs and refactoring legacy
            modules at Infor PSSC after graduating from De La Salle
            University with a CS degree. That groundwork led me into
            frontend work at Sarisuki Stores, where I built a PWA and an
            admin portal from scratch, and eventually to Samsung R&amp;D
            Institute Philippines, where I&apos;ve shipped frontend
            features across five consecutive product releases.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#experience">View Experience</Button>
            <Button href="/resume.pdf" download variant="secondary">
              Download Résumé
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
