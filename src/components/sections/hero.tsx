import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";

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
          <p className="mb-8 text-[10px] font-light tracking-[0.42em] text-white/50 uppercase">
            Iza & equipe
          </p>
          <h1 className="font-heading max-w-xl text-4xl leading-[1.05] font-light tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Um único time para cuidar de todo o seu projeto.
          </h1>
          <p className="mt-8 max-w-xl text-[11px] font-light tracking-[0.28em] text-white/80 uppercase">
            Arquitetura. Interiores. Obra. Retrofit.
          </p>
          <p className="mt-8 text-[11px] font-light tracking-[0.28em] text-white/45 uppercase">
            Do conceito à entrega da obra.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-12 min-w-[11.5rem] rounded-none border border-white bg-white px-8 text-[10px] font-light tracking-[0.32em] text-black uppercase hover:bg-transparent hover:text-white"
            >
              <a href="#a-i2l">Conheça a I2L</a>
            </Button>
            <WhatsAppButton variant="outline">Fale conosco</WhatsAppButton>
          </div>
        </div>
        <div className="min-h-[52vh] lg:min-h-svh" />
      </div>
    </section>
  );
}
