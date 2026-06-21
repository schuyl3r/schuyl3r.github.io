import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold whitespace-nowrap text-foreground"
        >
          Schuyler Ng
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="flex gap-3 font-mono text-sm font-medium text-muted sm:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
