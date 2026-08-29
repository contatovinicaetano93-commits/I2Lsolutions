import { Section } from "@/components/section";
import { PersonIcon, ShieldIcon } from "@/components/icons";

const truths = [
  {
    icon: PersonIcon,
    title: "Um único ponto de contato",
    text: "Uma equipe acompanhando todo o processo, do conceito à entrega da obra.",
  },
  {
    icon: ShieldIcon,
    title: "Mais controle e tranquilidade",
    text: "Planejamento, acompanhamento e execução.",
  },
];

export function Commitment() {
  return (
    <Section id="compromisso" number="03" kicker="Nós garantimos" tone="sand">
      <h2 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
        Prazo | Custo justo | Qualidade
      </h2>
      <div className="mt-16 grid gap-12 sm:grid-cols-2">
        {truths.map((item) => (
          <article key={item.title} className="border-t border-white/12 pt-6">
            <item.icon className="text-primary" />
            <h3 className="font-heading mt-4 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
