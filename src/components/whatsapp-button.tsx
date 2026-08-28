import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { messages, whatsappHref } from "@/lib/site";

export function WhatsAppButton({
  children,
  message = messages.talk,
  variant = "solid",
  className,
}: {
  children: React.ReactNode;
  message?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <Button
      asChild
      className={cn(
        "h-12 rounded-none px-7 text-[11px] font-medium tracking-[0.22em] uppercase",
        variant === "solid" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" &&
          "border-foreground/70 bg-transparent text-foreground hover:bg-foreground hover:text-background",
        variant === "light" &&
          "border-background/70 bg-transparent text-background hover:bg-background hover:text-foreground",
        className,
      )}
      variant={variant === "solid" ? "default" : "outline"}
    >
      <a href={whatsappHref(message)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
