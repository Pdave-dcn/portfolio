"use client";

import { Navbar } from "../navigation/Navbar";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Full-width background */}
      <div className="absolute top-0 left-0 -z-10 w-full h-[420px] md:h-[500px] bg-stone-900"></div>

      {/* Main content constrained to 80% width */}
      <div className="w-[90%] md:w-[80%] mt-10 md:mt-20">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
