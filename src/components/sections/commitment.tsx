import { Section } from "@/components/section";

const guarantees = [
  {
    label: "PRAZO",
    text: "entrega na data acordada.",
  },
  {
    label: "CUSTO",
    text: "valor justo, definido e sem surpresas (aditivos).",
  },
  {
    label: "QUALIDADE",
    text: "materiais e execução da obra no padrão I2L.",
  },
];

export function Commitment() {
  return (
    <Section id="compromisso" kicker="Controle e transparência" tone="sand">
      <h2 className="font-heading max-w-3xl text-2xl leading-snug sm:text-3xl lg:text-4xl">
        Garantimos PRAZO | CUSTO JUSTO | QUALIDADE
      </h2>
      <div className="mt-14 grid max-w-3xl gap-10 sm:grid-cols-2 sm:gap-16">
        <article>
          <h3 className="font-heading text-2xl">
            O combinado é o que será entregue.
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
            {guarantees.map((item) => (
              <li key={item.label}>
                <span className="font-medium tracking-[0.08em] text-foreground">
                  {item.label}:
                </span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
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
