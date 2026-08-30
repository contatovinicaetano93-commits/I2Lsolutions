import { Section } from "@/components/section";

const choices = [
  {
    title: "Interiores",
    text: "Quando não envolve obra ou alterações estruturais.",
  },
  {
    title: "Projeto de arquitetura",
    text: "Quando envolve obra, alterações de layout, revestimentos ou estrutura.",
  },
  {
    title: "Retrofit",
    text: "Quando é necessário modernizar uma fachada ou edificação existente.",
  },
  {
    title: "Consultoria",
    text: "Quando você precisa apenas de uma orientação profissional pontual.",
  },
];

export function Services() {
  return (
    <Section id="servicos" kicker="Soluções I2L" width="narrow" tone="sand">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
        Qual serviço escolher?
      </h2>
      <ul className="mt-12">
        {choices.map((item) => (
          <li key={item.title} className="border-t border-white/12 py-7 last:border-b">
            <h3 className="font-heading text-2xl">{item.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
