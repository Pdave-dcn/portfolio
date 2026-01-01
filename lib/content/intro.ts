import type { Language } from "../i18n/languages";

export const INTRO_DATA: Record<
  Language,
  {
    desktop: readonly string[];
    mobile: readonly string[];
  }
> = {
  en: {
    desktop: [
      "As a full-stack developer with a focus on clean engineering and thoughtful design, I take a holistic approach to building software that's intuitive, reliable, and satisfying to use. I care about the small details, the larger system design, and how every part comes together to create a smooth end-to-end experience.",
      "I've worked on projects ranging from social platforms to interactive games, giving me hands-on experience with real product challenges from shaping data models to refining the final UI. Outside of coding, I explore new tools, study great product design, and experiment with ideas that help me grow as an engineer.",
    ],
    mobile: [
      "I approach software with a mix of creativity, curiosity, and engineering discipline. I enjoy shaping smooth user experiences, designing logical systems, and bringing ideas to life through thoughtful technical decisions.",
      "My projects range from social platforms to interactive games, giving me practical insight into both the human side of design and the structure behind scalable software. I'm always exploring new tools and concepts that help me grow and elevate the things I build.",
    ],
  },

  fr: {
    desktop: [
      "En tant que développeur full-stack, spécialisé dans une ingénierie soignée et une conception réfléchie, j’adopte une approche holistique pour créer des logiciels intuitifs, fiables et agréables à utiliser. Je m’attache autant aux détails qu’à la conception globale des systèmes, et à la manière dont chaque élément s’articule pour offrir une expérience fluide de bout en bout.",
      "J’ai travaillé sur des projets allant de plateformes sociales à des jeux interactifs, ce qui m’a permis d’acquérir une expérience concrète des défis réels du développement de produits, de la conception des modèles de données jusqu’à l’optimisation de l’interface utilisateur finale. En dehors du codage, j’explore de nouveaux outils, j’analyse les meilleures pratiques en design produit et j’expérimente des idées qui me permettent de continuer à progresser en tant qu’ingénieur.",
    ],
    mobile: [
      "J’aborde le développement logiciel avec un équilibre entre créativité, curiosité et rigueur technique. J’aime concevoir des expériences utilisateur fluides, des systèmes cohérents et donner vie aux idées à travers des décisions techniques réfléchies.",
      "Mes projets vont de plateformes sociales à des jeux interactifs, m’offrant une vision concrète à la fois de la dimension humaine du design et de la structure nécessaire à la création de logiciels évolutifs. J’explore continuellement de nouveaux outils et concepts afin de progresser et d’améliorer ce que je construis.",
    ],
  },

  es: {
    desktop: [
      "Como desarrollador full-stack, especializado en ingeniería meticulosa y diseño reflexivo, adopto un enfoque holístico para crear software intuitivo, fiable y agradable de usar. Me centro tanto en los detalles como en el diseño global de los sistemas, y en la forma en que cada elemento se articula para ofrecer una experiencia fluida de principio a fin.",
      "He trabajado en proyectos que van desde plataformas sociales hasta juegos interactivos, lo que me ha permitido adquirir experiencia práctica en los retos reales del desarrollo de productos, desde el diseño de modelos de datos hasta la optimización de la interfaz de usuario final. Además de la programación, exploro nuevas herramientas, analizo las mejores prácticas en diseño de productos y experimento con ideas que me permiten seguir progresando como ingeniero.",
    ],
    mobile: [
      "Abordo el desarrollo de software con un equilibrio entre creatividad, curiosidad y rigor técnico. Me gusta diseñar experiencias de usuario fluidas, sistemas coherentes y dar vida a las ideas a través de decisiones técnicas meditadas.",
      "Mis proyectos abarcan desde plataformas sociales hasta juegos interactivos, lo que me ofrece una visión concreta tanto de la dimensión humana del diseño como de la estructura necesaria para crear software escalable. Exploro continuamente nuevas herramientas y conceptos para progresar y mejorar lo que construyo.",
    ],
  },
} as const;
