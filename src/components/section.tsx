import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  kicker,
  children,
  className,
  tone = "cream",
  width = "default",
}: {
  id: string;
  number?: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "sand" | "ink";
  width?: "default" | "wide" | "narrow";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-16",
        tone === "cream" && "bg-background",
        tone === "sand" && "bg-muted/60",
        tone === "ink" && "bg-foreground text-background",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto",
          width === "narrow" && "max-w-2xl",
          width === "default" && "max-w-5xl",
          width === "wide" && "max-w-6xl",
        )}
      >
        {kicker ? (
          <p className="mb-6 text-sm text-foreground/55">{kicker}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
