export const site = {
  name: "I2L Solutions",
  tagline: "Uma solução 360° para a sua necessidade.",
  city: "Itaim Bibi, São Paulo",
  whatsapp: {
    e164: "5511989116464",
    display: "(11) 98911-6464",
  },
  email: "",
  instagram: "",
} as const;

export const whatsappHref = (message: string) =>
  `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(message)}`;

export const messages = {
  talk: "Olá, Isa. Gostaria de conversar sobre um projeto com a I2L Solutions.",
  schedule:
    "Olá, Isa. Gostaria de agendar um horário no escritório da I2L, no Itaim Bibi.",
};

export const nav = [
  { href: "#a-i2l", label: "A I2L" },
  { href: "#diferencial", label: "Diferencial" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export const servicesNav = [
  { href: "#servicos", label: "Projeto" },
  { href: "#servicos", label: "Interiores" },
  { href: "#servicos", label: "Obra" },
  { href: "#servicos", label: "Retrofit" },
] as const;

export const projects = [
  {
    slug: "residencia-jardins",
    name: "Residência Jardins",
    location: "Jardins, São Paulo",
    type: "Residencial",
    services: "Arquitetura · Interiores · Obra",
    about:
      "Uma casa pensada para o cotidiano da família, com circulação clara, luz natural e materiais que envelhecem bem. O projeto uniu arquitetura e interiores desde a concepção, para que cada ambiente chegasse à obra sem retrabalho.",
    images: [
      "/images/project-jardins.jpg",
      "/images/project-jardins-2.jpg",
      "/images/hero.jpg",
    ],
  },
  {
    slug: "apartamento-itaim",
    name: "Apartamento Itaim",
    location: "Itaim Bibi, São Paulo",
    type: "Residencial · Retrofit",
    services: "Interiores · Retrofit",
    about:
      "Releitura de um apartamento existente: a planta foi reorganizada, a iluminação redesenhada e os acabamentos atualizados sem perder a essência do imóvel. O retrofit aconteceu com a família no radar de prazo e custo.",
    images: [
      "/images/project-itaim.jpg",
      "/images/project-itaim-2.jpg",
      "/images/office.jpg",
    ],
  },
  {
    slug: "casa-campo",
    name: "Casa de Campo",
    location: "Interior de São Paulo",
    type: "Residencial",
    services: "Arquitetura · Interiores",
    about:
      "Um refúgio de fim de semana com relação direta com a paisagem. Os espaços internos e externos foram desenhados juntos, com materiais honestos e uma paleta que conversa com o entorno.",
    images: [
      "/images/project-campo.jpg",
      "/images/project-campo-2.jpg",
      "/images/process.jpg",
    ],
  },
] as const;
