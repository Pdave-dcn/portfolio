export const typography = {
  hero: "text-[4rem] leading-15 md:leading-25 lg:leading-30 md:text-[8rem] lg:text-[9.5rem] font-bold",
  heading:
    "text-[2.5rem] leading-8.5 md:text-[5rem] lg:text-[6rem] md:leading-20 font-bold",
  subheading: "text-[1.5rem] md:text-[2rem] lg:text-[3.7rem] font-semibold",
  sectionHeading:
    "text-[2.5rem] leading-8 md:text-[5rem] lg:text-[6rem] md:leading-20 font-bold",
  title: "text-[2.5rem] md:text-[3rem] lg:text-[3.7rem] font-bold",
  ctaLink: "text-[1.1rem] md:text-[1.6rem] //lg:text-[2rem]",
  body: "text-base md:text-xl text-pretty",
  bodyLarge: "text-xl text-pretty",
  tagline: "text-2xl md:text-3xl lg:text-4xl text-pretty",
  ctaSubheading: "text-[1.5rem] md:text-[2rem] lg:text-[2.3rem]",
} as const;

export const spacing = {
  sectionGap: "gap-10 mt-20 md:mt-28 md:gap-18",
  heroMargin: "mt-35 md:mt-40",
} as const;

export const highlights = {
  textHighlight:
    "relative inline-block w-fit before:content-[''] before:absolute before:top-[60%] before:left-0 before:w-full before:h-1/2 before:bg-background before:-z-10",
  taglineHighlight:
    "relative inline-block w-fit before:content-[''] before:absolute before:top-[8%] before:left-0 before:w-[90%] before:h-1/2 before:bg-background before:-z-10",
  regularHighlight:
    "relative inline-block w-fit before:content-[''] before:absolute before:top-[10%] before:left-0 before:w-full before:h-[80%] before:bg-background before:-z-10",
} as const;
