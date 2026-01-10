"use client";

import { Download } from "lucide-react";
import { useState } from "react";

export const ResumeDownload = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Pdave_Full_Stack_Developer.pdf";
    link.download = "David_Providence_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Download resume"
        className="p-1.5 bg-background rounded-full hover:bg-accent/10 transition-colors"
      >
        <Download className="h-5 w-5 cursor-pointer neon:text-accent" />
      </button>

      {isHovered && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs uppercase tracking-widest font-medium neon:text-accent text-foreground/60 bg-background border border-border/30 px-3 py-1">
            CV
          </span>
        </div>
      )}
    </div>
  );
};

ResumeDownload.displayName = "ResumeDownload";
