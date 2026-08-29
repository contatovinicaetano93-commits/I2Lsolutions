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
        "h-12 min-w-[11.5rem] rounded-none px-8 text-[10px] font-light tracking-[0.32em] uppercase",
        variant === "solid" &&
          "border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary",
        variant === "outline" &&
          "border-primary/35 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
        variant === "light" &&
          "border-primary/35 bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
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
