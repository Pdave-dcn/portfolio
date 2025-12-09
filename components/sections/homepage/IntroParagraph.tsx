import { memo } from "react";
import { INTRO_DATA } from "@/lib/homepage-data";
import { Divider } from "../../ui/divider";
import { typography } from "@/lib/design-tokens";

const IntroParagraph = memo(() => {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      {/* Desktop version */}
      <p
        className={`hidden lg:grid lg:grid-cols-2 gap-10 mt-7 text-pretty ${typography.bodyLarge}`}
      >
        {INTRO_DATA.desktop.map((paragraph, index) => (
          <span key={index}>{paragraph}</span>
        ))}
      </p>

      {/* Mobile/Tablet version */}
      <p
        className={`md:grid md:grid-cols-2 lg:hidden flex flex-col gap-3 mt-7 text-pretty ${typography.body}`}
      >
        {INTRO_DATA.mobile.map((paragraph, index) => (
          <span key={index}>{paragraph}</span>
        ))}
      </p>

      <Divider thick />
    </div>
  );
});

IntroParagraph.displayName = "IntroParagraph";

export default IntroParagraph;
