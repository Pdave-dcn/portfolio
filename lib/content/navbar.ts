import type { Language } from "../../lib/i18n/languages";

export const NAVBAR_COPY = {
  en: {
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    ariaLabel: {
      main: "Main navigation",
      skills: "Navigate to skills section",
      projects: "Navigate to projects section",
      contact: "Navigate to contact section",
    },
  },
  fr: {
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    ariaLabel: {
      main: "Navigation principale",
      skills: "Naviguer vers la section compétences",
      projects: "Naviguer vers la section projets",
      contact: "Naviguer vers la section contact",
    },
  },
  es: {
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    ariaLabel: {
      main: "Navegación principal",
      skills: "Navegar a la sección de habilidades",
      projects: "Navegar a la sección de proyectos",
      contact: "Navegar a la sección de contacto",
    },
  },
} as const satisfies Record<
  Language,
  {
    skills: string;
    projects: string;
    contact: string;
    ariaLabel: {
      main: string;
      skills: string;
      projects: string;
      contact: string;
    };
  }
>;
