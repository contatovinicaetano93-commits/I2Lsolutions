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
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
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
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
] as const;
