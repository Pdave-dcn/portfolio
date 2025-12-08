import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const circleVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all duration-200 ease-in-out",
  {
    variants: {
      pattern: {
        none: "",
        dots: "",
        vertical: "",
        horizontal: "",
        solid: "",
      },

      variant: {
        outline: "bg-transparent border border-current",
        solid: "bg-background text-foreground",
      },

      size: {
        sm: "h-[190px] w-[190px]",
        md: "h-[310px] w-[310px]",
        lg: "h-[500px] w-[500px]",
        xl: "h-[809px] w-[809px]",
      },

      ring: {
        none: "",
        thin: "ring-1 ring-offset-1 ring-offset-transparent",
        thick: "ring-4 ring-offset-2",
      },

      interactive: {
        false: "",
        true: "cursor-pointer hover:scale-105 active:scale-95",
      },
    },

    defaultVariants: {
      pattern: "none",
      variant: "outline",
      size: "md",
      ring: "none",
      interactive: false,
    },
  }
);

const patternStyles: Record<string, React.CSSProperties> = {
  dots: {
    backgroundColor: "var(--background)",
    backgroundImage:
      "radial-gradient(circle, var(--foreground) 12%, transparent 12%)",
    backgroundSize: "12px 12px",
  },
  vertical: {
    backgroundColor: "var(--background)",
    backgroundImage:
      "repeating-linear-gradient(90deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 8px)",
  },
  horizontal: {
    backgroundColor: "var(--background)",
    backgroundImage:
      "repeating-linear-gradient(0deg, transparent, transparent 8px, var(--foreground) 8px, var(--foreground) 9px)",
  },
  solid: {
    backgroundColor: "var(--background)",
  },
};

export interface ShapeCircleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof circleVariants> {
  as?: React.ElementType;
  color?: string;
  ariaLabel?: string;
}

export function ShapeCircle({
  as: Component = "div",
  className,
  pattern,
  variant,
  size,
  ring,
  interactive,
  color,
  ariaLabel,
  style,
  ...props
}: ShapeCircleProps) {
  const computedClass = cn(
    circleVariants({ pattern, variant, size, ring, interactive }),
    // Remove border completely when pattern is set
    pattern && pattern !== "none" && "!border-0",
    className
  );

  const inlineStyle: React.CSSProperties = { ...style };

  // Merge pattern style
  const patternStyle = patternStyles[pattern ?? "none"];
  if (patternStyle) {
    Object.assign(inlineStyle, patternStyle);
  }

  // Apply color customization
  if (color) {
    if (variant === "solid") {
      // for solid we set background color if color is not a utility class
      if (!/^([a-z-]+\d{0,3})$/.test(color)) {
        inlineStyle.backgroundColor = color;
      }
    } else {
      // outline -> border color
      if (!/^([a-z-]+\d{0,3})$/.test(color)) {
        inlineStyle.borderColor = color;
      }
    }
  }

  return (
    <Component
      role={props.onClick ? "button" : undefined}
      tabIndex={props.onClick ? 0 : undefined}
      className={computedClass}
      aria-label={ariaLabel}
      style={inlineStyle}
      {...props}
    />
  );
}

ShapeCircle.displayName = "ShapeCircle";

export default function ShapeCircleDemo() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <ShapeCircle variant="outline" color="#3b82f6" />

          <ShapeCircle variant="solid" color="#10b981" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Sizes</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <ShapeCircle size="sm" variant="solid" color="#ec4899" />

          <ShapeCircle size="md" variant="solid" color="#8b5cf6" />

          <ShapeCircle size="lg" variant="solid" color="#06b6d4" />

          <ShapeCircle size="xl" variant="solid" color="#4ade80" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Patterns</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <ShapeCircle pattern="dots" size="lg" />

          <ShapeCircle pattern="vertical" size="lg" />

          <ShapeCircle pattern="horizontal" size="lg" />

          <ShapeCircle pattern="solid" size="lg" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Interactive with Rings</h2>
        <div className="flex gap-4 items-center flex-wrap">
          <ShapeCircle
            interactive
            ring="thin"
            variant="solid"
            color="#14b8a6"
            onClick={() => alert("Clicked!")}
          />

          <ShapeCircle
            interactive
            ring="thick"
            variant="outline"
            color="#f97316"
            onClick={() => alert("Clicked!")}
          />
        </div>
      </div>
    </div>
  );
}
