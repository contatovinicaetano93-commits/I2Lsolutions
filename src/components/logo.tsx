import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="I2L Solutions"
    >
      <img
        src="/images/logo.png?v=c9b08a"
        alt=""
        width={48}
        height={57}
        className="h-10 w-auto sm:h-11"
      />
      <span className="font-heading text-xs leading-none tracking-[0.28em] text-foreground uppercase">
        SOLUTIONS
      </span>
    </a>
  );
}
