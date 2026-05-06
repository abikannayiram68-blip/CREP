import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const isCenter = align === "center";
  return (
    <ScrollReveal className={isCenter ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-ring" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
