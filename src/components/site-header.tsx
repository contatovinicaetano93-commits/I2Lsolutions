"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-[4.5rem] sm:px-10 lg:px-16">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.18em] text-foreground/70 uppercase transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WhatsAppButton className="hidden h-10 px-5 sm:inline-flex">
            Fale conosco
          </WhatsAppButton>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-foreground/20 lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-2xl tracking-wide">
                  I2L Solutions
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-5 px-4">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.18em] text-foreground uppercase"
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
