import { WhatsAppIcon } from "@/components/icons";
import { messages, whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(messages.talk)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90 sm:right-8 sm:bottom-8"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
