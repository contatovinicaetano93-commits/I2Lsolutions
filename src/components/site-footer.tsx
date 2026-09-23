export function SiteFooter() {
  return (
    <footer className="border-t border-primary/15 px-6 py-6 sm:px-10 lg:px-16">
      <p className="mx-auto max-w-5xl text-center text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} I2L Solutions
      </p>
    </footer>
  );
}
