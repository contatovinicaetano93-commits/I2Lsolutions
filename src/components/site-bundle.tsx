"use client";

import * as React from "react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, XIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot, Dialog as RadixDialog } from "radix-ui";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const SheetPrimitive = RadixDialog;
const DialogPrimitive = RadixDialog;


/* ---- src/lib/utils.ts ---- */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* ---- src/lib/site.ts ---- */
export const site = {
  name: "I2L Solutions",
  tagline: "Uma solução 360° para a sua necessidade.",
  city: "Itaim Bibi, São Paulo",
  whatsapp: {
    e164: "5511989116464",
    display: "(11) 98911-6464",
  },
  email: "",
  instagram: "",
} as const;

export const whatsappHref = (message: string) =>
  `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(message)}`;

export const messages = {
  talk: "Olá, Isa. Gostaria de conversar sobre um projeto com a I2L Solutions.",
  schedule:
    "Olá, Isa. Gostaria de agendar um horário no escritório da I2L, no Itaim Bibi.",
};

export const nav = [
  { href: "#a-i2l", label: "A I2L" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const servicesNav = [
  { href: "#servicos", label: "Projeto" },
  { href: "#servicos", label: "Interiores" },
  { href: "#servicos", label: "Obra" },
  { href: "#servicos", label: "Retrofit" },
] as const;

export const projects = [
  {
    slug: "residencia-jardins",
    name: "Residência Jardins",
    location: "Jardins, São Paulo",
    type: "Residencial",
    services: "Arquitetura · Interiores · Obra",
    about:
      "Uma casa pensada para o cotidiano da família, com circulação clara, luz natural e materiais que envelhecem bem. O projeto uniu arquitetura e interiores desde a concepção, para que cada ambiente chegasse à obra sem retrabalho.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "apartamento-itaim",
    name: "Apartamento Itaim",
    location: "Itaim Bibi, São Paulo",
    type: "Residencial · Retrofit",
    services: "Interiores · Retrofit",
    about:
      "Releitura de um apartamento existente: a planta foi reorganizada, a iluminação redesenhada e os acabamentos atualizados sem perder a essência do imóvel. O retrofit aconteceu com a família no radar de prazo e custo.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "casa-campo",
    name: "Casa de Campo",
    location: "Interior de São Paulo",
    type: "Residencial",
    services: "Arquitetura · Interiores",
    about:
      "Um refúgio de fim de semana com relação direta com a paisagem. Os espaços internos e externos foram desenhados juntos, com materiais honestos e uma paleta que conversa com o entorno.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
] as const;

/* ---- src/components/ui/button.tsx ---- */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

/* ---- src/components/ui/sheet.tsx ---- */
function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close data-slot="sheet-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-3 right-3"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

/* ---- src/components/ui/dialog.tsx ---- */
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              className="absolute top-2 right-2"
              size="icon-sm"
            >
              <XIcon
              />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "font-heading text-base leading-none font-medium",
        className
      )}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

/* ---- src/components/icons.tsx ---- */
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

/* ---- src/components/logo.tsx ---- */
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

/* ---- src/components/section.tsx ---- */
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
        tone === "sand" && "bg-muted/60",
        tone === "ink" && "bg-foreground text-background",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 flex items-center gap-3 text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
          <span>{number}</span>
          <span className="h-px w-8 bg-primary/50" />
          <span>{kicker}</span>
        </p>
        {children}
      </div>
    </section>
  );
}

