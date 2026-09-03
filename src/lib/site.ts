export const site = {
  name: "I2L Solutions",
  tagline: "Da concepção do projeto à entrega final da obra.",
  city: "São Paulo • Brasil • Miami",
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
    "Olá, Iza. Gostaria de agendar um atendimento presencial ou online com a I2L Solutions.",
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

function shots(slug: string, count: number) {
  return Array.from(
    { length: count },
    (_, index) =>
      `/images/projects/${slug}/${String(index + 1).padStart(2, "0")}.jpg`,
  );
}

export const projects = [
  {
    slug: "apt-1001",
    name: "Apartamento 1001",
    place: "São Paulo · Residencial",
    services: "",
    about: "",
    images: shots("apt-1001", 10),
  },
  {
    slug: "apt-freijo",
    name: "Apartamento Freijó",
    place: "São Paulo · Residencial",
    services: "",
    about: "",
    images: shots("apt-freijo", 16),
  },
  {
    slug: "apt-nogueira",
    name: "Apartamento Nogueira",
    place: "São Paulo · Residencial",
    services: "",
    about: "",
    images: shots("apt-nogueira", 10),
  },
  {
    slug: "casa-vinhais",
    name: "Casa Vinhais",
    place: "São Paulo · Residencial",
    services: "",
    about: "",
    images: shots("casa-vinhais", 1),
  },
  {
    slug: "studio-oliva",
    name: "Studio Oliva",
    place: "São Paulo · Studio",
    services: "",
    about: "",
    images: shots("studio-oliva", 2),
  },
];
