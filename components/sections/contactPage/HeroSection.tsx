import { HERO_DATA } from "@/lib/contact-page.data";
import { highlights, typography } from "@/lib/design-tokens";

const HeroSection = () => {
  return (
    <section className="mt-35 md:mt-40 lg:mt-35">
      <h1 className={`${typography.hero} ${highlights.textHighlight}`}>
        {HERO_DATA.title}
      </h1>
      <p className={`${typography.tagline} ${highlights.textHighlight}`}>
        {HERO_DATA.tagline}
      </p>
    </section>
  );
};

export default HeroSection;
