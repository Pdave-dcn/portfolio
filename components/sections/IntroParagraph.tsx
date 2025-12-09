const IntroParagraph = () => {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      <p className="hidden lg:grid lg:grid-cols-2 gap-10 mt-7 text-xl text-pretty">
        <span>
          As a full-stack developer with a focus on clean engineering and
          thoughtful design, I take a holistic approach to building software
          that’s intuitive, reliable, and satisfying to use. I care about the
          small details, the larger system design, and how every part comes
          together to create a smooth end-to-end experience.
        </span>

        <span>
          I’ve worked on projects ranging from social platforms to interactive
          games, giving me hands-on experience with real product challenges from
          shaping data models to refining the final UI. Outside of coding, I
          explore new tools, study great product design, and experiment with
          ideas that help me grow as an engineer.
        </span>
      </p>

      <p className="md:grid md:grid-cols-2 lg:hidden flex flex-col gap-3 text-base md:text-xl mt-7 text-pretty">
        <span>
          I approach software with a mix of creativity, curiosity, and
          engineering discipline. I enjoy shaping smooth user experiences,
          designing logical systems, and bringing ideas to life through
          thoughtful technical decisions.
        </span>
        <span>
          My projects range from social platforms to interactive games, giving
          me practical insight into both the human side of design and the
          structure behind scalable software. I’m always exploring new tools and
          concepts that help me grow and elevate the things I build.
        </span>
      </p>

      <div className="h-[5px] bg-foreground" />
    </div>
  );
};

export default IntroParagraph;
