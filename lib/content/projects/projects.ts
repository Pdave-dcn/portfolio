// src/content/projects/projects.ts
export type ProjectType = "Full-Stack" | "Frontend" | "Backend" | "Mobile";

export interface ProjectMeta {
  id: string;
  type: ProjectType;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  featured: boolean;
  screenshots: string[];
  coreTechnologies: string[];
}

export const PROJECTS_META: readonly ProjectMeta[] = [
  {
    id: "klasmwen",
    type: "Full-Stack",
    tags: ["Social-Learning", "EdTech"],
    links: {
      demo: "https://klasmwen.netlify.app/",
      repo: "https://github.com/Pdave-dcn/KlasMwen",
    },
    featured: true,
    screenshots: [
      "/klasmwen-landing-page.jpg",
      "/klasmwen-post.jpg",
      "/klasmwen-profile.jpg",
      "/klasmwen-report-moderation-1.jpg",
      "/klasmwen-avatar-selection.jpg",
    ],
    coreTechnologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
    ],
  },

  // textnode, waldo …
] as const;
