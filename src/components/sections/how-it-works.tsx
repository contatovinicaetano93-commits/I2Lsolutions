import { Section } from "@/components/section";

const steps = [
  { n: "01", title: "Conversa", text: "Entendemos o que você precisa." },
  {
    n: "02",
    title: "Planejamento",
    text: "Definimos escopo, prioridades e próximos passos.",
  },
  { n: "03", title: "Desenvolvimento", text: "Transformamos a ideia em projeto." },
  { n: "04", title: "Execução", text: "Colocamos o planejamento em prática." },
  { n: "05", title: "Acompanhamento", text: "Coordenamos cada etapa." },
  { n: "06", title: "Entrega", text: "Seu espaço pronto para ser vivido." },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" number="07" kicker="Como funciona">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Você apresenta a necessidade.
        <br />A I2L cuida do processo.
      </h2>
      <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <article key={step.n} className="border-t border-white/12 pt-6">
            <p className="text-[10px] font-light tracking-[0.32em] text-white/40">
              {step.n}
            </p>
            <h3 className="font-heading mt-3 text-2xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
