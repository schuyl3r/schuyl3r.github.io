import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-subtle">© 2026 Schuyler Ng</p>
        <p className="text-[13px] text-subtle">
          Built with Next.js &amp; Tailwind CSS ·{" "}
          <a
            href="https://github.com/schuyl3r/schuyl3r.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            View source
          </a>
        </p>
      </Container>
    </footer>
  );
}
