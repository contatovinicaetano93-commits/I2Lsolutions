import { WhatsAppIcon } from "@/components/icons";
import { messages, whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(messages.talk)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition duration-500 hover:bg-primary/90 sm:right-6 sm:bottom-6"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon className="size-5" />
    </a>
  );
}
