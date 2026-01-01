import type { Language } from "../i18n/languages";

export const HERO_DATA: Record<
  Language,
  {
    name: {
      firstName: string;
      lastName: string;
    };
    tagline: string;
  }
> = {
  en: {
    name: {
      firstName: "David",
      lastName: "Providence",
    },
    tagline:
      "is a Haitian full-stack web developer based in the Dominican Republic, crafting intuitive interfaces and performant production-ready software.",
  },

  fr: {
    name: {
      firstName: "David",
      lastName: "Providence",
    },
    tagline:
      "est un développeur web full-stack haïtien, basé en République dominicaine, qui conçoit des interfaces intuitives et des logiciels performants, prêts pour la production.",
  },

  es: {
    name: {
      firstName: "David",
      lastName: "Providence",
    },
    tagline:
      "es un desarrollador web full-stack haitiano, afincado en la República Dominicana, que diseña interfaces intuitivas y software de alto rendimiento, listos para producción.",
  },
} as const;
