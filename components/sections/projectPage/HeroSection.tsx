import { Divider } from "@/components/ui/divider";
import { highlights, typography } from "@/lib/design-tokens";
import { HERO_DATA } from "@/lib/project-page-data";

const HeroSection = () => {
  return (
    <div className="mt-35 md:mt-40 lg:mt-35 flex flex-col gap-20 md:gap-30">
      <div>
        <h1 className={`${typography.hero} ${highlights.textHighlight}`}>
          {HERO_DATA.title}
        </h1>
        <p className={`mt-2 md:mt-2.5 lg:mt-3 ${typography.tagline}`}>
          {HERO_DATA.tagline}
        </p>
      </div>

      <Divider muted />
    </div>
  );
};

export default HeroSection;
