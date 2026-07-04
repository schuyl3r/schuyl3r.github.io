import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-heading mb-8 text-sm font-semibold tracking-widest text-muted uppercase">
      {children}
    </h2>
  );
}
