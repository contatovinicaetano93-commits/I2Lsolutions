import { Section } from "@/components/section";
import { CalendarIcon, CostIcon, QualityIcon } from "@/components/icons";

const pillars = [
  {
    icon: CalendarIcon,
    title: "Prazo",
    text: "Planejamento e acompanhamento de cada etapa.",
  },
  {
    icon: QualityIcon,
    title: "Qualidade",
    text: "Atenção aos detalhes e excelência na execução.",
  },
  {
    icon: CostIcon,
    title: "Previsibilidade",
    text: "Mais controle sobre escopo, prazo e investimento.",
  },
];

export function Commitment() {
  return (
    <Section id="compromisso" number="04" kicker="Nosso compromisso" tone="sand">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
        Prazo. Qualidade. Previsibilidade.
      </h2>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {pillars.map((item) => (
          <article key={item.title} className="text-center">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-white/20">
              <item.icon className="size-10 text-primary" />
            </div>
            <h3 className="font-heading mt-7 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
