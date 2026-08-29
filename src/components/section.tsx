import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  number,
  kicker,
  children,
  className,
  tone = "cream",
}: {
  id: string;
  number: string;
  kicker: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "sand" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16",
        tone === "cream" && "bg-background",
        tone === "sand" && "bg-card",
        tone === "ink" && "bg-foreground text-background",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 flex items-center gap-3 text-[10px] font-light tracking-[0.36em] text-white/45 uppercase">
          <span>{number}</span>
          <span className="h-px w-8 bg-primary/50" />
          <span>{kicker}</span>
        </p>
        {children}
      </div>
    </section>
  );
}
