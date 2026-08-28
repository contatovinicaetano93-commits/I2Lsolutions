import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { servicesNav } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center overflow-hidden px-6 py-20 sm:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/40 to-transparent" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl">
        <p className="mb-8 flex items-center gap-3 text-[11px] font-medium tracking-[0.32em] text-primary uppercase">
          <span>01</span>
          <span className="h-px w-8 bg-primary/50" />
          <span>Primeira tela</span>
        </p>
        <h1 className="font-heading max-w-2xl text-5xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          I2L Solutions
        </h1>
        <p className="mt-5 max-w-xl font-heading text-2xl text-primary italic sm:text-3xl">
          Uma solução 360° para a sua necessidade.
        </p>
        <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
          Você ganha tempo. A I2L cuida de todas as etapas do processo — da
          concepção à entrega — em um único ponto de contato.
        </p>
        <p className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-[11px] tracking-[0.28em] text-foreground/70 uppercase">
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
            className="h-12 rounded-none bg-primary px-7 text-[11px] font-medium tracking-[0.22em] text-primary-foreground uppercase hover:bg-primary/90"
          >
            <a href="#a-i2l">Conheça a I2L</a>
          </Button>
          <WhatsAppButton variant="outline">Fale conosco</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
