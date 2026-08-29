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
    text: "Projetos personalizados que unem estética, funcionalidade e identidade.",
  },
  {
    icon: ArmchairIcon,
    title: "Design de interiores",
    text: "Ambientes completos, pensados em cada detalhe, dos materiais ao layout.",
  },
  {
    icon: HelmetIcon,
    title: "Obras",
    text: "Execução e acompanhamento para transformar o projeto em realidade.",
  },
  {
    icon: RetrofitIcon,
    title: "Retrofit",
    text: "Transformação e modernização de espaços existentes, criando novas possibilidades sem perder sua essência.",
  },
];

export function Services() {
  return (
    <Section id="servicos" number="05" kicker="Soluções I2L">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Soluções I2L
      </h2>
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <article key={item.title} className="border-t border-white/15 pt-7">
            <item.icon className="text-primary" />
            <h3 className="font-heading mt-6 text-2xl">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
