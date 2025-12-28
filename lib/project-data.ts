export const PROJECT_SECTION_DATA = {
  title: "Featured Projects",
  tagline: "Selected work showcasing how I build, structure, and ship.",
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

export type ProjectContextKey =
  | "Motivation"
  | "Approach"
  | "Challenge"
  | "Implementation"
  | "Goal"
  | "Outcome"
  | "Context"
  | "Focus";

export interface ProjectContext {
  primary: {
    label: ProjectContextKey;
    content: string;
  };
  secondary: {
    label: ProjectContextKey;
    content: string;
  };
}

export interface ProjectWithDetails extends Project {
  overview: string;
  screenshots: string[];
  context?: ProjectContext;
  coreTechnologies: string[];
  highlights: string[];
  lessonsLearned: string[];
  challenges: string[];
  deployment: string;
  futureImprovements: string[];
}

export const PROJECTS_WITH_DETAILS: readonly ProjectWithDetails[] = [
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

    // Details
    overview:
      "KlasMwen is a modern educational social platform built to centralize student collaboration. It enables sharing notes, asking questions, posting documents, and fostering community-based learning.",

    screenshots: [
      "/klasmwen-landing-page.jpg",
      "/klasmwen-post.jpg",
      "/klasmwen-profile.jpg",
      "/klasmwen-report-moderation-1.jpg",
      "/klasmwen-avatar-selection.jpg",
    ],

    context: {
      primary: {
        label: "Motivation",
        content:
          "I wanted to challenge myself by building a full-featured social platform from scratch. Instead of cloning an existing network, I chose an educational context to explore real-world features like file sharing, moderation, and structured discussions.",
      },
      secondary: {
        label: "Approach",
        content:
          "I designed and built an end-to-end system with posting, comments, reactions, file uploads, and moderation workflows, focusing on clean architecture, type safety, and maintainability.",
      },
    },

    coreTechnologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Markdown Editor",
      "React Hook Form",
      "Axios",
      "React Query",
      "Zustand",
      "Zod",
      "Node.js",
      "Express",
      "Passport.js",
      "Pino",
      "Prisma",
      "Swagger",
      "PostgreSQL",
      "Cloudinary",
    ],

    highlights: [
      "Full social learning platform with posts, comments, bookmarks, and reactions",
      "Robust authentication with JWT, role-based access control, and secure sessions",
      "Built-in safety & moderation system with user reporting and admin dashboards",
      "Advanced file sharing with Cloudinary storage and automatic metadata extraction",
      "End-to-end validation and rate limiting to prevent abuse and ensure data integrity",
      "High-performance UX with server-state caching, optimistic updates, and debounced search",
    ],

    lessonsLearned: [
      "Implementing complex file upload and moderation workflows",
      "Structuring and maintaining a large full-stack codebase cleanly",
      "Strengthening end-to-end type safety using TypeScript and Zod across API layers",
      "Documenting REST APIs with Swagger / OpenAPI for clarity and maintainability",
      "Setting up scalable backend logging and error tracing using Pino",
    ],

    challenges: [
      "Keeping UI state in sync with server updates",
      "Managing file uploads and downloads efficiently",
      "Designing scalable posting & commenting structures",
      "Ensuring relational consistency across posts, comments, reactions, and bookmarks",
      "Maintaining consistent type-safety across client, server, and database layers",
      "Keeping frontend components modular and the backend codebase cleanly organized",
    ],

    deployment:
      "Frontend deployed on Netlify; backend deployed to a cloud instance with a managed PostgreSQL database.",

    futureImprovements: [
      "Real-time notifications using WebSockets",
      "Group Chats & Study Circles",
      "Complete Admin Dashboard for moderation and user management",
    ],
  },

  // -------------------------- WALDO --------------------------

  {
    id: "Waldo",
    type: "Full-Stack",
    tags: ["interactive-web-game", "photo-tagging"],
    name: "Where's Waldo?",
    subtitle: "Photo Tagging Game",
    description:
      "An interactive Where’s Waldo-style game where players find characters and submit times to a global leaderboard.",
    links: {
      demo: "https://whereiswaldoonline.netlify.app/",
      repo: "https://github.com/Pdave-dcn/where-is-waldo",
    },
    featured: true,

    // Details
    overview:
      "A fast, interactive hidden-object game inspired by Where’s Waldo. Players search characters in a detailed image and compete on a global leaderboard.",

    screenshots: [
      "/waldo-homepage.jpeg",
      "/waldo-play.jpeg",
      "/waldo-how-to-play.jpeg",
      "/waldo-leaderboard.jpeg",
      "/waldo-info-modal.jpeg",
    ],

    context: {
      primary: {
        label: "Challenge",
        content:
          "A full-stack challenge from The Odin Project focused on building a photo-tagging game with multiple scenes, character detection, and a persistent leaderboard.",
      },
      secondary: {
        label: "Implementation",
        content:
          "I built a React-based game interface that uses predefined character positions stored in a PostgreSQL database. Game scenes and character data are served via a REST API, while the frontend handles click detection, game flow, and UI feedback.",
      },
    },

    coreTechnologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "Motion",
      "Axios",
      "React Query",
      "Zustand",
      "Zod",
      "Node.js",
      "Express",
      "Pino",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
    ],

    highlights: [
      "Smooth animations and polished UI interactions",
      "Predefined character positions stored as normalized ratios for responsive layout",
      "Global leaderboard with persistent timestamps",
      "Optimized frontend state management for fast user feedback",
    ],

    lessonsLearned: [
      "Modeling character positions for responsive, scalable images",
      "Building full-stack interactions that feel instant",
      "Managing complex UI state for click detection and game flow",
    ],

    challenges: [
      "Mapping clicks to normalized character coordinates across screen sizes",
      "Synchronizing client and server during leaderboard submissions",
      "Creating a responsive and smooth UI for large game images",
    ],

    deployment:
      "Frontend deployed to Netlify; backend is a Node/Express API with a PostgreSQL database. Game images hosted on Cloudinary.",

    futureImprovements: [
      "Build an admin UI for uploading scenes and managing character data",
      "Implement optional authentication for personalized experiences",
      "Increase test coverage for frontend and backend",
      "Add new game scenes to expand gameplay variety",
    ],
  },

  // -------------------------- TEXTNODE --------------------------

  {
    id: "textnode",
    type: "Full-Stack",
    tags: ["blog-platform", "content-management"],
    name: "TextNode",
    subtitle: "Blogging Platform with Owner Dashboard",
    description:
      "A full-stack blog split into a public reader site for visitors and a private editor dashboard for the blog owner to manage articles, drafts, and content.",
    links: {
      demo: "https://textnode-editor.netlify.app/",
      repo: "https://github.com/Pdave-dcn/Fullstack-blog-project",
    },
    featured: true,

    // Details
    overview:
      "TextNode is a modern full-stack blogging platform featuring a public reader interface and a private editor dashboard for authors to create and manage articles.",

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
      "React Hook Form",
      "Axios",
      "React Query",
      "Zustand",
      "Zod",
      "Motion",
      "Node.js",
      "Express",
      "Pino",
      "Prisma",
      "PostgreSQL",
      "TinyMCE Rich Text Editor",
      "Passport.js",
    ],

    highlights: [
      "Two independent frontends (reader & editor) consuming the same API",
      "DDD‑inspired backend with clear domain, application, and infrastructure layers",
      "Explicit use cases and centralized authorization",
      "Zod‑based validation shared across frontend forms and API boundaries",
      "Role‑based author dashboard with draft, publish, and moderation workflows",
      "Rate limiting, structured logging, and cookie‑based JWT authentication",
    ],

    lessonsLearned: [
      "Applying Domain‑Driven Design pragmatically in a real project",
      "Designing backend architectures that scale without rewrites",
      "Structuring monorepos with multiple frontends and a shared API",
      "Centralizing cross‑cutting concerns like validation, auth, and rate limiting",
      "Balancing architectural clarity with avoiding over‑engineering",
    ],

    challenges: [
      "Refactoring an early‑career codebase without breaking existing behavior",
      "Separating domain logic from Express and Prisma concerns",
      "Keeping frontend and backend validation fully aligned",
      "Managing authenticated flows across two separate frontend applications",
    ],

    deployment:
      "Frontend apps hosted on Netlify (reader and editor); backend hosted with Node/Express connected to PostgreSQL.",

    futureImprovements: [
      "Image uploads and media management via Cloudinary",
      "Shared frontend packages for UI, hooks, and schemas",
      "Expanded moderation and analytics tooling",
      "Automated testing for domain and application layers",
    ],
  },
] as const;
