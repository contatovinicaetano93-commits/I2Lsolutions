"use client";

import { useEffect, useRef, useState, type UIEvent } from "react";
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const project = projects[active];

  useEffect(() => {
    setShot(0);
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [active]);

  useEffect(() => {
    document
      .getElementById(`project-tab-${project.slug}`)
      ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active, project.slug]);

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const node = event.currentTarget;
    if (node.clientWidth === 0) return;
    const next = Math.round(node.scrollLeft / node.clientWidth);
    if (next !== shot) setShot(next);
  }

  return (
    <Section id="projetos" width="wide">
      <div className="lg:hidden">
        <p className="text-sm text-foreground/55">Projetos</p>
        <h2 className="font-heading mt-2 text-3xl leading-tight">
          Projetos selecionados.
        </h2>

        <div className="-mx-6 mt-6 flex gap-6 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((item, index) => {
            const selected = index === active;

            return (
              <button
                key={item.slug}
                id={`project-tab-${item.slug}`}
                type="button"
                onClick={() => setActive(index)}
                aria-current={selected ? "true" : undefined}
                className={cn(
                  "shrink-0 whitespace-nowrap text-left transition-colors",
                  selected
                    ? "font-heading text-lg text-foreground"
                    : "text-sm text-muted-foreground",
                )}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="-mx-6 mt-6 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {project.images.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[4/3] w-full min-w-full shrink-0 snap-center bg-muted"
            >
              <Image
                src={src}
                alt={`${project.name}, foto ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={active === 0 && index === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-heading text-2xl leading-snug">{project.name}</p>
          {project.place ? (
            <p className="mt-1 text-sm text-muted-foreground">{project.place}</p>
          ) : null}
          {project.images.length > 1 ? (
            <p className="mt-2 text-xs text-foreground/45">
              {String(shot + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")} · deslize para ver
            </p>
          ) : null}
          {project.services ? (
            <p className="mt-3 text-sm text-muted-foreground">{project.services}</p>
          ) : null}
          {project.about ? (
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {project.about}
            </p>
          ) : null}
        </div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16">
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
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 text-left transition-colors"
                  >
                    <span
                      className={cn(
                        selected
                          ? "font-heading text-2xl leading-snug text-foreground sm:text-3xl"
                          : "text-base text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {item.name}
                    </span>
                    {selected && item.place ? (
                      <span className="pt-1.5 text-right text-[11px] leading-4 tracking-[0.16em] text-muted-foreground uppercase">
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
        <DialogContent className="max-h-[90svh] max-w-4xl overflow-y-auto rounded-none bg-background sm:max-w-4xl">
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
