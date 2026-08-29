import { Section } from "@/components/section";
import {
  ArmchairIcon,
  HelmetIcon,
  KeyIcon,
  LightbulbIcon,
  PencilRulerIcon,
  PersonIcon,
  RetrofitIcon,
  ShieldIcon,
} from "@/components/icons";

const stages = [
  {
    n: "01",
    title: "Necessidade",
    text: "Entendemos o que você precisa, seus objetivos e prioridades.",
    icon: PersonIcon,
  },
  {
    n: "02",
    title: "Concepção",
    text: "Transformamos a necessidade em uma direção criativa e estratégica.",
    icon: LightbulbIcon,
  },
  {
    n: "03",
    title: "Projeto",
    text: "Desenvolvemos a solução arquitetônica e definimos as diretrizes.",
    icon: PencilRulerIcon,
  },
  {
    n: "04",
    title: "Interiores",
    text: "Detalhamos ambientes, materiais, acabamentos e mobiliário.",
    icon: ArmchairIcon,
  },
  {
    n: "05",
    title: "Execução",
    text: "Coordenamos a realização do projeto e acompanhamos a obra.",
    icon: HelmetIcon,
  },
  {
    n: "06",
    title: "Entrega",
    text: "O espaço pronto para ser vivido.",
    icon: KeyIcon,
  },
];

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

export function About() {
  return (
    <Section id="a-i2l" number="02" kicker="A I2L">
      <h2 className="font-heading max-w-2xl text-4xl leading-tight sm:text-5xl">
        Como a I2L conduz o projeto.
      </h2>
      <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
        Da primeira ideia à entrega, cada etapa acontece no mesmo ciclo — para
        o projeto funcionar como um só.
      </p>

      <div className="mt-16 grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-[540px]">
            <div className="absolute inset-[20%] rounded-full border border-white/12" />
            <div className="absolute inset-[31%] flex flex-col items-center justify-center rounded-full border border-white/20 text-center">
              <p className="font-heading text-4xl tracking-[0.18em] text-white">
                I2L
              </p>
              <p className="mt-2 max-w-[9rem] text-[10px] font-light tracking-[0.28em] text-white/50 uppercase">
                Solução integrada
              </p>
            </div>
            {stages.map((stage, index) => {
              const angle = ((index * 60 - 90) * Math.PI) / 180;
              const x = 50 + 41 * Math.cos(angle);
              const y = 50 + 41 * Math.sin(angle);
              return (
                <div
                  key={stage.n}
                  className="absolute w-40 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <p className="text-[10px] font-light tracking-[0.28em] text-white/40">
                    {stage.n}
                  </p>
                  <p className="font-heading mt-1 text-xl">{stage.title}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-[11px] font-light tracking-[0.2em] text-white/35 uppercase">
            O ciclo continua conforme novas necessidades do espaço
          </p>
        </div>

        <aside className="border border-white/12 px-6 py-8 lg:self-center">
          <RetrofitIcon className="text-primary" />
          <p className="mt-5 text-[10px] font-light tracking-[0.32em] text-white/45 uppercase">
            Quando o espaço já existe
          </p>
          <h3 className="font-heading mt-3 text-3xl">Retrofit</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Entra no ciclo se o espaço já existe. Não é uma etapa obrigatória
            depois da obra.
          </p>
        </aside>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:hidden">
        {stages.map((stage) => (
          <article key={stage.n} className="flex gap-4 border-t border-white/10 pt-5">
            <stage.icon className="size-10 shrink-0 text-primary" />
            <div>
              <p className="text-[10px] font-light tracking-[0.28em] text-white/40">
                {stage.n}
              </p>
              <h3 className="font-heading text-2xl">{stage.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {stage.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2">
        {truths.map((item) => (
          <article key={item.title} className="border-t border-white/10 pt-6">
            <item.icon className="text-primary" />
            <h3 className="font-heading mt-4 text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
