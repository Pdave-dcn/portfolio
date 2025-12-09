import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import IntroParagraph from "@/components/sections/IntroParagraph";
import SkillsSection from "@/components/sections/SkillsSection";

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
