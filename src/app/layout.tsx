import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "I2L Solutions | Arquitetura 360° em São Paulo",
  description:
    "I2L Solutions — uma solução 360° para o seu projeto. Arquitetura, interiores, obra e retrofit em um único ponto de contato. Escritório no Itaim Bibi, São Paulo.",
  openGraph: {
    title: "I2L Solutions | Arquitetura 360° em São Paulo",
    description:
      "Você ganha tempo. A I2L cuida de todas as etapas — da concepção à entrega.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
