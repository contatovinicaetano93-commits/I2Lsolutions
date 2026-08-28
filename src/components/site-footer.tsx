import { Logo } from "@/components/logo";
import { site, servicesNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.22em] text-foreground/70 uppercase">
          {servicesNav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} I2L Solutions. Itaim Bibi, São Paulo.
      </p>
    </footer>
  );
}
