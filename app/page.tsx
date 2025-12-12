import CTASection from "@/components/sections/homepage/CTASection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import IntroParagraph from "@/components/sections/homepage/IntroParagraph";
import SkillsSection from "@/components/sections/homepage/skillSection/SkillsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <IntroParagraph />
      <SkillsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
