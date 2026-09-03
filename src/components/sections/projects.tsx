"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Section } from "@/components/section";
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
  const [shot, setShot] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const project = projects[active];

  useEffect(() => {
    setShot(0);
  }, [active]);

  return (
    <Section id="projetos" width="wide">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <button
            type="button"
            onClick={() => setGalleryOpen(true)}
            className="group relative block aspect-[4/3] w-full overflow-hidden bg-muted text-left"
            aria-label={`Abrir galeria de ${project.name}`}
          >
            <Image
              src={project.images[shot]}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority={active === 0}
            />
          </button>
          {project.images.length > 1 ? (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]">
              {project.images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setShot(index)}
                  className={cn(
                    "relative aspect-[4/3] w-24 shrink-0 overflow-hidden bg-muted",
                    index === shot
                      ? "ring-1 ring-primary"
                      : "opacity-70 hover:opacity-100",
                  )}
                  aria-label={`Ver foto ${index + 1} de ${project.name}`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col lg:col-span-4">
          <p className="text-sm text-foreground/55">Projetos</p>
          <h2 className="font-heading mt-3 text-4xl leading-tight">
            Projetos selecionados.
          </h2>
          <ul className="mt-10 space-y-6">
            {projects.map((item, index) => {
              const selected = index === active;

              return (
                <li key={item.slug}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-current={selected ? "true" : undefined}
                    className="flex w-full items-start justify-between gap-4 text-left transition-colors"
                  >
                    <span
                      className={cn(
                        "min-w-0 flex-1",
                        selected
                          ? "font-heading text-2xl leading-snug text-foreground sm:text-3xl"
                          : "text-base text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.name}
                    </span>
                    {selected && item.place ? (
                      <span className="mt-1.5 w-[6.5rem] shrink-0 text-right text-[11px] leading-4 tracking-[0.16em] text-muted-foreground uppercase">
                        {item.place.split(" · ").map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    ) : null}
                  </button>
                  {selected && (item.services || item.about) ? (
                    <div className="mt-4 max-w-sm">
                      {item.services ? (
                        <p className="text-sm text-muted-foreground">
                          {item.services}
                        </p>
                      ) : null}
                      {item.about ? (
                        <p
                          className={cn(
                            "text-sm leading-7 text-muted-foreground",
                            item.services && "mt-4",
                          )}
                        >
                          {item.about}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-4xl rounded-none bg-background sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">
              {project.name}
            </DialogTitle>
          </DialogHeader>
          <div className="grid max-h-[70vh] gap-4 overflow-y-auto sm:grid-cols-2">
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
