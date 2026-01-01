import { Language } from "@/lib/i18n/languages";

export const PROJECT_DETAILS_PAGE: Record<
  Language,
  {
    notFound: { title: string; backLink: string };
    cta: {
      linkText: {
        back: string;
        demo: string;
        repo: string;
      };
    };
    sections: {
      overview: {
        title: string;
      };
      context: {
        title: string;
      };
      technologies: {
        title: string;
      };
      highlights: {
        title: string;
      };
      lessonsLearned: {
        title: string;
      };
      challenges: {
        title: string;
      };
      improvements: {
        title: string;
      };
      ctaFooter: {
        heading: { title: string; tagline: string };
      };
    };
  }
> = {
  en: {
    notFound: {
      title: "Project Not Found",
      backLink: "Back to Home",
    },
    cta: {
      linkText: {
        back: "Back",
        demo: "View Live Demo",
        repo: "View Repository",
      },
    },
    sections: {
      overview: {
        title: "Overview",
      },
      context: {
        title: "Context",
      },
      technologies: {
        title: "Technologies",
      },
      highlights: {
        title: "Highlights",
      },
      lessonsLearned: {
        title: "Lessons Learned",
      },
      challenges: {
        title: "Challenges",
      },
      improvements: {
        title: "Future Improvements",
      },
      ctaFooter: {
        heading: {
          title: "Interested in this project?",
          tagline: "Check out the live demo or explore the repository.",
        },
      },
    },
  },
  fr: {
    notFound: {
      title: "Projet non trouvé",
      backLink: "Retour à l'accueil",
    },
    cta: {
      linkText: {
        back: "Retour",
        demo: "Voir la démo en direct",
        repo: "Voir le dépôt",
      },
    },
    sections: {
      overview: {
        title: "Aperçu",
      },
      context: {
        title: "Contexte",
      },
      technologies: {
        title: "Technologies",
      },
      highlights: {
        title: "Points forts",
      },
      lessonsLearned: {
        title: "Leçons apprises",
      },
      challenges: {
        title: "Défis",
      },
      improvements: {
        title: "Améliorations futures",
      },
      ctaFooter: {
        heading: {
          title: "Intéressé par ce projet ?",
          tagline: "Découvrez la démo en direct ou explorez le dépôt.",
        },
      },
    },
  },
  es: {
    notFound: {
      title: "Proyecto no encontrado",
      backLink: "Volver a la página principal",
    },
    cta: {
      linkText: {
        back: "Volver",
        demo: "Ver demo en vivo",
        repo: "Ver repositorio",
      },
    },
    sections: {
      overview: {
        title: "Resumen",
      },
      context: {
        title: "Contexto",
      },
      technologies: {
        title: "Tecnologías",
      },
      highlights: {
        title: "Puntos fuertes",
      },
      lessonsLearned: {
        title: "Lecciones aprendidas",
      },
      challenges: {
        title: "Desafíos",
      },
      improvements: {
        title: "Mejoras futuras",
      },
      ctaFooter: {
        heading: {
          title: "¿Interesado en este proyecto?",
          tagline: "Consulta la demo en vivo o explora el repositorio.",
        },
      },
    },
  },
};
