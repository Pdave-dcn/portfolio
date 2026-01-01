import type { Language } from "../../i18n/languages";

export const PROJECT_SECTION_COPY: Record<
  Language,
  {
    title: string;
    tagline: string;
  }
> = {
  en: {
    title: "Featured Projects",
    tagline: "Selected work showcasing how I build, structure, and ship.",
  },
  fr: {
    title: "Projets en vedette",
    tagline:
      "Une sélection de projets illustrant ma manière de concevoir, structurer et livrer des produits logiciels.",
  },
  es: {
    title: "Proyectos destacados",
    tagline:
      "Trabajos seleccionados que ilustran mi forma de concebir, estructurar y entregar productos de software.",
  },
} as const;
