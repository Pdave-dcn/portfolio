import { ShapeCircle } from "../ui/shape-circle";

type ShapePattern = "dots" | "horizontal" | "vertical" | "solid";

type ShapeConfig = {
  pattern: ShapePattern;
  left: number;
  top: number;
};

// Mobile Shape Positions
const MOBILE_SHAPES: ShapeConfig[] = [
  { pattern: "vertical", left: 80, top: -350 },
  { pattern: "horizontal", left: 10, top: 0 },
  { pattern: "dots", left: 200, top: 0 },
  { pattern: "dots", left: -380, top: 220 },
  { pattern: "solid", left: -400, top: 350 },
];

// Desktop Shape Positions
const DESKTOP_SHAPES: ShapeConfig[] = [
  { pattern: "dots", left: -50, top: 0 },
  { pattern: "horizontal", left: 1200, top: 300 },
  { pattern: "vertical", left: 700, top: 150 },
  { pattern: "dots", left: 200, top: 250 },
  { pattern: "dots", left: 1100, top: -420 },
  { pattern: "horizontal", left: 1200, top: -200 },
  { pattern: "horizontal", left: 100, top: -200 },
  { pattern: "dots", left: 800, top: 350 },
  { pattern: "dots", left: 400, top: 80 },
  { pattern: "vertical", left: 1000, top: 80 },
  { pattern: "horizontal", left: 300, top: 400 },
  { pattern: "dots", left: 1000, top: 420 },
  { pattern: "solid", left: 50, top: 100 },
  { pattern: "dots", left: -200, top: 350 },
];

const BackgroundShapes = () => {
  return (
    <>
      {/* Mobile Shapes Container */}
      <div className="md:hidden">
        {MOBILE_SHAPES.map((shape, i) => (
          <ShapeCircle
            key={`mobile-${shape.pattern}-${i}`}
            pattern={shape.pattern}
            style={{
              position: "absolute",
              left: `${shape.left}px`,
              top: `${shape.top}px`,
            }}
            size={"xl"}
          />
        ))}
      </div>

      {/* Desktop Shapes Container */}
      <div className="hidden md:block">
        {DESKTOP_SHAPES.map((shape, i) => (
          <ShapeCircle
            key={`desktop-${shape.pattern}-${i}`}
            pattern={shape.pattern}
            style={{
              position: "absolute",
              left: `${shape.left}px`,
              top: `${shape.top}px`,
            }}
            size="xl"
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundShapes;
