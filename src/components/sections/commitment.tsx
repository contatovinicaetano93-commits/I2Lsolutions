import { Section } from "@/components/section";
import { CalendarIcon, CostIcon, QualityIcon } from "@/components/icons";

const pillars = [
  {
    icon: CalendarIcon,
    title: "Prazo",
    text: "Planejamento e acompanhamento em cada etapa, para o projeto avançar no tempo combinado.",
  },
  {
    icon: QualityIcon,
    title: "Qualidade",
    text: "Atenção ao detalhe e excelência na escolha de soluções, materiais e execução.",
  },
  {
    icon: CostIcon,
    title: "Custo",
    text: "Previsibilidade e controle durante o processo, com um único contrato e uma única equipe.",
  },
];

export function Commitment() {
  return (
    <Section id="compromisso" number="04" kicker="Nosso compromisso" tone="sand">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
        Prazo. Qualidade. Custo.
      </h2>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {pillars.map((item) => (
          <article key={item.title} className="text-center">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-primary/40">
              <item.icon className="size-10 text-primary" />
            </div>
            <h3 className="font-heading mt-6 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-16 bg-secondary px-8 py-8 text-center font-heading text-2xl sm:text-3xl">
        Um único contrato. Uma única equipe. Uma solução completa.
      </p>
    </Section>
  );
}
