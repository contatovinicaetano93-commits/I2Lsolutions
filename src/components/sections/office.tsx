import { Section } from "@/components/section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site } from "@/lib/site";

export function Office() {
  return (
    <Section id="contato" width="narrow">
      <p className="text-sm text-foreground/55">Itaim Bibi · Brasil</p>
      <h2 className="font-heading mt-4 text-4xl leading-tight sm:text-5xl">
        Atendemos o Brasil todo.
      </h2>
      <p className="mt-6 font-heading text-2xl leading-snug text-foreground/80">
        Vamos transformar sua ideia em projeto?
      </p>
      <p className="mt-5 text-base leading-8 text-muted-foreground">
        O escritório fica no Itaim Bibi, em São Paulo. O atendimento, em
        qualquer cidade do país — da conversa inicial à entrega da obra.
      </p>
      <a
        href={`https://wa.me/${site.whatsapp.e164}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-lg text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
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
