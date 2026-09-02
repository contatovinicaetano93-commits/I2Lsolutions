import Image from "next/image";
import { Button } from "@/components/ui/button";
import { whatsappHref, messages } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-svh overflow-hidden bg-black">
      <div className="absolute inset-x-0 bottom-0 h-[52vh] lg:inset-y-0 lg:left-[42%] lg:h-auto">
        <Image
          src="/images/hero.jpg"
          alt="Residência contemporânea ao entardecer"
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[center_40%] lg:object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/50 via-[30%] to-transparent to-[68%] lg:bg-gradient-to-r lg:from-black lg:via-black/75 lg:via-[28%] lg:to-transparent lg:to-[58%]"
        />
      </div>
      <div className="relative z-10 grid min-h-svh lg:grid-cols-12">
        <div className="flex flex-col justify-center px-6 pt-28 pb-16 sm:px-10 lg:col-span-6 lg:px-16 lg:pt-32">
          <p className="mb-3 text-sm text-foreground/70">
            Solução 360° | Iza Luiza e equipe
          </p>
          <p className="mb-8 text-xs tracking-[0.18em] text-foreground/50 uppercase">
            Arquitetura · Interiores · Obra · Retrofit
          </p>
          <h1 className="font-heading max-w-xl text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Um único time para cuidar de todas as etapas.
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
              className="h-11 rounded-none border border-primary bg-primary px-7 text-sm font-normal text-primary-foreground hover:bg-transparent hover:text-primary"
            >
              <a href="#a-i2l">Conheça a I2L</a>
            </Button>
            <a
              href={whatsappHref(messages.talk)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="min-h-[48vh] lg:col-span-6 lg:min-h-svh" />
      </div>
    </section>
  );
}
