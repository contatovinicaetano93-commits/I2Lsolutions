"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

const slides = projects.map((project) => project.images[0]);

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let timer = 0;

    const start = () => {
      timer = window.setInterval(() => {
        setActive((current) => (current + 1) % slides.length);
      }, 2000);
    };

    const stop = () => {
      window.clearInterval(timer);
    };

    const onVisibility = () => {
      stop();
      if (!document.hidden) {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className={cn(
            "object-cover object-[center_40%] transition-opacity duration-700 lg:object-center",
            index === active ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </div>
  );
}
