import type { ProjectType } from "./types";

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
      "Zustand",
      "Axios",
      "React Query",
      "React Hook Form",
      "Markdown Editor",
      "Zod",
      "Node.js",
      "Express",
      "Passport.js",
      "Pino",
      "Swagger",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
    ],
  },

  {
    id: "textnode",
    type: "Full-Stack",
    tags: ["blog-platform", "content-management"],
    links: {
      demo: "https://textnode-editor.netlify.app/",
      repo: "https://github.com/Pdave-dcn/Fullstack-blog-project",
    },
    featured: true,
    screenshots: [
      "/textnode-dashboard.jpeg",
      "/textnode-reader-articles-page.jpeg",
      "/textnode-new-article-page.jpeg",
      "/textnode-article-read-page.jpeg",
      "/textnode-articles-page.jpeg",
    ],
    coreTechnologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Zustand",
      "Axios",
      "React Query",
      "React Hook Form",
      "TinyMCE",
      "Zod",
      "Node.js",
      "Express",
      "Prisma",
      "Pino",
      "PostgreSQL",
    ],
  },

  {
    id: "waldo",
    type: "Full-Stack",
    tags: ["interactive-web-game", "photo-tagging"],
    links: {
      demo: "https://whereiswaldoonline.netlify.app/",
      repo: "https://github.com/Pdave-dcn/where-is-waldo",
    },
    featured: true,
    screenshots: [
      "/waldo-homepage.jpeg",
      "/waldo-play.jpeg",
      "/waldo-how-to-play.jpeg",
      "/waldo-leaderboard.jpeg",
      "/waldo-info-modal.jpeg",
    ],
    coreTechnologies: [
      "TypeScript",
      "React",
      "Tailwind",
      "Motion",
      "Zustand",
      "Axios",
      "React Query",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
    ],
  },
] as const;
