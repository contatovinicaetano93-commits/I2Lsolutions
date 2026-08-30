import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <a
          href={`https://wa.me/${site.whatsapp.e164}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-foreground/70 hover:text-foreground"
        >
          {site.whatsapp.display}
        </a>
      </div>
      <p className="mx-auto mt-8 max-w-5xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} I2L Solutions. Itaim Bibi, São Paulo.
        Atendimento em todo o Brasil.
      </p>
    </footer>
  );
}
