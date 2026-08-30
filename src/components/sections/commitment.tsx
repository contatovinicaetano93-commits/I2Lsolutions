import { Section } from "@/components/section";

const truths = [
  {
    title: "Um único ponto de contato",
    text: "Uma equipe acompanhando todo o processo, do conceito à entrega da obra.",
  },
  {
    title: "Mais controle e tranquilidade",
    text: "Planejamento, acompanhamento e execução.",
  },
];

export function Commitment() {
  return (
    <Section id="compromisso" kicker="Nós garantimos" tone="sand">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Prazo | Custo justo | Qualidade
      </h2>
      <div className="mt-14 grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-16">
        {truths.map((item) => (
          <article key={item.title}>
            <h3 className="font-heading text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
