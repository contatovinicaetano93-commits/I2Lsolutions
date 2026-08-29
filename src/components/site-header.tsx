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
              className="text-[10px] font-light tracking-[0.26em] text-foreground/55 uppercase transition-colors duration-500 hover:text-foreground xl:text-[11px]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden lg:block">
          <WhatsAppButton
            message={messages.schedule}
            variant="outline"
            className="h-10 min-w-0 px-6"
          >
            Agendar horário
          </WhatsAppButton>
        </div>
        <div className="ml-auto lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-none border-primary/25 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
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
                    className="text-sm font-light tracking-[0.22em] text-foreground uppercase"
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
