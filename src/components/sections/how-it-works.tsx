import { Section } from "@/components/section";
import {
  ArrowIcon,
  ChatIcon,
  ClipboardIcon,
  HelmetIcon,
  KeyIcon,
  PencilRulerIcon,
  SearchIcon,
} from "@/components/icons";

const steps = [
  { n: "01", title: "Conversa", text: "Você apresenta a necessidade.", icon: ChatIcon },
  { n: "02", title: "Planejamento", text: "Escopo, prazo e caminho.", icon: ClipboardIcon },
  { n: "03", title: "Desenvolvimento", text: "Projeto e interiores.", icon: PencilRulerIcon },
  { n: "04", title: "Execução", text: "Obra e retrofit, quando fizer sentido.", icon: HelmetIcon },
  { n: "05", title: "Acompanhamento", text: "Olho no detalhe, no prazo e no custo.", icon: SearchIcon },
  { n: "06", title: "Entrega", text: "O espaço pronto para ser vivido.", icon: KeyIcon },
];

export function HowItWorks() {
  return (
    <Section id="como-funciona" number="07" kicker="Como funciona">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Você apresenta a necessidade. A I2L cuida do processo.
      </h2>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.n} className="relative">
            <div className="flex items-start gap-4">
              <step.icon className="size-11 shrink-0 text-primary" />
              <div>
                <p className="text-[10px] tracking-[0.24em] text-primary">{step.n}</p>
                <h3 className="font-heading text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </div>
            {index < steps.length - 1 ? (
              <ArrowIcon className="mt-4 hidden text-primary/50 lg:block" />
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
