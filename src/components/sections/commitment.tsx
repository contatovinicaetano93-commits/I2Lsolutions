import { Section } from "@/components/section";

const guarantees = [
  {
    label: "Prazo",
    text: "Entrega na data acordada.",
  },
  {
    label: "Custo justo",
    text: "Valor definido e sem surpresas (aditivos).",
  },
  {
    label: "Qualidade",
    text: "Materiais e execução da obra no padrão I2L.",
  },
];

export function Commitment() {
  return (
    <Section id="compromisso" kicker="Controle e transparência" tone="sand">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
        Garantimos
      </h2>
      <dl className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-16">
        {guarantees.map((item) => (
          <div key={item.label} className="max-w-xs">
            <dt className="font-heading text-2xl leading-snug sm:text-3xl">
              {item.label}
            </dt>
            <dd className="mt-3 text-sm leading-7 text-muted-foreground">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-16 grid max-w-3xl gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 sm:gap-16">
        <article>
          <h3 className="font-heading text-2xl">
            O combinado é o que será entregue.
          </h3>
        </article>
        <article>
          <h3 className="font-heading text-2xl">Mais controle e tranquilidade</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Planejamento, acompanhamento e execução.
          </p>
        </article>
      </div>
    </Section>
  );
}
