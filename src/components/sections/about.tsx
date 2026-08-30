import { Section } from "@/components/section";

const process = [
  "Entendemos sua necessidade",
  "Concepção dos projetos",
  "Apresentação",
  "Aprovação",
  "Execução",
  "Entrega",
];

export function About() {
  return (
    <Section id="a-i2l" kicker="A I2L" width="narrow">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
        Como a I2L conduz o projeto.
      </h2>
      <ol className="mt-12 flex flex-col gap-4 border border-white/12 px-6 py-8 sm:px-8">
        {process.map((step, index) => (
          <li key={step} className="flex items-baseline gap-3">
            <span className="text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-xl leading-snug sm:text-2xl">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
