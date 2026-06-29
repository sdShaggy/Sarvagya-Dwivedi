export interface NavLink {
  id: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  desc: string;
  bullets: string[];
  stack: string[];
  stat: { label: string; value: string };
  href: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  href?: string;
  credentialId: string;
  logos?: string[];
}

export interface VolunteerRole {
  role: string;
  date: string;
  logo?: string;
   description: string;
}

export interface EducationEntry {
  school: string;
  degree: string;
  date: string;
  gpa?: string;
  membership?: string;
  activities?: string[];
  image?: string;
}

export interface GalleryItem {
  image: string; // path under /public, e.g. "/images/gallery/tennis-1.jpg"
  caption: string; // e.g. "Prakrida '26 — Lawn Tennis Final"
  size?: "wide" | "tall" | "square"; // controls card proportions in the rail
}