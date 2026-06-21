import type { ExperienceEntry } from "@/types/content";

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
    role: "Software Engineer · Full-time",
    dates: "Oct 2022 – Oct 2024",
    bullets: [
      "Led a team of five through the Talon.One integration, rebuilding the rewards and campaigns experience inside the CL app",
      "Designed and shipped an internal admin portal from scratch (Vue.js, Tailwind CSS), cutting B2B invoicing turnaround by 75% within five months",
      "Rebuilt the SariSuki Webstore UI for a company-wide rebrand, working directly with design to keep the new system consistent across every page",
      "Took on mobile work for the first time in the role: redesigned the Supah app in Flutter (GetX) and integrated MoEngage analytics into the CL app (BLoC)",
      "Set up engagement tracking that gave the product team direct visibility into real feature usage",
    ],
  },
  {
    company: "Sarisuki Stores Inc.",
    role: "Front-End Consultant · Part-time",
    dates: "Nov 2024 – Jan 2025",
    bullets: [
      "Built a customer-facing PWA from the ground up (Next.js, TypeScript, Tailwind CSS, Ionic, Capacitor) covering home, search, and product flows",
      "Wired in Google Maps for store locations, Algolia for product search, and SMS OTP for account access",
      "Worked directly with backend engineers on API integration and owned client-side state with Zustand",
    ],
  },
  {
    company: "Infor PSSC Inc.",
    role: "Associate Software Engineer · Full-time",
    dates: "Mar 2022 – Sep 2022",
    bullets: [
      "Ramped up on Lawson's Mobile Supply Chain Management fast enough to turn around and lead a reverse knowledge-transfer session for the rest of the team",
      "Resolved backend bug tickets across multiple modules in Java, improving platform stability",
      "Refactored legacy code for performance and maintainability",
    ],
  },
];
