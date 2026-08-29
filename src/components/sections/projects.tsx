"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const project = projects[active];

  return (
    <Section id="projetos" number="04" kicker="Projetos" tone="sand">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Projetos selecionados.
      </h2>
      <p className="mt-4 font-heading text-xl italic text-white/60 sm:text-2xl">
        Cada projeto, uma solução.
      </p>
      <div className="mt-10 flex flex-wrap gap-2">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "border px-5 py-2.5 text-[10px] font-light tracking-[0.24em] uppercase transition-all duration-500",
              index === active
                ? "border-white bg-white text-black"
                : "border-white/20 bg-transparent text-white/70 hover:border-white/60 hover:text-white",
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
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
            <h3 className="font-heading text-4xl">{project.name}</h3>
            <p className="mt-3 text-[11px] font-light tracking-[0.22em] text-white/50 uppercase">
              {project.place}
            </p>
            <p className="mt-2 text-[11px] font-light tracking-[0.22em] text-white/70 uppercase">
              {project.services}
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            {project.about}
          </p>
          <Button
            variant="outline"
            className="h-12 rounded-none border-white/35 px-8 text-[10px] font-light tracking-[0.32em] uppercase hover:border-white hover:bg-white hover:text-black"
            onClick={() => setGalleryOpen(true)}
          >
            Galeria
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
