const HeroSection = () => {
  return (
    <>
      <div className="mt-35 md:mt-40 flex flex-col gap-10 md:gap-7">
        <div>
          <h1 className="flex flex-col text-[4rem] leading-15 md:leading-30 md:text-[9.5rem] font-bold">
            <span className="relative inline-block w-fit before:content-[''] before:absolute before:top-[60%] before:left-0 before:w-full before:h-1/2 before:bg-background before:-z-10">
              David
            </span>

            <span className="relative inline-block w-fit before:content-[''] before:absolute before:top-[60%] before:left-0 before:w-full before:h-1/2 before:bg-background before:-z-10">
              Providence
            </span>
          </h1>

          <p className="md:mt-3 text-2xl text-pretty md:text-4xl relative inline-block w-fit before:content-[''] before:absolute before:top-[8%] before:left-0 before:w-[90%] before:h-1/2 before:bg-background before:-z-10">
            is a full-stack web developer crafting intuitive interfaces and
            performant, production-ready software.
          </p>
        </div>

        <div className="h-px bg-foreground" />
      </div>
    </>
  );
};

export default HeroSection;
