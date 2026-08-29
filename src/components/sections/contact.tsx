import { Section } from "@/components/section";
import { InstagramIcon, MailIcon, WhatsAppIcon } from "@/components/icons";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <Section id="contato" number="11" kicker="Contato">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Vamos transformar sua ideia em projeto?
      </h2>
      <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
        Conte para a I2L o que você precisa. Nós cuidamos do processo.
      </p>
      <ul className="mt-14 grid gap-10 sm:grid-cols-3">
        <li>
          <a
            href={`https://wa.me/${site.whatsapp.e164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3"
          >
            <WhatsAppIcon className="size-8 text-primary" />
            <p className="text-[10px] font-light tracking-[0.28em] text-white/40 uppercase">
              WhatsApp
            </p>
            <p className="text-lg font-light group-hover:text-white">
              {site.whatsapp.display}
            </p>
          </a>
        </li>
        {site.email ? (
          <li>
            <a href={`mailto:${site.email}`} className="group flex flex-col gap-3">
              <MailIcon className="size-10 text-primary" />
              <p className="text-[10px] font-light tracking-[0.28em] text-white/40 uppercase">
                E-mail
              </p>
              <p className="text-lg font-light group-hover:text-white">{site.email}</p>
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
              <p className="text-[10px] font-light tracking-[0.28em] text-white/40 uppercase">
                Instagram
              </p>
              <p className="text-lg font-light group-hover:text-white">
                @{site.instagram}
              </p>
            </a>
          </li>
        ) : null}
      </ul>
      <WhatsAppButton className="mt-12" variant="outline">
        Fale com a I2L
      </WhatsAppButton>
    </Section>
  );
}
