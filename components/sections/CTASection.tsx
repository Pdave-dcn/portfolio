import Link from "next/link";

const CTASection = () => {
  return (
    <div className="flex flex-col gap-10 mt-20 md:mt-28 md:gap-18">
      <div>
        <h2 className="mt-2 flex flex-col leading-8 font-bold text-[2.5rem] md:text-[5rem] lg:text-[6rem] md:leading-20">
          <span>Want to see</span>
          <span>more?</span>
        </h2>
        <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] text-pretty mt-2.5">
          Explore my projects or get in touch.
        </p>
      </div>

      <div className="flex flex-col gap-4.5 md:gap-7 text-[1.3rem] md:text-[1.6rem] lg:text-[2rem]">
        <Link href={"/projects"}>
          <div className="h-px bg-foreground" />
          <span>View Projects</span>
        </Link>
        <Link href={"/contact"}>
          <div className="h-px bg-foreground" />
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
