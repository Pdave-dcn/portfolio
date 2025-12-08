const HeroSection = () => {
  return (
    <>
      <div className="mt-35 md:mt-40 flex flex-col gap-10 md:gap-7">
        <div>
          <h1 className="flex flex-col gap-2.5 text-6xl md:text-9xl font-bold">
            <span className="relative inline-block w-fit before:content-[''] before:absolute before:top-[60%] before:left-0 before:w-full before:h-1/2 before:bg-amber-900 before:-z-10">
              David
            </span>

            <span className="-mt-4.5 relative inline-block w-fit before:content-[''] before:absolute before:top-[60%] before:left-0 before:w-full before:h-1/2 before:bg-amber-900 before:-z-10">
              Providence
            </span>
          </h1>

          <p className="text-2xl text-pretty md:text-4xl mt-3.5 relative inline-block w-fit before:content-[''] before:absolute before:top-[10%] before:left-0 before:w-full before:h-1/2 before:bg-amber-900 before:-z-10">
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
