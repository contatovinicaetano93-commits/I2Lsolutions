import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatsappHref, messages } from "@/lib/site";

const heroImage = {
  src: "/images/hero.jpg",
  alt: "Fachada residencial no entardecer",
} as const;

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-svh overflow-hidden bg-black">
      <div className="relative z-10 flex min-h-svh flex-col lg:grid lg:grid-cols-12">
        <div className="flex flex-col justify-center px-6 pt-28 pb-6 sm:px-10 lg:col-span-6 lg:px-16 lg:pt-32 lg:pb-16">
          <p className="mb-3 text-[11px] tracking-[0.28em] text-primary uppercase">
            Solução 360° | Iza Luiza e equipe
          </p>
          <p className="mb-8 text-[11px] tracking-[0.28em] text-foreground/75 uppercase">
            Arquitetura · Interiores · Obra · Retrofit
          </p>
          <h1 className="font-heading max-w-xl text-4xl tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Um único time para cuidar de{" "}
            <em className="italic">todas as etapas</em>.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
            Da concepção do projeto à entrega final da obra.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">
            Você ganha tempo, enquanto assumimos toda a responsabilidade.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button
              asChild
              className="h-11 rounded-full border border-primary bg-primary px-7 text-sm font-normal tracking-[0.16em] text-primary-foreground hover:bg-transparent hover:text-primary"
            >
              <a href="#a-i2l">Conheça a I2L</a>
            </Button>
            <a
              href={whatsappHref(messages.talk)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-[0.12em] text-foreground underline decoration-foreground/30 underline-offset-8 hover:decoration-foreground"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="relative min-h-[240px] flex-1 overflow-hidden lg:col-span-6 lg:min-h-svh">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_42%] lg:object-center"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black from-0% via-black/25 via-[12%] to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/85 lg:via-[28%] lg:to-transparent lg:to-[58%]"
          />
        </div>
      </div>
    </section>
  );
}
