import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="I2L Solutions"
    >
      <img
        src="/images/logo.png"
        alt=""
        width={48}
        height={57}
        className="h-11 w-auto sm:h-12"
      />
      <span className="font-heading text-lg leading-none tracking-[0.22em] text-white">
        SOLUTIONS
      </span>
    </a>
  );
}
