import { Section } from "@/components/section";
import {
  ArchitectureIcon,
  ArmchairIcon,
  ChatIcon,
  RetrofitIcon,
} from "@/components/icons";

const choices = [
  {
    icon: ArmchairIcon,
    title: "Interiores",
    text: "Quando não envolve obra ou alterações estruturais.",
  },
  {
    icon: ArchitectureIcon,
    title: "Projeto de arquitetura",
    text: "Quando envolve obra, alterações de layout, revestimentos ou estrutura.",
  },
  {
    icon: RetrofitIcon,
    title: "Retrofit",
    text: "Quando é necessário modernizar uma fachada ou edificação existente.",
  },
  {
    icon: ChatIcon,
    title: "Consultoria",
    text: "Quando você precisa apenas de uma orientação profissional pontual.",
  },
];

export function Services() {
  return (
    <Section id="servicos" number="05" kicker="Soluções I2L">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        Qual serviço escolher?
      </h2>
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {choices.map((item) => (
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
