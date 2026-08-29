import Image from "next/image";
import { Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site } from "@/lib/site";

export function Office() {
  return (
    <Section id="contato" number="06" kicker="Itaim Bibi · Brasil" tone="sand">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            Atendemos o Brasil todo.
          </h2>
          <p className="mt-6 max-w-md font-heading text-2xl leading-snug text-foreground/85 sm:text-3xl">
            Vamos transformar sua ideia em projeto?
          </p>
          <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
            O escritório fica no Itaim Bibi, em São Paulo. O atendimento, em
            qualquer cidade do país — da conversa inicial à entrega da obra.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp.e164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-3 text-foreground/80 transition-colors hover:text-foreground"
          >
            <WhatsAppIcon className="size-8" />
            <span className="text-lg font-light">{site.whatsapp.display}</span>
          </a>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={messages.schedule}>
              Agendar horário
            </WhatsAppButton>
            <WhatsAppButton variant="outline">Fale com a I2L</WhatsAppButton>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Escritório da I2L no Itaim Bibi, com atendimento em todo o Brasil"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
