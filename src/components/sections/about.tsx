import type { ComponentType } from "react";
import { Section } from "@/components/section";
import {
  HelmetIcon,
  KeyIcon,
  LightbulbIcon,
  PencilRulerIcon,
  PersonIcon,
  ShieldIcon,
} from "@/components/icons";

const process: {
  n: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  { n: "01", title: "Entendemos sua necessidade", icon: PersonIcon },
  { n: "02", title: "Concepção dos projetos", icon: LightbulbIcon },
  { n: "03", title: "Apresentação", icon: PencilRulerIcon },
  { n: "04", title: "Aprovação", icon: ShieldIcon },
  { n: "05", title: "Execução", icon: HelmetIcon },
  { n: "06", title: "Entrega", icon: KeyIcon },
];

export function About() {
  return (
    <Section id="a-i2l" kicker="A I2L" width="wide">
      <h2 className="font-heading max-w-2xl text-4xl leading-tight sm:text-5xl">
        Como a I2L conduz o projeto.
      </h2>
      <div className="-mx-6 mt-12 overflow-x-auto px-6 pb-3 [scrollbar-width:thin] lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
        <ol className="flex min-w-max snap-x snap-mandatory lg:min-w-0 lg:w-full lg:snap-none">
          {process.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === process.length - 1;

            return (
              <li
                key={step.n}
                className="relative flex w-44 shrink-0 snap-center flex-col items-center px-2 text-center lg:w-auto lg:flex-1 lg:snap-align-none"
              >
                <step.icon className="size-10 text-primary" />
                <div className="relative mt-5 flex h-10 w-full items-center justify-center">
                  {isFirst ? null : (
                    <span
                      aria-hidden
                      className="absolute top-1/2 right-1/2 left-0 h-px -translate-y-1/2 bg-primary/40"
                    />
                  )}
                  {isLast ? null : (
                    <span
                      aria-hidden
                      className="absolute top-1/2 left-1/2 right-0 h-px -translate-y-1/2 bg-primary/40"
                    />
                  )}
                  <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-primary/40 bg-background text-[11px] tracking-[0.18em] text-foreground">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-heading mt-4 max-w-[10rem] text-lg leading-snug sm:text-xl">
                  {step.title}
                </h3>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
