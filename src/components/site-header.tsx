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
import { nav } from "@/lib/site";
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
