import HeroSection from "@/components/sections/projectPage/HeroSection";
import ProjectSection from "@/components/sections/projectPage/ProjectSection";
import FooterNavigation from "@/components/navigation/FooterNavigation";

const ProjectPage = () => {
  return (
    <div>
      <div className="mb-28">
        <HeroSection />
        <ProjectSection />
      </div>

      <FooterNavigation />
    </div>
  );
};

export default ProjectPage;
