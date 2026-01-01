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
      "En tant que développeur full-stack axé sur une ingénierie propre et un design réfléchi, j’adopte une approche globale pour créer des logiciels intuitifs, fiables et agréables à utiliser. J’accorde de l’importance aux petits détails, à la conception du système dans son ensemble et à la façon dont chaque partie s’assemble pour offrir une expérience fluide de bout en bout.",
      "J’ai travaillé sur des projets allant de plateformes sociales à des jeux interactifs, ce qui m’a permis d’acquérir une expérience concrète face à de vrais défis produit, de la conception des modèles de données au peaufinage de l’interface finale. En dehors du code, j’explore de nouveaux outils, j’étudie le design de bons produits et j’expérimente des idées qui me permettent de progresser en tant qu’ingénieur.",
    ],
    mobile: [
      "J’aborde le développement logiciel avec un mélange de créativité, de curiosité et de rigueur technique. J’aime concevoir des expériences utilisateur fluides, des systèmes logiques et donner vie aux idées grâce à des décisions techniques réfléchies.",
      "Mes projets vont de plateformes sociales à des jeux interactifs, me donnant une vision concrète à la fois de l’aspect humain du design et de la structure nécessaire aux logiciels évolutifs. J’explore constamment de nouveaux outils et concepts pour progresser et améliorer ce que je construis.",
    ],
  },

  es: {
    desktop: [
      "Como desarrollador full-stack con enfoque en una ingeniería limpia y un diseño cuidadoso, adopto una visión integral para construir software intuitivo, confiable y agradable de usar. Me importan los pequeños detalles, el diseño del sistema en su conjunto y cómo cada parte se integra para crear una experiencia fluida de principio a fin.",
      "He trabajado en proyectos que van desde plataformas sociales hasta juegos interactivos, lo que me ha dado experiencia práctica enfrentando desafíos reales de producto, desde el diseño de modelos de datos hasta el refinamiento de la interfaz final. Fuera del código, exploro nuevas herramientas, estudio el buen diseño de productos y experimento con ideas que me ayudan a crecer como ingeniero.",
    ],
    mobile: [
      "Abordo el desarrollo de software con una combinación de creatividad, curiosidad y disciplina de ingeniería. Disfruto diseñar experiencias de usuario fluidas, sistemas lógicos y dar vida a las ideas mediante decisiones técnicas bien pensadas.",
      "Mis proyectos abarcan desde plataformas sociales hasta juegos interactivos, brindándome una comprensión práctica tanto del lado humano del diseño como de la estructura detrás del software escalable. Siempre estoy explorando nuevas herramientas y conceptos que me ayudan a crecer y elevar lo que construyo.",
    ],
  },
} as const;
