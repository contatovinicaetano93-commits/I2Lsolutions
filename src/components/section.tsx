import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionKicker({
  number,
  children,
  className,
}: {
  number?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-6 flex items-center gap-3 text-[11px] tracking-[0.28em] text-primary uppercase",
        className,
      )}
    >
      {number ? <span className="text-primary/80">{number}</span> : null}
      {number ? (
        <span aria-hidden className="h-px w-8 bg-primary/35" />
      ) : null}
      <span>{children}</span>
    </p>
  );
}

export function Section({
  id,
  kicker,
  children,
  className,
  tone = "cream",
  width = "default",
  number,
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
        "scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32",
        tone === "cream" && "bg-background",
        tone === "sand" && "border-y border-primary/15 bg-background",
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
        {kicker ? <SectionKicker number={number}>{kicker}</SectionKicker> : null}
        {children}
      </div>
    </section>
  );
}
