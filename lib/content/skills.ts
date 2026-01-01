import type { Language } from "../i18n/languages";

export const SKILLS_DATA: Record<
  Language,
  {
    heading: {
      line1: string;
      line2: string;
      line3: string;
    };
    strengths: {
      heading: string;
      items: readonly string[][];
    };
  }
> = {
  en: {
    heading: {
      line1: "Skills",
      line2: "&",
      line3: "Tools",
    },
    strengths: {
      heading: "Strengths",
      items: [
        ["Clean, maintainable code", "Thoughtful UI & motion"],
        ["Solid API & data modeling", "Quick learner, reliable builder"],
      ],
    },
  },

  fr: {
    heading: {
      line1: "Compétences",
      line2: "&",
      line3: "Outils",
    },
    strengths: {
      heading: "Points forts",
      items: [
        ["Code propre et maintenable", "UI et animations réfléchies"],
        [
          "API solides et modélisation des données",
          "Apprentissage rapide, développeur fiable",
        ],
      ],
    },
  },

  es: {
    heading: {
      line1: "Habilidades",
      line2: "&",
      line3: "Herramientas",
    },
    strengths: {
      heading: "Fortalezas",
      items: [
        ["Código limpio y mantenible", "UI y animaciones cuidadas"],
        [
          "APIs sólidas y modelado de datos",
          "Aprendiz rápido, desarrollador confiable",
        ],
      ],
    },
  },
} as const;
