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
    label: string;
    content: string;
  };
  secondary: {
    label: string;
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
