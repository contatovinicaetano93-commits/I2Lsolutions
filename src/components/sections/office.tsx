import { Section } from "@/components/section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site, whatsappHref } from "@/lib/site";

export function Office() {
  return (
    <Section id="contato" width="narrow">
      <p className="text-sm text-foreground/55">São Paulo • Brasil • Miami</p>
      <h2 className="font-heading mt-4 text-4xl leading-tight sm:text-5xl">
        Vamos transformar sua ideia em realidade?
      </h2>
      <p className="mt-6 font-heading text-2xl leading-snug text-foreground/80">
        Onde você estiver.
      </p>
      <p className="mt-5 text-base leading-8 text-muted-foreground">
        Nosso showroom fica no Itaim Bibi, em São Paulo, mas você pode escolher
        como prefere ser atendido: presencialmente ou online.
      </p>
      <p className="mt-8 text-sm leading-7 text-foreground/80">
        Showroom | Itaim Bibi — SP
      </p>
      <a
        href={whatsappHref(messages.schedule)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-sm leading-7 text-foreground/80 hover:text-foreground"
      >
        Agende seu atendimento presencial ou online
      </a>
      <a
        href={`https://wa.me/${site.whatsapp.e164}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block text-lg text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
      >
        {site.whatsapp.display}
      </a>
      <div className="mt-8">
        <WhatsAppButton message={messages.schedule}>
          Agendar horário
        </WhatsAppButton>
      </div>
    </Section>
  );
}
