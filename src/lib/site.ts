export const site = {
  name: "I2L Solutions",
  tagline: "Da concepção do projeto à entrega final da obra.",
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
  talk: "Olá, Iza. Gostaria de conversar sobre um projeto com a I2L Solutions.",
  schedule:
    "Olá, Iza. Gostaria de agendar uma conversa com a I2L Solutions.",
};

export const nav = [
  { href: "#a-i2l", label: "A I2L" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export const servicesNav = [
  { href: "#servicos", label: "Interiores" },
  { href: "#servicos", label: "Projeto" },
  { href: "#servicos", label: "Retrofit" },
  { href: "#servicos", label: "Consultoria" },
] as const;

export const projects = [
  {
    slug: "residencia-jardins",
    name: "Residência Jardins",
    place: "São Paulo · Residencial",
    location: "Jardins, São Paulo",
    type: "Residencial",
    services: "Arquitetura · Interiores · Obra",
    about:
      "Casa familiar com arquitetura e interiores desenhados juntos, da planta à obra.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "apartamento-itaim",
    name: "Apartamento Itaim",
    place: "São Paulo · Residencial",
    location: "Itaim Bibi, São Paulo",
    type: "Residencial · Retrofit",
    services: "Interiores · Retrofit",
    about:
      "Releitura de um apartamento existente: planta, luz e acabamentos atualizados.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "casa-campo",
    name: "Casa de Campo",
    place: "São Paulo · Residencial",
    location: "Interior de São Paulo",
    type: "Residencial",
    services: "Arquitetura · Interiores",
    about:
      "Refúgio de fim de semana, com interiores e paisagem no mesmo desenho.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
] as const;
