export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  logo?: string;
}

export interface ExperienceBriefEntry {
  company: string;
  role: string;
  dates: string;
  summary: string;
}

export interface ProjectEntry {
  name: string;
  description: string;
  stack: string;
  link?: string;
  note?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export type ContactIcon = "mail" | "linkedin" | "github";

export interface ContactLink {
  label: string;
  href: string;
  icon: ContactIcon;
}
