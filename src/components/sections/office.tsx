import Image from "next/image";
import { Section } from "@/components/section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site } from "@/lib/site";

export function Office() {
  return (
    <Section id="escritorio" number="10" kicker="Nosso escritório" tone="sand">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            Estamos no Itaim.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
            A I2L Solutions está localizada no Itaim Bibi, em São Paulo. Venha
            conversar com a gente.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Agende um horário em nosso escritório e conheça de perto a I2L
            Solutions.
          </p>
          <p className="mt-8 text-[11px] font-light tracking-[0.22em] text-white/45 uppercase">
            {site.city}
          </p>
          <WhatsAppButton className="mt-8" message={messages.schedule}>
            Agendar horário
          </WhatsAppButton>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Ambiente de escritório da I2L no Itaim Bibi"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
