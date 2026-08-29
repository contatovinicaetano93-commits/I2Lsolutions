import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { servicesNav } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-svh overflow-hidden bg-black">
      <div className="absolute inset-x-0 bottom-0 h-[52vh] lg:inset-y-0 lg:left-[36%] lg:h-auto">
        <Image
          src="/images/hero.jpg"
          alt="Residência contemporânea ao entardecer"
          fill
          priority
          sizes="(min-width: 1024px) 64vw, 100vw"
          className="object-cover object-[center_40%] lg:object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/55 via-[35%] to-transparent to-[70%] lg:bg-gradient-to-r lg:from-black lg:via-black/70 lg:via-[32%] lg:to-transparent lg:to-[62%]"
        />
      </div>
      <div className="relative z-10 grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 pt-28 pb-16 sm:px-10 lg:px-16 lg:pt-32">
          <p className="mb-8 text-[11px] font-medium tracking-[0.32em] text-white/70 uppercase">
            01 — Primeira tela
          </p>
          <h1 className="font-heading text-5xl leading-[0.95] font-medium tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
            I2L Solutions
          </h1>
          <p className="mt-5 max-w-xl font-heading text-2xl text-white italic sm:text-3xl">
            Uma solução 360° para a sua necessidade.
          </p>
          <p className="mt-8 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            Você ganha tempo. A I2L cuida de todas as etapas do processo — da
            concepção à entrega — em um único ponto de contato.
          </p>
          <p className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-[11px] tracking-[0.28em] text-white/80 uppercase">
            {servicesNav.map((item, index) => (
              <span key={item.label} className="flex items-center gap-4">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                {item.label}
              </span>
            ))}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 rounded-none bg-white px-7 text-[11px] font-medium tracking-[0.22em] text-black uppercase hover:bg-white/90"
            >
              <a href="#a-i2l">Conheça a I2L</a>
            </Button>
            <WhatsAppButton
              variant="outline"
              className="border-white/80 bg-transparent text-white hover:bg-white hover:text-black"
            >
              Fale conosco
            </WhatsAppButton>
          </div>
        </div>
        <div className="min-h-[52vh] lg:min-h-svh" />
      </div>
    </section>
  );
}