/* ---- src/components/whatsapp-button.tsx ---- */
export function WhatsAppButton({
  children,
  message = messages.talk,
  variant = "solid",
  className,
}: {
  children: React.ReactNode;
  message?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <Button
      asChild
      className={cn(
        "h-12 rounded-none px-7 text-[11px] font-medium tracking-[0.22em] uppercase",
        variant === "solid" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" &&
          "border-foreground/70 bg-transparent text-foreground hover:bg-foreground hover:text-background",
        variant === "light" &&
          "border-background/70 bg-transparent text-background hover:bg-background hover:text-foreground",
        className,
      )}
      variant={variant === "solid" ? "default" : "outline"}
    >
      <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

/* ---- src/components/whatsapp-float.tsx ---- */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(messages.talk)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:bg-white/90 sm:right-8 sm:bottom-8"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

/* ---- src/components/site-header.tsx ---- */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors",
        scrolled ? "bg-black/95" : "bg-transparent",
      )}
    >
      <div className="flex h-20 items-center px-6 sm:px-10 lg:px-16">
        <Logo />
        <nav className="ml-8 hidden items-center gap-6 lg:flex xl:ml-12 xl:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] font-medium tracking-[0.22em] text-white/75 uppercase transition-colors hover:text-white xl:text-[11px]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-white/30 bg-transparent text-white hover:bg-white hover:text-black"
                aria-label="Abrir menu"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-2xl tracking-wide text-white">
                  I2L Solutions
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-5 px-4">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.18em] text-white uppercase"
                  >
                    {item.label}
                  </a>
                ))}
                <WhatsAppButton className="mt-4 w-full">Fale conosco</WhatsAppButton>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/* ---- src/components/site-footer.tsx ---- */
export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.22em] text-foreground/70 uppercase">
          {servicesNav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} I2L Solutions. Itaim Bibi, São Paulo.
      </p>
    </footer>
  );
}

