# Project: Personal Portfolio — schuyl3r.github.io

## Goal

Front-end / software engineer portfolio for Schuyler Ng. Audience:
hiring managers and engineers assessing technical credibility.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, deployed on Vercel

## Design Direction

- Clean, minimal base elevated with intentional typography — not
  plain, not busy
- Motion: subtle and purposeful only (scroll fade-ins, hover states,
  one signature interaction max). No animation for its own sake.
- Respect prefers-reduced-motion
- Light mode is the v1 requirement. Dark mode is a stretch goal —
  build and ship light mode completely first; only add dark mode if
  time remains before other sections are done.
- 8px spacing rhythm, WCAG AA contrast minimum
- No emoji as icons — Lucide only
- Mobile-first responsive layout

## Content Source — use this verbatim, do not invent metrics or facts

### Experience

**Samsung R&D Institute Philippines — Frontend Engineer**
Feb 2025 – Mar 2026

- Shipped features across 5 consecutive product releases (v3.31–v3.35)
- Redesigned multilingual feature architecture via a centralized form
  wrapper, reducing language-feature changes from multiple touchpoints
  to one component
- Eliminated duplicate API calls across the admin panel, improving
  page load performance
- Migrated global state from localStorage to Redux Toolkit
- Standardized hardcoded values across 40 files, consolidated
  repeated UI patterns into shared components
- Team Member of the Month, November 2025

**Sarisuki Stores Inc. — Software Engineer / Front-End Consultant**
Oct 2022 – Jan 2025

- Led a team of 5 integrating a third-party rewards platform
- Built an admin portal from scratch (Vue.js, Tailwind CSS) that
  improved internal invoicing efficiency by 75% within 5 months
- Built a PWA from scratch (Next.js, TypeScript, Tailwind, Capacitor)
  integrating Google Maps, Algolia search, SMS OTP
- Reworked UI of a high-traffic e-commerce platform during full
  rebrand
- Set up a user engagement tracking system for mobile that informed
  product decisions

**Infor PSSC Inc. — Associate Software Engineer**
Mar 2022 – Sep 2022

- Backend bug fixes in Java, refactored legacy modules
- (Keep this brief — one line. It's backend work and dilutes the
  frontend specialist narrative if expanded.)

### Projects (secondary section — earlier/personal work)

- **Mel's Collection** — e-commerce site, Next.js/Tailwind/Headless UI,
  lazy loading for performance + SEO
- **Tagalog Transformer** (tinyurl.com/Tagalog-Transformer) — NLP
  chatbot web interface, undergrad thesis. Note: tied to Best Paper
  Award, 2022 International Conference on Asian Language Processing —
  mention this connection, it's a real differentiator
- **Intercon Regenerative Center** (tinyurl.com/Intercon-Regenerative-Center)
  — healthcare site, Vue.js + styled-components

### Skills (group exactly like this)

- Frontend: JavaScript, TypeScript, React.js, Next.js, Vue.js,
  Redux Toolkit, Zustand, Pinia, Tailwind CSS, PWA
- Mobile: Flutter, Capacitor, Ionic
- Backend & Tools: Node.js, Python, Django, Java, C, Git, Jenkins,
  Postman, MongoDB, MySQL

### Contact

- Email: schuylerng@gmail.com
- LinkedIn: linkedin.com/in/schuyler-ng
- GitHub: github.com/schuyl3r
- Do NOT include phone number anywhere on the site — privacy/spam risk

### Education

BS Computer Science, De La Salle University Manila, 2017–2021

## Sections (in order)

1. Hero — name, "Frontend Engineer," one-line value prop, CTA to
   Experience + resume download (links to /resume.pdf — see note below)
2. Experience — Samsung and Sarisuki as case-study cards using the
   content above verbatim. Infor PSSC as a single brief line, not a
   full card.
3. Projects — secondary section, framed as earlier/personal work
4. Skills — grouped exactly as above
5. Contact — email, LinkedIn, GitHub only

## Code Standards

- Functional components, /src/components
- Tailwind only, no inline styles
- Placeholder-free: use the content above directly, no lorem ipsum,
  no invented numbers
