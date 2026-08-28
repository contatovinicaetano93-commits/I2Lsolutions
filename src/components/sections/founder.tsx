import { Section } from "@/components/section";

export function Founder() {
  return (
    <Section id="sobre" number="08" kicker="Sobre Isa Luiza Lopes" tone="sand">
      <h2 className="font-heading max-w-3xl text-4xl leading-tight sm:text-5xl">
        A visão por trás da I2L Solutions.
      </h2>
      <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-muted-foreground">
        <p>
          Isa Luiza Lopes é arquiteta formada pela Universidade Presbiteriana
          Mackenzie, com especialização em design de interiores pelo Istituto
          Marangoni. A formação em São Paulo e em Milão moldou um olhar que
          une técnica, materialidade e o cotidiano de quem vai viver o espaço.
        </p>
        <p>
          A I2L Solutions nasce dessa convicção: o cliente não deveria
          fragmentar o próprio projeto entre escritórios, fornecedores e
          frentes de obra. Arquitetura, interiores, execução e retrofit
          funcionam melhor quando falam a mesma língua — e respondem a uma
          única equipe.
        </p>
        <p>
          O trabalho da Isa é filtrar experiências, entender o mercado e
          transformar o que foi aprendido em um processo mais claro, mais
          previsível e mais humano para quem constrói ou transforma um espaço.
        </p>
      </div>
      <blockquote className="mt-12 bg-primary px-8 py-10 text-primary-foreground sm:px-12">
        <p className="font-heading text-2xl leading-snug sm:text-3xl">
          “Filtrar experiências, entender o mercado e transformar aprendizados
          em soluções melhores para o cliente.”
        </p>
        <footer className="mt-6 text-[11px] tracking-[0.22em] uppercase">
          Isa Luiza Lopes · I2L Solutions
        </footer>
      </blockquote>
    </Section>
  );
}
