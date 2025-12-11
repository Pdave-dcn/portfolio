"use client";

import { ShapeCircle } from "../ui/shape-circle";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const MOBILE_MAX_WIDTH = 400;
const MOBILE_MAX_HEIGHT = 300;
const DESKTOP_MAX_WIDTH = 1400;
const DESKTOP_MAX_HEIGHT = 500;
const OFFSET = 350; // Controls how far shapes can scatter outside the main area

type ShapePattern = "dots" | "horizontal" | "vertical" | "solid";

type ShapeConfig = {
  [key in ShapePattern]: number;
};

const MOBILE_SHAPE_CONFIG: ShapeConfig = {
  horizontal: 2,
  vertical: 2,
  solid: 1,
  dots: 8,
};

const DESKTOP_SHAPE_CONFIG: ShapeConfig = {
  horizontal: 5,
  vertical: 2,
  dots: 5,
  solid: 1,
};

function seededRandom(seed: number) {
  let v = seed >>> 0;
  return () => {
    v = (v * 1664525 + 1013904223) >>> 0;
    return v / 2 ** 32;
  };
}

const generateShapes = (
  maxWidth: number,
  maxHeight: number,
  shapeConfig: ShapeConfig
) => {
  const shapes: { pattern: ShapePattern; style: React.CSSProperties }[] = [];

  const MIN_POS = -OFFSET;

  // Iterate over the configuration to create the desired number of each shape
  (Object.keys(shapeConfig) as ShapePattern[]).forEach((pattern) => {
    const count = shapeConfig[pattern];

    for (let i = 0; i < count; i++) {
      const rnd = seededRandom(Math.floor(Math.random() * 1e9 + i));

      const MAX_WIDTH_RANGE = maxWidth + 2 * OFFSET;
      const MAX_HEIGHT_RANGE = maxHeight + 2 * OFFSET;

      const left = Math.round(rnd() * MAX_WIDTH_RANGE + MIN_POS);
      const top = Math.round(rnd() * MAX_HEIGHT_RANGE + MIN_POS);

      //const scale = Number((0.6 + rnd() * 0.7).toFixed(2));

      shapes.push({
        pattern: pattern,
        style: {
          position: "absolute" as const,
          left: `${left}px`,
          top: `${top}px`,
          //transform: `scale(${scale})`,
        },
      });
    }
  });

  return shapes;
};

const BackgroundShapes = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const mobileShapes = generateShapes(
    MOBILE_MAX_WIDTH,
    MOBILE_MAX_HEIGHT,
    MOBILE_SHAPE_CONFIG
  );

  const desktopShapes = generateShapes(
    DESKTOP_MAX_WIDTH,
    DESKTOP_MAX_HEIGHT,
    DESKTOP_SHAPE_CONFIG
  );

  return (
    <>
      {/* Mobile Shapes Container */}
      <div className="md:hidden">
        {mobileShapes.map((shape, i) => (
          <ShapeCircle
            // Key ensures that shape position changes on route change
            key={`mobile-${pathname}-${shape.pattern}-${i}`}
            pattern={shape.pattern}
            style={shape.style}
            size="xl"
          />
        ))}
      </div>

      {/* Desktop Shapes Container */}
      <div className="hidden md:block">
        {desktopShapes.map((shape, i) => (
          <ShapeCircle
            key={`desktop-${pathname}-${shape.pattern}-${i}`}
            pattern={shape.pattern}
            style={shape.style}
            size="xl"
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundShapes;
