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
