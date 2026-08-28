import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="flex size-8 items-center justify-center bg-white text-[10px] font-medium tracking-[0.2em] text-black">
        I2L
      </span>
      <span className="font-heading text-lg leading-none tracking-[0.22em] text-white">
        SOLUTIONS
      </span>
    </a>
  );
}