/* ---- src/components/sections/hero.tsx ---- */
export function Hero() {
  return (
    <section id="inicio" className="relative min-h-svh bg-black">
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 pt-28 pb-16 sm:px-10 lg:px-16 lg:pt-32">
          <p className="mb-8 text-[11px] font-medium tracking-[0.32em] text-white/70 uppercase">
            01 — Primeira tela
          </p>
          <h1 className="font-heading text-5xl leading-[0.95] font-medium tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
            I2L Solutions
          </h1>
          <p className="mt-5 max-w-xl font-heading text-2xl text-white italic sm:text-3xl">
            Uma solução 360° para a sua necessidade.
          </p>
          <p className="mt-8 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            Você ganha tempo. A I2L cuida de todas as etapas do processo — da
            concepção à entrega — em um único ponto de contato.
          </p>
          <p className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-[11px] tracking-[0.28em] text-white/80 uppercase">
            {servicesNav.map((item, index) => (
              <span key={item.label} className="flex items-center gap-4">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                {item.label}
              </span>
            ))}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-none bg-white px-7 text-[11px] font-medium tracking-[0.22em] text-black uppercase hover:bg-white/90"
            >
              <a href="#a-i2l">Conheça a I2L</a>
            </Button>
            <WhatsAppButton
              variant="outline"
              className="border-white/80 bg-transparent text-white hover:bg-white hover:text-black"
            >
              Fale conosco
            </WhatsAppButton>
          </div>
        </div>
        <div className="relative min-h-[52vh] bg-black lg:min-h-svh">
          <Image
            src="/images/hero.jpg"
            alt="Residência contemporânea ao entardecer"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---- src/components/sections/about.tsx ---- */
const features = [
  {
    icon: PersonIcon,
    title: "Um único ponto de contato",
    text: "Você fala com a I2L. Nós coordenamos projeto, interiores, obra e retrofit.",
  },
  {
    icon: PuzzleIcon,
    title: "Etapas integradas",
    text: "Cada fase conversa com a seguinte. Menos ruído, menos retrabalho.",
  },
  {
    icon: ClockIcon,
    title: "Mais tempo para o que importa",
    text: "Você decide. A I2L organiza o processo e acompanha o andamento.",
  },
  {
    icon: ShieldIcon,
    title: "Mais controle e tranquilidade",
    text: "Prazo, qualidade e custo no mesmo contrato, com a mesma equipe.",
  },
];

export function About() {
  return (
    <Section id="a-i2l" number="02" kicker="A I2L" tone="sand">
      <h2 className="font-heading max-w-2xl text-4xl leading-tight sm:text-5xl">
        Tudo em um só lugar.
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
        A I2L Solutions nasceu para ser a solução 360° do seu projeto: da ideia
        inicial à chave na mão, com arquitetura, interiores, obra e retrofit
        sob o mesmo olhar.
      </p>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <article key={item.title} className="space-y-4">
            <item.icon className="text-primary" />
            <h3 className="font-heading text-xl">{item.title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---- src/components/sections/differential.tsx ---- */
const stages = [
  { n: "01", title: "Concepção", text: "Necessidades e ideias.", icon: LightbulbIcon },
  { n: "02", title: "Projeto", text: "Soluções para cada espaço.", icon: PencilRulerIcon },
  { n: "03", title: "Interiores", text: "Ambientes, materiais e acabamentos.", icon: ArmchairIcon },
  { n: "04", title: "Obra", text: "Execução e acompanhamento.", icon: HelmetIcon },
  { n: "05", title: "Retrofit", text: "Transformação do que já existe.", icon: RetrofitIcon },
  { n: "06", title: "Entrega", text: "Conclusão do projeto.", icon: KeyIcon },
];

export function Differential() {
  return (
    <Section id="diferencial" number="03" kicker="Nosso diferencial">
      <h2 className="font-heading max-w-2xl text-4xl leading-tight sm:text-5xl">
        Uma empresa. Todas as etapas.
      </h2>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Em vez de fragmentar o projeto entre escritórios, a I2L conduz o ciclo
        completo — e isso muda o resultado.
      </p>

      <div className="mt-16 hidden lg:block">
        <div className="relative mx-auto aspect-square max-w-[560px]">
          <div className="absolute inset-[18%] rounded-full border border-primary/30" />
          <div className="absolute inset-[28%] flex flex-col items-center justify-center rounded-full border border-primary/50 bg-card text-center">
            <p className="font-heading text-4xl text-primary">360°</p>
            <p className="mt-1 max-w-[10rem] text-[11px] tracking-[0.22em] text-foreground uppercase">
              Solução completa
            </p>
          </div>
          {stages.map((stage, index) => {
            const angle = ((index * 60 - 90) * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(angle);
            const y = 50 + 42 * Math.sin(angle);
            return (
              <div
                key={stage.n}
                className="absolute w-36 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <stage.icon className="mx-auto size-10 text-primary" />
                <p className="mt-2 text-[10px] tracking-[0.24em] text-primary">
                  {stage.n}
                </p>
                <p className="font-heading text-lg">{stage.title}</p>
                <p className="text-xs text-muted-foreground">{stage.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:hidden">
        {stages.map((stage) => (
          <article key={stage.n} className="flex gap-4">
            <stage.icon className="size-10 shrink-0 text-primary" />
            <div>
              <p className="text-[10px] tracking-[0.24em] text-primary">{stage.n}</p>
              <h3 className="font-heading text-xl">{stage.title}</h3>
              <p className="text-sm text-muted-foreground">{stage.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---- src/components/sections/commitment.tsx ---- */
const pillars = [
  {
    icon: CalendarIcon,
    title: "Prazo",
    text: "Planejamento e acompanhamento em cada etapa, para o projeto avançar no tempo combinado.",
  },
  {
    icon: QualityIcon,
    title: "Qualidade",
    text: "Atenção ao detalhe e excelência na escolha de soluções, materiais e execução.",
  },
  {
    icon: CostIcon,
    title: "Custo",
    text: "Previsibilidade e controle durante o processo, com um único contrato e uma única equipe.",
  },
];

export function Commitment() {
  return (
    <Section id="compromisso" number="04" kicker="Nosso compromisso" tone="sand">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
        Prazo. Qualidade. Custo.
      </h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {pillars.map((item) => (
          <article key={item.title} className="text-center">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-primary/40">
              <item.icon className="size-10 text-primary" />
            </div>
            <h3 className="font-heading mt-6 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-16 bg-secondary px-8 py-8 text-center font-heading text-2xl sm:text-3xl">
        Um único contrato. Uma única equipe. Uma solução completa.
      </p>
    </Section>
  );
}

/* ---- src/components/sections/services.tsx ---- */
const services = [
  {
    icon: ArchitectureIcon,
    title: "Arquitetura",
    text: "Projetos personalizados, da implantação ao detalhamento, alinhados ao modo de viver de cada cliente.",
  },
  {
    icon: ArmchairIcon,
    title: "Design de interiores",
    text: "Layouts, iluminação, materiais e detalhes que transformam o espaço em ambiente.",
  },
  {
    icon: HelmetIcon,
    title: "Obras",
    text: "Execução e acompanhamento de etapas, com a mesma equipe que desenhou o projeto.",
  },
  {
    icon: RetrofitIcon,
    title: "Retrofit",
    text: "Modernização de espaços existentes, preservando a essência e atualizando o uso.",
  },
];

export function Services() {
  return (
    <Section id="servicos" number="05" kicker="Serviços">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Soluções para cada etapa do seu projeto.
      </h2>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <article key={item.title} className="border-t border-primary/30 pt-6">
            <item.icon className="text-primary" />
            <h3 className="font-heading mt-5 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---- src/components/sections/projects.tsx ---- */
export function Projects() {
  const [active, setActive] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const project = projects[active];

  return (
    <Section id="projetos" number="06" kicker="Projetos" tone="sand">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Nossos projetos. Cada projeto, uma solução.
      </h2>
      <div className="mt-8 flex flex-wrap gap-2">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "border px-4 py-2 text-[11px] tracking-[0.18em] uppercase transition-colors",
              index === active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-transparent text-foreground hover:border-primary",
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={project.images[0]}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={active === 0}
          />
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-[11px] tracking-[0.24em] text-primary uppercase">
              Projeto
            </p>
            <h3 className="font-heading mt-1 text-3xl">{project.name}</h3>
          </div>
          <dl className="space-y-3 text-sm">
            <div className="flex gap-4 border-b border-border pb-3">
              <dt className="w-28 text-muted-foreground">Local</dt>
              <dd>{project.location}</dd>
            </div>
            <div className="flex gap-4 border-b border-border pb-3">
              <dt className="w-28 text-muted-foreground">Tipo</dt>
              <dd>{project.type}</dd>
            </div>
            <div className="flex gap-4 border-b border-border pb-3">
              <dt className="w-28 text-muted-foreground">Serviços</dt>
              <dd>{project.services}</dd>
            </div>
          </dl>
          <div>
            <p className="text-[11px] tracking-[0.24em] text-primary uppercase">
              Sobre o projeto
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">{project.about}</p>
          </div>
          <Button
            variant="outline"
            className="h-11 rounded-none border-primary px-5 text-[11px] tracking-[0.2em] uppercase"
            onClick={() => setGalleryOpen(true)}
          >
            Galeria de imagens e renders
          </Button>
        </div>
      </div>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-4xl rounded-none bg-background sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">
              {project.name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image src={src} alt={project.name} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </Section>
  );
}

/* ---- src/components/sections/how-it-works.tsx ---- */
const steps = [
  { n: "01", title: "Conversa", text: "Você apresenta a necessidade.", icon: ChatIcon },
  { n: "02", title: "Planejamento", text: "Escopo, prazo e caminho.", icon: ClipboardIcon },
  { n: "03", title: "Desenvolvimento", text: "Projeto e interiores.", icon: PencilRulerIcon },
  { n: "04", title: "Execução", text: "Obra e retrofit, quando fizer sentido.", icon: HelmetIcon },
  { n: "05", title: "Acompanhamento", text: "Olho no detalhe, no prazo e no custo.", icon: SearchIcon },
  { n: "06", title: "Entrega", text: "O espaço pronto para ser vivido.", icon: KeyIcon },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" number="07" kicker="Como funciona">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Você apresenta a necessidade. A I2L cuida do processo.
      </h2>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.n} className="relative">
            <div className="flex items-start gap-4">
              <step.icon className="size-11 shrink-0 text-primary" />
              <div>
                <p className="text-[10px] tracking-[0.24em] text-primary">{step.n}</p>
                <h3 className="font-heading text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </div>
            {index < steps.length - 1 ? (
              <ArrowIcon className="mt-4 hidden text-primary/50 lg:block" />
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---- src/components/sections/founder.tsx ---- */
export function Founder() {
  return (
    <Section id="sobre" number="08" kicker="Sobre Isa Luiza Lopes" tone="sand">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        A visão por trás da I2L Solutions.
      </h2>
      <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-muted-foreground">
        <p>
          Isa Luiza Lopes é arquiteta formada pela Universidade Presbiteriana
          Mackenzie, com especialização em design de interiores pelo Istituto
          Marangoni. A formação em São Paulo e em Milão moldou um olhar que
          une técnica, materialidade e o cotidiano de quem vai viver o espaço.
        </p>
        <p>
          A I2L Solutions nasce dessa convicção: o cliente não deveria
          fragmentar o próprio projeto entre escritórios, fornecedores e
          frentes de obra. Arquitetura, interiores, execução e retrofit
          funcionam melhor quando falam a mesma língua — e respondem a uma
          única equipe.
        </p>
        <p>
          O trabalho da Isa é filtrar experiências, entender o mercado e
          transformar o que foi aprendido em um processo mais claro, mais
          previsível e mais humano para quem constrói ou transforma um espaço.
        </p>
      </div>
      <blockquote className="mt-12 bg-primary px-8 py-10 text-primary-foreground sm:px-12">
        <p className="font-heading text-2xl leading-snug sm:text-3xl">
          “Filtrar experiências, entender o mercado e transformar aprendizados
          em soluções melhores para o cliente.”
        </p>
        <footer className="mt-6 text-[11px] tracking-[0.22em] uppercase">
          Isa Luiza Lopes · I2L Solutions
        </footer>
      </blockquote>
    </Section>
  );
}

/* ---- src/components/sections/why.tsx ---- */
const reasons = [
  "Uma única empresa para todas as etapas",
  "Etapas integradas, do desenho à entrega",
  "Mais previsibilidade de prazo e custo",
  "Um único ponto de contato",
  "Mais praticidade no dia a dia do projeto",
  "Mais tempo para você — e menos retrabalho",
  "Controle e tranquilidade do começo ao fim",
];

export function Why() {
  return (
    <Section id="por-que" number="09" kicker="Por que I2L?">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            Porque você não precisa cuidar de tudo.
          </h2>
          <ul className="mt-10 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm sm:text-base">
                <span className="mt-1 inline-flex size-4 shrink-0 items-center justify-center border border-primary text-[10px] text-primary">
                  ✓
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <p className="self-end text-lg leading-8 text-muted-foreground">
          O papel da I2L é simples: você traz a necessidade, nós conduzimos o
          processo. Projeto, interiores, obra e retrofit deixam de ser
          frentes soltas e passam a ser uma solução só — com prazo, qualidade
          e custo no mesmo compromisso.
        </p>
      </div>
    </Section>
  );
}

/* ---- src/components/sections/office.tsx ---- */
export function Office() {
  return (
    <Section id="escritorio" number="10" kicker="Nosso escritório" tone="sand">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            Estamos no Itaim.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
            O escritório da I2L fica no Itaim Bibi, em São Paulo. Um ponto de
            encontro para conversar sobre o seu projeto, com calma e no lugar
            certo.
          </p>
          <div className="mt-8 flex items-center gap-3 text-foreground">
            <PinIcon className="size-10 text-primary" />
            <p className="text-sm tracking-[0.12em] uppercase">{site.city}</p>
          </div>
          <WhatsAppButton className="mt-8" message={messages.schedule}>
            Agendar horário
          </WhatsAppButton>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Ambiente de escritório da I2L no Itaim Bibi"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}

/* ---- src/components/sections/contact.tsx ---- */
export function Contact() {
  return (
    <Section id="contato" number="11" kicker="Contato">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Vamos conversar sobre o seu projeto?
      </h2>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Chame no WhatsApp. É o caminho mais direto para apresentar a
        necessidade e entender, juntos, o próximo passo.
      </p>
      <ul className="mt-12 grid gap-8 sm:grid-cols-3">
        <li>
          <a
            href={`https://wa.me/${site.whatsapp.e164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3"
          >
            <WhatsAppIcon className="size-8 text-primary" />
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
              WhatsApp
            </p>
            <p className="text-lg group-hover:text-primary">{site.whatsapp.display}</p>
          </a>
        </li>
        {site.email ? (
          <li>
            <a href={`mailto:${site.email}`} className="group flex flex-col gap-3">
              <MailIcon className="size-10 text-primary" />
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                E-mail
              </p>
              <p className="text-lg group-hover:text-primary">{site.email}</p>
            </a>
          </li>
        ) : null}
        {site.instagram ? (
          <li>
            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <InstagramIcon className="size-10 text-primary" />
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                Instagram
              </p>
              <p className="text-lg group-hover:text-primary">@{site.instagram}</p>
            </a>
          </li>
        ) : null}
      </ul>
      <WhatsAppButton className="mt-12" variant="outline">
        Fale conosco
      </WhatsAppButton>
    </Section>
  );
}
