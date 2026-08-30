# I2L Solutions

Site institucional da **I2L Solutions**, escritório de arquitetura de Iza Luiza Lopes. A base fica no Itaim Bibi, em São Paulo; o atendimento cobre todo o Brasil.

## Produção

O site público está em **[https://i2-lsolutions.vercel.app](https://i2-lsolutions.vercel.app)** (monograma I2L no header).

O código está no GitHub: [contatovinicaetano93-commits/I2Lsolutions](https://github.com/contatovinicaetano93-commits/I2Lsolutions).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Deploy na Vercel

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:43211](http://localhost:43211) se o servidor foi iniciado nessa porta, ou a URL que o Next.js imprimir.

## Contato (CTA)

O botão **Agendar** no header e o **Agendar horário** no final da página abrem o WhatsApp. No hero, **Fale conosco** é um link de texto para o mesmo número.

- Número: **(11) 98911-6464**
- Link: `https://wa.me/5511989116464`

E-mail e Instagram ficam em `src/lib/site.ts`. Quando existirem, basta preencher `email` e `instagram`.

## Conteúdo

Textos, projetos e o WhatsApp ficam em `src/lib/site.ts`.

As fotos atuais (hero à parte) são de referência. Quando o acervo da I2L estiver pronto:

1. Coloque as imagens em `public/images/projetos/`
2. Troque as URLs em `projects[].images` por caminhos locais, por exemplo `/images/projetos/jardins-01.jpg`
3. Atualize nome, bairro e o texto curto de cada obra no mesmo arquivo
4. A foto do hero está em `public/images/hero.jpg`

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build |
| `npm run lint` | ESLint |
