export const HERO_DATA = {
  name: {
    firstName: "David",
    lastName: "Providence",
  },
  tagline:
    "is a haitian full-stack web developer based in the Dominican Republic, crafting intuitive interfaces and performant production-ready software.",
} as const;

export const INTRO_DATA = {
  desktop: [
    "As a full-stack developer with a focus on clean engineering and thoughtful design, I take a holistic approach to building software that's intuitive, reliable, and satisfying to use. I care about the small details, the larger system design, and how every part comes together to create a smooth end-to-end experience.",
    "I've worked on projects ranging from social platforms to interactive games, giving me hands-on experience with real product challenges from shaping data models to refining the final UI. Outside of coding, I explore new tools, study great product design, and experiment with ideas that help me grow as an engineer.",
  ],
  mobile: [
    "I approach software with a mix of creativity, curiosity, and engineering discipline. I enjoy shaping smooth user experiences, designing logical systems, and bringing ideas to life through thoughtful technical decisions.",
    "My projects range from social platforms to interactive games, giving me practical insight into both the human side of design and the structure behind scalable software. I'm always exploring new tools and concepts that help me grow and elevate the things I build.",
  ],
} as const;

export const SKILLS_DATA = {
  heading: {
    line1: "Tools",
    line2: "&",
    line3: "Technologies",
  },
  cta: {
    word1: "View",
    word2: "Projects",
  },
  strengthsHeading: "Strengths",
} as const;

export const STRENGTHS_DATA = [
  {
    items: ["Clean, maintainable code", "Thoughtful UI & motion"],
  },
  {
    items: ["Solid API + data modeling", "Quick learner, reliable builder"],
  },
] as const;

export const CTA_DATA = {
  heading: {
    line1: "Want to see",
    line2: "more",
    line3: "?",
  },
  subheading: "Explore my projects or get in touch.",
  links: [
    {
      href: "/projects",
      label: "View Projects",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ],
} as const;
