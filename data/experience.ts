export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
};

export type Education = {
  degree: string;
  field: string;
  school: string;
};

export const experience: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "Incode Group",
    period: "Dec 2022 — Present",
    current: true,
    description:
      "Building complex, data-heavy web platforms — government licensing tools, compliance dashboards, field operations systems, and AI-assisted analytics — primarily for Saudi Arabian clients. Work spans the full stack: React/Next.js frontends, Django/NestJS backends, interactive map interfaces, real-time features, and Arabic/RTL localization.",
  },
  {
    role: "Frontend Engineer",
    company: "Upwork",
    period: "Nov 2021 — Dec 2022",
    description:
      "Delivered frontend projects for clients across various domains. Worked independently across the full project lifecycle — requirements gathering, implementation, and delivery — with a focus on React, TypeScript, and responsive UI.",
  },
];

export const education: Education[] = [
  {
    degree: "Master's Degree",
    field: "Computer Science / Software Engineering",
    school: "Kharkiv National University of Radio Electronics",
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Science",
    school: "Kharkiv National University of Radio Electronics",
  },
  {
    degree: "Junior Specialist",
    field: "Software Engineering",
    school: "Kharkiv Radio Engineering College",
  },
];
