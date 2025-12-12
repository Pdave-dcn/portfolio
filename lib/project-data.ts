export const HERO_DATA = {
  title: "Projects",
  tagline:
    "Practical, full-stack projects that reflect how I think, build, and solve problems.",
} as const;

export type ProjectType = "Full-Stack" | "Frontend" | "Backend" | "Mobile";

export interface Project {
  id: string;
  type: ProjectType;
  tags: string[];
  name: string;
  subtitle: string;
  description: string;
  links: {
    demo: string;
    repo: string;
  };
  featured: boolean;
}

export const PROJECTS: readonly Project[] = [
  {
    id: "klasmwen",
    type: "Full-Stack",
    tags: ["Social-Learning", "EdTech"],
    name: "KlasMwen",
    subtitle: "Educational Social Platform",
    description:
      "A full-stack learning and collaboration platform where students share notes, ask questions, and post study materials.",
    links: {
      demo: "https://klasmwen.netlify.app/",
      repo: "https://github.com/Pdave-dcn/KlasMwen",
    },
    featured: true,
  },
  {
    id: "Waldo",
    type: "Full-Stack",
    tags: ["interactive-web-game", "photo-tagging"],
    name: "Where's Waldo?",
    subtitle: "Photo Tagging Game",
    description:
      "An interactive Where’s Waldo-style game where players find characters and submit times to a global leaderboard.",
    links: {
      demo: "#https://whereiswaldoonline.netlify.app/",
      repo: "https://github.com/Pdave-dcn/where-is-waldo",
    },
    featured: true,
  },
  {
    id: "TextNode",
    type: "Full-Stack",
    tags: ["blog-platform", "content-management"],
    name: "TextNode",
    subtitle: "Blogging Platform with Owner Dashboard",
    description:
      "A full-stack blog split into a public reader site for visitors and a private editor dashboard for the blog owner to manage posts, drafts, and content.",
    links: {
      demo: "https://textnode-editor.netlify.app/",
      repo: "https://github.com/Pdave-dcn/Fullstack-blog-project",
    },
    featured: true,
  },
] as const;
