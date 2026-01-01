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
    title: "Projets sélectionnés",
    tagline:
      "Une sélection de projets illustrant ma façon de concevoir, structurer et livrer.",
  },
  es: {
    title: "Proyectos destacados",
    tagline:
      "Trabajos seleccionados que muestran cómo diseño, estructuro y entrego software.",
  },
} as const;
