import { InstagramIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { messages, site } from "@/lib/site";

export function Office() {
  return (
    <Section id="contato" number="05" kicker="São Paulo • Brasil • Miami" width="narrow">
      <h2 className="font-heading text-4xl sm:text-5xl">
        Vamos transformar sua ideia em realidade?
      </h2>
      <p className="mt-6 font-heading text-2xl leading-snug text-foreground">
        Onde você estiver.
      </p>
      <p className="mt-5 text-base leading-8 text-muted-foreground">
        Presencialmente (Itaim Bibi) ou online.
      </p>
      {site.instagram ? (
        <a
          href={`https://instagram.com/${site.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-3 text-lg tracking-[0.04em] text-foreground underline decoration-foreground/30 underline-offset-8 hover:decoration-foreground"
        >
          <InstagramIcon className="size-5 text-primary" />
          @{site.instagram}
        </a>
      ) : null}
      <a
        href={`https://wa.me/${site.whatsapp.e164}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block text-lg tracking-[0.04em] text-foreground underline decoration-foreground/30 underline-offset-8 hover:decoration-foreground"
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
