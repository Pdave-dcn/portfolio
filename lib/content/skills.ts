import type { Language } from "../i18n/languages";

export const SKILLS_DATA: Record<
  Language,
  {
    heading: string;
    strengths: {
      heading: string;
      items: readonly string[][];
    };
  }
> = {
  en: {
    heading: "Skills & Tools",
    strengths: {
      heading: "Strengths",
      items: [
        ["Clean, maintainable code", "Thoughtful UI & motion"],
        ["Solid API & data modeling", "Quick learner, reliable builder"],
      ],
    },
  },

  fr: {
    heading: "Compétences & Outils",
    strengths: {
      heading: "Points forts",
      items: [
        ["Code propre et maintenable", "UI et animations réfléchies"],
        [
          "API et modélisation des données solides",
          "Apprentissage rapide, développeur fiable",
        ],
      ],
    },
  },

  es: {
    heading: "Habilidades & Herramientas",
    strengths: {
      heading: "Fortalezas",
      items: [
        ["Código limpio y mantenible", "UI y animaciones cuidadas"],
        [
          "APIs y modelado de datos sólidos",
          "Aprendiz rápido, desarrollador confiable",
        ],
      ],
    },
  },
} as const;

export type Skills = (typeof SKILLS_DATA)[Language];
