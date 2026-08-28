import Image from "next/image";
import { Section } from "@/components/section";
import { PinIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site } from "@/lib/site";

export function Office() {
  return (
    <Section id="escritorio" number="10" kicker="Nosso escritório" tone="sand">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            Estamos no Itaim.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
            O escritório da I2L fica no Itaim Bibi, em São Paulo. Um ponto de
            encontro para conversar sobre o seu projeto, com calma e no lugar
            certo.
          </p>
          <div className="mt-8 flex items-center gap-3 text-foreground">
            <PinIcon className="size-10 text-primary" />
            <p className="text-sm tracking-[0.12em] uppercase">{site.city}</p>
          </div>
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
