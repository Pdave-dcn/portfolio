"use client";

import { memo } from "react";
import { usePathname } from "next/navigation";
import BackgroundShapes from "../background/BackgroundShapes";
import { Navbar } from "../navigation/Navbar";
import { cn } from "@/lib/utils";

export const PageWrapper = memo(
  ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const isProjectDetailPage = pathname !== "/";

    return (
      <div className="relative w-full flex flex-col items-center">
        {/* Full-width background */}
        <div
          className={cn(
            "absolute overflow-hidden top-0 left-0 -z-10 w-full bg-background",
            "h-[400px] md:h-[570px]"
          )}
        >
          <BackgroundShapes />
        </div>

        {/* Main content constrained */}
        <div className="w-[95%] lg:w-[80%] mt-10 md:mt-20">
          {/* Only show Navbar if NOT on project detail page */}
          {!isProjectDetailPage && <Navbar />}
          {children}
        </div>
      </div>
    );
  }
);

PageWrapper.displayName = "PageWrapper";
