"use client";

import { useTheme } from "next-themes";

export function NeonGlow({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  if (theme !== "neon") return <>{children}</>;

  return (
    <div
      className="neon-glow"
      style={{
        filter: `
          drop-shadow(0 0 5px ${color})
          drop-shadow(0 0 5px ${color})
          drop-shadow(0 0 10px ${color})
        `,
      }}
    >
      {children}
    </div>
  );
}
