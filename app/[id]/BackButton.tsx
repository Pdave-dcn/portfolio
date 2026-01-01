import { memo } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { highlights } from "@/lib/design-tokens";

const BackButton = memo(({ backActionText }: { backActionText: string }) => {
  const router = useRouter();

  return (
    <div className={cn(highlights.regularHighlight, "mb-12 md:mb-16")}>
      <button
        onClick={() => router.back()}
        className={cn(
          "group inline-flex items-center gap-2 py-2 px-3 -ml-3 cursor-pointer",
          "text-sm md:text-base font-medium",
          "hover:text-foreground",
          "transition-colors duration-200"
        )}
        aria-label="Go back"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform duration-200"
        />
        <span>{backActionText}</span>
      </button>
    </div>
  );
});

BackButton.displayName = "BackButton";

export default BackButton;
