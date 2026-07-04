import type { FeaturedProjectEntry, ProjectEntry } from "@/types/content";

export const featuredProjects: FeaturedProjectEntry[] = [
  {
    name: "Bu-Hao Minton",
    description:
      "Mobile-first badminton session manager — a live queue tool for running actual games at the court, used on your phone while standing there with your group.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Zustand"],
    image: "/bu-hao-minton.png",
    imageAlt: "Bu-Hao Minton badminton session manager screenshot",
    liveUrl: "https://buhaominton.vercel.app",
    repoUrl: "https://github.com/schuyl3r/bu-hao-minton",
  },
  {
    name: "Site Visit Scheduler",
    description:
      "Field visit planner for Metro Manila — traffic-aware travel estimates, number-coding rules, drag-and-drop scheduling. Started as a single HTML file; rebuilt in Next.js using Claude Code.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "dnd-kit",
      "Zustand",
    ],
    image: "/site-visit-scheduler.png",
    imageAlt: "Site Visit Scheduler field planner screenshot",
    liveUrl: "https://site-visit-scheduler.vercel.app",
    repoUrl: "https://github.com/schuyl3r/site-visit-scheduler",
  },
];

export const earlierProjects: ProjectEntry[] = [
  {
    name: "Mel's Collection",
    description:
      "Personalized e-commerce site with lazy loading and consistent component design.",
    stack: ["Next.js", "Tailwind CSS", "Headless UI"],
  },
  {
    name: "Tagalog Transformer",
    description:
      "Web interface for an NLP chatbot built for an undergraduate thesis.",
    stack: ["Next.js", "Tailwind CSS"],
    link: "https://tinyurl.com/Tagalog-Transformer",
    note: "Best Paper Award, 2022 International Conference on Asian Language Processing",
  },
  {
    name: "Intercon Regenerative Center",
    description:
      "Healthcare service website built through multiple stakeholder feedback iterations.",
    stack: ["Vue.js", "styled-components"],
    link: "https://tinyurl.com/Intercon-Regenerative-Center",
  },
];
