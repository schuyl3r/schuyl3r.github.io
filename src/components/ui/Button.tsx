import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const variantClasses = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  secondary: "border border-border text-foreground hover:bg-surface",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
