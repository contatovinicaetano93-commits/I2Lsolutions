import { Section } from "@/components/section";

const reasons = [
  "Uma única equipe",
  "Todas as etapas integradas",
  "Um único ponto de contato",
  "Mais previsibilidade",
  "Mais tempo para você",
];

export function Why() {
  return (
    <Section id="por-que" number="09" kicker="Por que I2L?">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
        <div>
          <h2 className="font-heading text-4xl leading-tight sm:text-5xl">
            Porque você não precisa cuidar de tudo.
          </h2>
          <ul className="mt-12 space-y-5">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-4 text-sm tracking-[0.04em] sm:text-base"
              >
                <span className="h-px w-8 bg-white/30" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <p className="max-w-md font-heading text-2xl leading-snug text-white/80 sm:text-3xl">
          Enquanto a I2L cuida do processo, você aproveita o seu tempo.
        </p>
      </div>
    </Section>
  );
}
