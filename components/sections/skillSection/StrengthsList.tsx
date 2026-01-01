import { memo } from "react";
import { SKILLS_DATA } from "@/lib/content/skills";
import { NeonGlow } from "@/components/effects/NeonGlow";
import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/stores/language.store";

// SVG Icons for strengths
const CleanCodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" />
    <path d="M7 3H5a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2" />
    <polygon
      points="12 4 13.5 9 18 10.5 13.5 12 12 17 10.5 12 6 10.5 10.5 9"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const UIMotionIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z"
        fill="currentColor"
      ></path>{" "}
    </g>
  </svg>
);

const APIIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <path d="M6 12h.01M10 12h.01M14 12h.01" />
  </svg>
);

const LearnerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const STRENGTH_ICONS = [
  { icon: <CleanCodeIcon />, color: "#10b981" },
  { icon: <UIMotionIcon />, color: "#8b5cf6" },
  { icon: <APIIcon />, color: "#f59e0b" },
  { icon: <LearnerIcon />, color: "#3b82f6" },
];

const StrengthsList = memo(() => {
  const lang = useLanguageStore((s) => s.lang);
  const skills = SKILLS_DATA[lang];
  const allStrengthItems = skills.strengths.items.flatMap((group) => group);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="border border-border/30 p-8 md:col-span-2 lg:col-span-4">
        <h3 className="text-xs uppercase tracking-widest font-medium text-foreground/60 mb-8 text-left">
          {skills.strengths.heading}
        </h3>

        <div className="w-full flex justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allStrengthItems.map((item, index) => (
              <li key={index} className="flex items-center gap-4 text-left">
                <NeonGlow color={STRENGTH_ICONS[index]?.color || "#6b7280"}>
                  <span
                    className={cn(
                      "flex items-center justify-center shrink-0",
                      "size-8 md:size-9 text-foreground"
                    )}
                  >
                    {STRENGTH_ICONS[index]?.icon}
                  </span>
                </NeonGlow>

                <span className="text-base md:text-lg font-normal text-foreground/90 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

StrengthsList.displayName = "StrengthsList";

export default StrengthsList;
