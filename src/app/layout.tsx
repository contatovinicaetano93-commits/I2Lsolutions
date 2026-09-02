import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
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
      className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
