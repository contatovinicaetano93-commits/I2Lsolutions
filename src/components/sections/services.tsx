import { Section } from "@/components/section";
import {
  ArchitectureIcon,
  ArmchairIcon,
  HelmetIcon,
  RetrofitIcon,
} from "@/components/icons";

const services = [
  {
    icon: ArchitectureIcon,
    title: "Arquitetura",
    text: "Projetos personalizados, da implantação ao detalhamento, alinhados ao modo de viver de cada cliente.",
  },
  {
    icon: ArmchairIcon,
    title: "Design de interiores",
    text: "Layouts, iluminação, materiais e detalhes que transformam o espaço em ambiente.",
  },
  {
    icon: HelmetIcon,
    title: "Obras",
    text: "Execução e acompanhamento de etapas, com a mesma equipe que desenhou o projeto.",
  },
  {
    icon: RetrofitIcon,
    title: "Retrofit",
    text: "Modernização de espaços existentes, preservando a essência e atualizando o uso.",
  },
];

export function Services() {
  return (
    <Section id="servicos" number="05" kicker="Serviços">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Soluções para cada etapa do seu projeto.
      </h2>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <article key={item.title} className="border-t border-primary/30 pt-6">
            <item.icon className="text-primary" />
            <h3 className="font-heading mt-5 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
