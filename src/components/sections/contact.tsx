import { Section } from "@/components/section";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contato" number="11" kicker="Contato">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Vamos conversar sobre o seu projeto?
      </h2>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Chame no WhatsApp. É o caminho mais direto para apresentar a
        necessidade e entender, juntos, o próximo passo.
      </p>
      <ul className="mt-12 grid gap-8 sm:grid-cols-3">
        <li>
          <a
            href={`https://wa.me/${site.whatsapp.e164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3"
          >
            <WhatsAppIcon className="size-8 text-primary" />
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
              WhatsApp
            </p>
            <p className="text-lg group-hover:text-primary">{site.whatsapp.display}</p>
          </a>
        </li>
        {site.email ? (
          <li>
            <a href={`mailto:${site.email}`} className="group flex flex-col gap-3">
              <MailIcon className="size-10 text-primary" />
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                E-mail
              </p>
              <p className="text-lg group-hover:text-primary">{site.email}</p>
            </a>
          </li>
        ) : null}
        {site.instagram ? (
          <li>
            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <InstagramIcon className="size-10 text-primary" />
              <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                Instagram
              </p>
              <p className="text-lg group-hover:text-primary">@{site.instagram}</p>
            </a>
          </li>
        ) : null}
      </ul>
      <WhatsAppButton className="mt-12" variant="outline">
        Fale conosco
      </WhatsAppButton>
    </Section>
  );
}
