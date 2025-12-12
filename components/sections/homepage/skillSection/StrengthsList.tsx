import { memo } from "react";
import { typography } from "@/lib/design-tokens";
import { SKILLS_DATA, STRENGTHS_DATA } from "@/lib/homepage-data";

const StrengthsList = memo(() => {
  return (
    <div className="flex justify-between items-start lg:items-center -mt-5 md:-mt-12">
      <h3 className={typography.subheading}>{SKILLS_DATA.strengthsHeading}</h3>

      <ul
        className={`flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 list-none ${typography.body}`}
      >
        {STRENGTHS_DATA.map((group, groupIndex) => (
          <li
            key={groupIndex}
            className={groupIndex === 0 ? "mt-3.5 md:mt-0" : ""}
          >
            <ul className="space-y-1">
              {group.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="before:content-['•'] before:mr-1 md:before:mr-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
});

StrengthsList.displayName = "StrengthsList";

export default StrengthsList;
