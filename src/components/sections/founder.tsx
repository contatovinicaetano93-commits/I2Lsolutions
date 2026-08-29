import { Section } from "@/components/section";

export function Founder() {
  return (
    <Section id="sobre" number="08" kicker="Sobre Iza Luiza" tone="sand">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <h2 className="font-heading max-w-xl text-4xl leading-tight sm:text-5xl">
            A visão por trás da I2L.
          </h2>
          <p className="mt-10 font-heading text-4xl sm:text-5xl">Iza Luiza Lopes</p>
          <p className="mt-3 text-[11px] font-light tracking-[0.28em] text-white/50 uppercase">
            Arquiteta · Design de interiores
          </p>
        </div>
        <div className="max-w-md space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
          <p>
            A I2L Solutions nasceu da visão de integrar arquitetura, interiores e
            execução em um único processo.
          </p>
          <p>
            Com experiência em diferentes etapas do desenvolvimento de projetos,
            Iza Luiza criou uma forma de trabalhar baseada em proximidade,
            organização e atenção aos detalhes.
          </p>
        </div>
      </div>
      <p className="mt-16 max-w-2xl border-l border-white/25 pl-6 font-heading text-2xl leading-snug text-white/90 sm:text-3xl">
        Uma visão integrada para transformar necessidades em soluções.
      </p>
    </Section>
  );
}
