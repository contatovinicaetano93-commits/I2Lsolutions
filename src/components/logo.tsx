import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="flex size-9 items-center justify-center border border-primary/40 text-[11px] font-medium tracking-[0.18em] text-primary">
        I2L
      </span>
      <span className="font-heading text-lg leading-none tracking-[0.18em] text-foreground">
        SOLUTIONS
      </span>
    </a>
  );
}
