import type { ExperienceBriefEntry, ExperienceEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    company: "Samsung R&D Institute Philippines",
    role: "Frontend Engineer",
    dates: "Feb 2025 – Mar 2026",
    bullets: [
      "Shipped features across 5 consecutive product releases (v3.31–v3.35)",
      "Redesigned multilingual feature architecture via a centralized form wrapper, reducing language-feature changes from multiple touchpoints to one component",
      "Eliminated duplicate API calls across the admin panel, improving page load performance",
      "Migrated global state from localStorage to Redux Toolkit",
      "Standardized hardcoded values across 40 files, consolidated repeated UI patterns into shared components",
      "Team Member of the Month, November 2025",
    ],
  },
  {
    company: "Sarisuki Stores Inc.",
    role: "Software Engineer / Front-End Consultant",
    dates: "Oct 2022 – Jan 2025",
    bullets: [
      "Led a team of 5 integrating a third-party rewards platform",
      "Built an admin portal from scratch (Vue.js, Tailwind CSS) that improved internal invoicing efficiency by 75% within 5 months",
      "Built a PWA from scratch (Next.js, TypeScript, Tailwind, Capacitor) integrating Google Maps, Algolia search, SMS OTP",
      "Reworked UI of a high-traffic e-commerce platform during full rebrand",
      "Set up a user engagement tracking system for mobile that informed product decisions",
    ],
  },
];

export const experienceBrief: ExperienceBriefEntry = {
  company: "Infor PSSC Inc.",
  role: "Associate Software Engineer",
  dates: "Mar 2022 – Sep 2022",
  summary: "Backend bug fixes in Java, refactored legacy modules.",
};
