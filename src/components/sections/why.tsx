import { Section } from "@/components/section";

const reasons = [
  "Uma única empresa para todas as etapas",
  "Etapas integradas, do desenho à entrega",
  "Mais previsibilidade de prazo e custo",
  "Um único ponto de contato",
  "Mais praticidade no dia a dia do projeto",
  "Mais tempo para você — e menos retrabalho",
  "Controle e tranquilidade do começo ao fim",
];

export function Why() {
  return (
    <Section id="por-que" number="09" kicker="Por que I2L?">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            Porque você não precisa cuidar de tudo.
          </h2>
          <ul className="mt-10 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-sm sm:text-base">
                <span className="mt-1 inline-flex size-4 shrink-0 items-center justify-center border border-primary text-[10px] text-primary">
                  ✓
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <p className="self-end text-lg leading-8 text-muted-foreground">
          O papel da I2L é simples: você traz a necessidade, nós conduzimos o
          processo. Projeto, interiores, obra e retrofit deixam de ser
          frentes soltas e passam a ser uma solução só — com prazo, qualidade
          e custo no mesmo compromisso.
        </p>
      </div>
    </Section>
  );
}
