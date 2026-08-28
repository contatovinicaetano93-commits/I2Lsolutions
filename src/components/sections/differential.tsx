import { Section } from "@/components/section";
import {
  ArmchairIcon,
  HelmetIcon,
  KeyIcon,
  LightbulbIcon,
  PencilRulerIcon,
  RetrofitIcon,
} from "@/components/icons";

const stages = [
  { n: "01", title: "Concepção", text: "Necessidades e ideias.", icon: LightbulbIcon },
  { n: "02", title: "Projeto", text: "Soluções para cada espaço.", icon: PencilRulerIcon },
  { n: "03", title: "Interiores", text: "Ambientes, materiais e acabamentos.", icon: ArmchairIcon },
  { n: "04", title: "Obra", text: "Execução e acompanhamento.", icon: HelmetIcon },
  { n: "05", title: "Retrofit", text: "Transformação do que já existe.", icon: RetrofitIcon },
  { n: "06", title: "Entrega", text: "Conclusão do projeto.", icon: KeyIcon },
];

export function Differential() {
  return (
    <Section id="diferencial" number="03" kicker="Nosso diferencial">
      <h2 className="font-heading max-w-2xl text-4xl leading-tight sm:text-5xl">
        Uma empresa. Todas as etapas.
      </h2>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Em vez de fragmentar o projeto entre escritórios, a I2L conduz o ciclo
        completo — e isso muda o resultado.
      </p>

      <div className="mt-16 hidden lg:block">
        <div className="relative mx-auto aspect-square max-w-[560px]">
          <div className="absolute inset-[18%] rounded-full border border-primary/30" />
          <div className="absolute inset-[28%] flex flex-col items-center justify-center rounded-full border border-primary/50 bg-card text-center">
            <p className="font-heading text-4xl text-primary">360°</p>
            <p className="mt-1 max-w-[10rem] text-[11px] tracking-[0.22em] text-foreground uppercase">
              Solução completa
            </p>
          </div>
          {stages.map((stage, index) => {
            const angle = ((index * 60 - 90) * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(angle);
            const y = 50 + 42 * Math.sin(angle);
            return (
              <div
                key={stage.n}
                className="absolute w-36 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <stage.icon className="mx-auto size-10 text-primary" />
                <p className="mt-2 text-[10px] tracking-[0.24em] text-primary">
                  {stage.n}
                </p>
                <p className="font-heading text-lg">{stage.title}</p>
                <p className="text-xs text-muted-foreground">{stage.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:hidden">
        {stages.map((stage) => (
          <article key={stage.n} className="flex gap-4">
            <stage.icon className="size-10 shrink-0 text-primary" />
            <div>
              <p className="text-[10px] tracking-[0.24em] text-primary">{stage.n}</p>
              <h3 className="font-heading text-xl">{stage.title}</h3>
              <p className="text-sm text-muted-foreground">{stage.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
