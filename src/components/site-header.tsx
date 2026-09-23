"use client";

import { useEffect, useState } from "react";
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
import { nav, messages } from "@/lib/site";
import { cn } from "@/lib/utils";

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
        scrolled ? "border-b border-white/10 bg-black/95" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="flex h-16 items-center px-6 sm:h-20 sm:px-10 lg:px-16">
        <Logo />
        <nav className="ml-10 hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.22em] text-foreground/80 uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden lg:block">
          <WhatsAppButton
            message={messages.schedule}
            variant="outline"
            className="h-11 min-w-0 px-5 tracking-[0.16em]"
          >
            Agendar
          </WhatsAppButton>
        </div>
        <div className="ml-auto lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/25 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Abrir menu"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black">
              <SheetHeader>
                <SheetTitle className="sr-only">I2L Solutions</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-5 px-4">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg tracking-[0.12em] text-foreground"
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
