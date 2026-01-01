import { memo } from "react";
import { typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import { Project } from "@/hooks/useProject";

interface ContextProps {
  context?: Project["context"];
}

const Context = memo(({ context }: ContextProps) => {
  if (!context) return null;
  return (
    <div className="py-12 md:py-16 grid md:grid-cols-2 gap-12 md:gap-16">
      <div>
        <h2 className={cn(typography.subheading, "mb-6")}>
          {context.primary.label}
        </h2>
        <p className={cn(typography.body)}>{context.primary.content}</p>
      </div>
      <div>
        <h2 className={cn(typography.subheading, "mb-6")}>
          {context.secondary.label}
        </h2>
        <p className={cn(typography.body)}>{context.secondary.content}</p>
      </div>
    </div>
  );
});

Context.displayName = "Context";

export default Context;
