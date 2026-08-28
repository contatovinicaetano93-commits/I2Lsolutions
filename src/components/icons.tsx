import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("size-12", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function PersonIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="24" cy="16" r="6" {...stroke} />
      <path d="M10 38c1.5-8 7-12 14-12s12.5 4 14 12" {...stroke} />
    </Svg>
  );
}

export function PuzzleIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M16 12h8c0 3 2 5 4 5s4-2 4-5h4v8c-3 0-5 2-5 4s2 4 5 4v8H27c0-3-2-5-4-5s-4 2-4 5H12V27c3 0 5-2 5-4s-2-4-5-4V12h4z"
        {...stroke}
      />
    </Svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="24" cy="24" r="14" {...stroke} />
      <path d="M24 16v9l6 4" {...stroke} />
    </Svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M24 8 12 13v11c0 8 5.5 13.5 12 16 6.5-2.5 12-8 12-16V13L24 8z" {...stroke} />
      <path d="m18 24 4 4 8-9" {...stroke} />
    </Svg>
  );
}

export function LightbulbIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M24 10a10 10 0 0 0-6 18c.8 1.2 1 2.4 1 4h10c0-1.6.2-2.8 1-4a10 10 0 0 0-6-18z" {...stroke} />
      <path d="M20 36h8M21 40h6" {...stroke} />
    </Svg>
  );
}

export function PencilRulerIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="m14 34 20-20 4 4-20 20H14v-4z" {...stroke} />
      <path d="m30 14 4 4M18 30l4 4" {...stroke} />
    </Svg>
  );
}

export function ArmchairIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 24v-6a6 6 0 0 1 12 0 6 6 0 0 1 12 0v6" {...stroke} />
      <path d="M10 26h28v8H10z" {...stroke} />
      <path d="M14 34v4M34 34v4" {...stroke} />
    </Svg>
  );
}

export function HelmetIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M10 28c0-8 6-16 14-16s14 8 14 16H10z" {...stroke} />
      <path d="M8 28h32v4H8z" {...stroke} />
      <path d="M24 12v16" {...stroke} />
    </Svg>
  );
}

export function RetrofitIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M16 18a10 10 0 0 1 16 4" {...stroke} />
      <path d="M32 14v8h-8" {...stroke} />
      <path d="M32 30a10 10 0 0 1-16-4" {...stroke} />
      <path d="M16 34v-8h8" {...stroke} />
    </Svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="18" cy="24" r="7" {...stroke} />
      <path d="M25 24h13l-3 3m0-3-3 3" {...stroke} />
    </Svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 14h24v16H20l-8 6V14z" {...stroke} />
    </Svg>
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="14" y="12" width="20" height="26" rx="2" {...stroke} />
      <path d="M18 12V9h12v3" {...stroke} />
      <path d="M18 22h12M18 28h8" {...stroke} />
    </Svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="22" cy="22" r="8" {...stroke} />
      <path d="m28 28 8 8" {...stroke} />
    </Svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="10" y="14" width="28" height="22" rx="2" {...stroke} />
      <path d="M10 20h28M16 10v8M32 10v8" {...stroke} />
    </Svg>
  );
}

export function QualityIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="24" cy="24" r="12" {...stroke} />
      <path d="m24 16 2.2 4.6 5 .7-3.6 3.6.9 5.1L24 27.6 19.5 30l.9-5.1-3.6-3.6 5-.7z" {...stroke} />
    </Svg>
  );
}

export function CostIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="24" cy="24" r="12" {...stroke} />
      <path d="M24 16v16M20 20c1-1.5 2.2-2 4-2s3.5.8 3.5 2.4c0 3.6-7 2.2-7 5.6 0 1.6 1.6 2.4 3.5 2.4s3-.6 4-2" {...stroke} />
    </Svg>
  );
}

export function ArchitectureIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M8 38V18L24 8l16 10v20" {...stroke} />
      <path d="M20 38V26h8v12" {...stroke} />
      <path d="M14 24h4M30 24h4M14 30h4M30 30h4" {...stroke} />
    </Svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M24 42s-12-12.5-12-20a12 12 0 1 1 24 0c0 7.5-12 20-12 20z" {...stroke} />
      <circle cx="24" cy="22" r="4" {...stroke} />
    </Svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-5", className)} aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 2.1 17.7L1 23l5.5-1.1A11 11 0 0 0 20.5 3.5m-8.4 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.6.6-3.1-.2-.3a9.1 9.1 0 1 1 7.7 4.3m5.2-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1 10 10 0 0 0 2.4.9 2.3 2.3 0 0 0 2.1-.4 2.6 2.6 0 0 0 .6-1.7c0-.2 0-.3-.2-.4"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="8" y="14" width="32" height="20" rx="2" {...stroke} />
      <path d="m8 16 16 11 16-11" {...stroke} />
    </Svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="10" y="10" width="28" height="28" rx="7" {...stroke} />
      <circle cx="24" cy="24" r="7" {...stroke} />
      <circle cx="32.5" cy="15.5" r="1.4" fill="currentColor" />
    </Svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 24" className={cn("h-6 w-12", className)} aria-hidden="true">
      <path d="M4 12h36M34 6l8 6-8 6" {...stroke} />
    </svg>
  );
}
