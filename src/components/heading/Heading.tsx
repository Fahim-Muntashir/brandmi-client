import React from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  heading?: string;
  subheading?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function Heading({
  heading,
  subheading,
  size = "md",
  className,
}: HeadingProps) {
  const headingClasses = cn(
    "font-bold leading-tight",
    {
      "text-2xl md:text-3xl lg:text-4xl": size === "sm",
      "text-3xl md:text-4xl lg:text-5xl": size === "md",
      "text-4xl md:text-5xl lg:text-6xl": size === "lg",
    },
    className
  );

  const subheadingClasses = cn("mt-2 text-muted-foreground", {
    "text-sm md:text-base": size === "sm",
    "text-base md:text-lg": size === "md",
    "text-lg md:text-xl": size === "lg",
  });

  return (
    <header className="text-center">
      <h2 className={headingClasses}>{heading}</h2>
      {subheading && <p className={subheadingClasses}>{subheading}</p>}
    </header>
  );
}
