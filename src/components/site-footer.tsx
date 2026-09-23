export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-6 sm:px-10 lg:px-16">
      <p className="mx-auto max-w-5xl text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} I2L Solutions
      </p>
    </footer>
  );
}
