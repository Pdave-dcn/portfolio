import { highlights, typography } from "@/lib/design-tokens";
import { Divider } from "../../ui/divider";
import { memo } from "react";
import { HERO_DATA } from "@/lib/homepage-data";
import { cn } from "@/lib/utils";

const HeroSection = memo(() => {
  return (
    <div className="mt-35 md:mt-40 flex flex-col gap-10 md:gap-7">
      <div>
        <h1 className={`flex flex-col ${typography.hero}`}>
          <span className={highlights.textHighlight}>
            {HERO_DATA.name.firstName}
          </span>

          <span className={highlights.textHighlight}>
            {HERO_DATA.name.lastName}
          </span>
        </h1>

        <p
          className={cn(
            highlights.taglineHighlight,
            typography.tagline,
            "md:mt-5"
          )}
        >
          {HERO_DATA.tagline}
        </p>
      </div>

      <Divider />
    </div>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
