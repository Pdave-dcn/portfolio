"use client";

import { memo, useMemo } from "react";
import BackgroundShapes from "../background/BackgroundShapes";
import { Navbar } from "../navigation/Navbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const PageWrapper = memo(
  ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const isOtherPage = pathname === "/projects" || pathname === "/contact";

    const backgroundHeightClass = useMemo(
      () => (isOtherPage ? "h-[300px] md:h-[420px]" : "h-[400px] md:h-[570px]"),
      [isOtherPage]
    );

    return (
      <div className="relative w-full flex flex-col items-center">
        {/* Full-width background */}
        <div
          className={cn(
            "absolute overflow-hidden top-0 left-0 -z-10 w-full bg-background",
            backgroundHeightClass
          )}
        >
          <BackgroundShapes />
        </div>

        {/* Main content constrained */}
        <div className="w-[95%] lg:w-[80%] mt-10 md:mt-20">
          <Navbar />
          {children}
        </div>
      </div>
    );
  }
);

PageWrapper.displayName = "PageWrapper";
