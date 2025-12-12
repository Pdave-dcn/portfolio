import HeroSection from "@/components/sections/HeroSection";
import IntroParagraph from "@/components/sections/IntroParagraph";
import SkillsSection from "@/components/sections/skillSection/SkillsSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-30 lg:gap-40">
      <section>
        <HeroSection />
        <IntroParagraph />
      </section>

      <div>
        <div className="flex flex-col gap-30 md:gap-35 lg:gap-40">
          <SkillsSection />
          <ProjectSection />
        </div>

        <div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
