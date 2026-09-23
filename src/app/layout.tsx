import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "I2L Solutions | São Paulo • Brasil • Miami",
  description:
    "I2L Solutions — Solução 360° | Iza Luiza e equipe. Arquitetura, interiores, obra e retrofit. Showroom no Itaim Bibi, São Paulo. Atendimento presencial ou online — São Paulo, Brasil e Miami.",
  openGraph: {
    title: "I2L Solutions | São Paulo • Brasil • Miami",
    description:
      "Um único time para cuidar de todas as etapas. Showroom no Itaim Bibi. Atendimento presencial ou online.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${instrument.variable} ${newsreader.variable} h-full scroll-smooth antialiased`}
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
