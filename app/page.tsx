import CTASection from "@/components/sections/homepage/CTASection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import IntroParagraph from "@/components/sections/homepage/IntroParagraph";
import SkillsSection from "@/components/sections/homepage/SkillsSection";

const HomePage = () => {
  return (
    <div className="mb-28">
      <HeroSection />
      <IntroParagraph />
      <SkillsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
