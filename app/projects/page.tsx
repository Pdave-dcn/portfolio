import HeroSection from "@/components/sections/projectPage/HeroSection";
import ProjectSection from "@/components/sections/projectPage/ProjectSection";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <div>
      <div className="mb-28">
        <HeroSection />
        <ProjectSection />
      </div>

      <div className="flex gap-4 mb-10 text-xs">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default ProjectPage;
