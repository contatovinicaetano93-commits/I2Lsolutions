import { Section } from "@/components/section";
import {
  ClockIcon,
  PersonIcon,
  PuzzleIcon,
  ShieldIcon,
} from "@/components/icons";

const features = [
  {
    icon: PersonIcon,
    title: "Um único ponto de contato",
    text: "Uma equipe acompanhando todo o processo.",
  },
  {
    icon: PuzzleIcon,
    title: "Todas as etapas integradas",
    text: "Do conceito à entrega.",
  },
  {
    icon: ClockIcon,
    title: "Mais tempo para você",
    text: "Nós cuidamos do processo para você.",
  },
  {
    icon: ShieldIcon,
    title: "Mais controle e tranquilidade",
    text: "Planejamento, acompanhamento e execução.",
  },
];

export function About() {
  return (
    <Section id="a-i2l" number="02" kicker="A I2L" tone="sand">
      <h2 className="font-heading max-w-2xl text-4xl leading-tight sm:text-5xl">
        Tudo em um só lugar.
      </h2>
      <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
        A I2L Solutions integra todas as etapas do projeto e da obra em uma
        única solução.
      </p>
      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <article key={item.title} className="space-y-4 border-t border-white/10 pt-6">
            <item.icon className="text-primary" />
            <h3 className="font-heading text-2xl">{item.title}</h3>
            <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
