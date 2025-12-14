import { memo } from "react";
import { typography } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectOverviewProps {
  overview: string;
  screenshots: string[];
}

const ProjectOverview = memo(
  ({ overview, screenshots }: ProjectOverviewProps) => {
    const firstTwoImages = screenshots.slice(0, 2);
    const lastThreeImages = screenshots.slice(2, 5);

    return (
      <div className="py-12 md:py-16">
        <div>
          <h2 className={cn(typography.subheading, "mb-6")}>Overview</h2>
          <p className={cn(typography.body, "lg:w-[70%]")}>{overview}</p>

          {screenshots.length > 0 && (
            <div className="mt-8 space-y-6">
              {/* First two images - large and overflow on desktop */}
              {firstTwoImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:-mx-20 lg:-mx-64 xl:-mx-80">
                  {firstTwoImages.map((image, index) => (
                    <div
                      key={`screenshot-${index}`}
                      className="relative rounded-lg border bg-muted w-full"
                    >
                      <Image
                        src={image}
                        alt={`Screenshot ${index + 1}`}
                        width={1423}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Last three images - larger size */}
              {lastThreeImages.length > 0 && (
                <div className="hidden gap-2 md:grid md:grid-cols-3 md:-mx-20 lg:gap-4 lg:-mx-70">
                  {lastThreeImages.map((image, index) => (
                    <div
                      key={`screenshot-${index + 2}`}
                      className="relative rounded-lg border bg-muted w-full"
                    >
                      <Image
                        src={image}
                        alt={`Screenshot ${index + 3}`}
                        width={1423}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

ProjectOverview.displayName = "ProjectOverview";

export default ProjectOverview;
