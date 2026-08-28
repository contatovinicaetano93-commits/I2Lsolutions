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
    text: "Você fala com a I2L. Nós coordenamos projeto, interiores, obra e retrofit.",
  },
  {
    icon: PuzzleIcon,
    title: "Etapas integradas",
    text: "Cada fase conversa com a seguinte. Menos ruído, menos retrabalho.",
  },
  {
    icon: ClockIcon,
    title: "Mais tempo para o que importa",
    text: "Você decide. A I2L organiza o processo e acompanha o andamento.",
  },
  {
    icon: ShieldIcon,
    title: "Mais controle e tranquilidade",
    text: "Prazo, qualidade e custo no mesmo contrato, com a mesma equipe.",
  },
];

export function About() {
  return (
    <Section id="a-i2l" number="02" kicker="A I2L" tone="sand">
      <h2 className="font-heading max-w-2xl text-4xl leading-tight sm:text-5xl">
        Tudo em um só lugar.
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
        A I2L Solutions nasceu para ser a solução 360° do seu projeto: da ideia
        inicial à chave na mão, com arquitetura, interiores, obra e retrofit
        sob o mesmo olhar.
      </p>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <article key={item.title} className="space-y-4">
            <item.icon className="text-primary" />
            <h3 className="font-heading text-xl">{item.title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
