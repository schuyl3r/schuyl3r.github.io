# Schuyler Ng — Portfolio

I built this to actually learn agentic AI-assisted development hands-on
— by throwing a real project at Claude instead of another todo-app
tutorial. It also happens to be my portfolio, the place I point people
curious about my work as a frontend engineer, but that's the byproduct,
not the point.

**Live site:** [schuyl3r.github.io](https://schuyl3r.github.io)

## Building it with Claude

Rather than writing every line by hand, here's what that actually
looked like:

- **Planning before building.** Every section started as a proposed file/
  component structure I reviewed and corrected before any code was written
  (e.g. catching that an unwanted dark-mode media query needed to go, or
  that a sticky nav and a specific Hero narrative needed to be added to the
  plan).
- **Owning the content and decisions.** All résumé content, copy, and
  factual claims came from me verbatim — the agent was instructed not to
  invent metrics or fill gaps with placeholder content. Design calls (font
  pairing, color palette, whether to label the nav's home link "Hero") were
  presented as options with trade-offs, and I picked.
- **Verifying, not trusting blindly.** Each milestone was checked with
  `eslint`, `next build`, and an actual headless-browser render (desktop +
  mobile viewports, console-error checks) before being called done — not
  just "the code looks right."
- **Iterating like a real PR review.** The color/typography pass, for
  example, went through a suggestion → confirmation → implementation →
  visual-verification loop, the same shape as reviewing a teammate's PR.

The goal was to come out the other side with a working portfolio *and* a
clearer sense of how to use agentic coding tools effectively — as a
force multiplier directed by someone who still understands the codebase,
not a black box.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens defined as
  CSS custom properties in an `@theme` block, no `tailwind.config.js`
- [Lucide](https://lucide.dev) for icons
- [Geist Sans / Geist Mono](https://vercel.com/font) via `next/font`
- Deployed on [Vercel](https://vercel.com)

## Features

- **Sections:** Hero, Experience (case-study cards + a brief one-liner for
  earlier roles), Projects (earlier/personal work), Skills (grouped),
  Contact
- **Sticky anchor nav** with jump links to each section
- Mobile-first, responsive layout, 8px spacing rhythm
- One restrained scroll fade-in interaction, gated behind
  `prefers-reduced-motion`
- WCAG AA contrast minimum across the palette
- Light mode only for now — dark mode is an intentional stretch goal, not
  an oversight

## Getting started

```bash
npm install
npm run dev       # start the dev server at localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # eslint
```

## Project structure

```
src/
  app/                  # Next.js App Router entry (layout, page, globals.css)
  components/
    sections/           # Hero, Experience, Projects, Skills, Contact
    experience/         # ExperienceCard, ExperienceBrief
    projects/           # ProjectCard
    skills/             # SkillGroup
    layout/             # Nav
    ui/                 # Container, Button, Badge, SectionHeading, FadeIn
  data/                 # Typed content — experience, projects, skills, contact
  hooks/                # usePrefersReducedMotion
  types/                # Shared content type definitions
public/
  resume.pdf
```

Content lives in `src/data/*.ts`, typed against `src/types/content.ts`, so
the résumé/project/skill copy stays in one verifiable place instead of
scattered across JSX.

## Contact

- Email: schuylerng@gmail.com
- LinkedIn: [linkedin.com/in/schuyler-ng](https://linkedin.com/in/schuyler-ng)
- GitHub: [github.com/schuyl3r](https://github.com/schuyl3r)
