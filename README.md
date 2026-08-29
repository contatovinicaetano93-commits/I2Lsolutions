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

Todos os botões **Fale conosco** e **Agendar horário** abrem o WhatsApp:

- Número: **(11) 98911-6464**
- Link: `https://wa.me/5511989116464`

E-mail e Instagram ficam em `src/lib/site.ts`. Quando existirem, basta preencher `email` e `instagram`.

## Conteúdo

Textos, projetos em destaque e o número de WhatsApp estão em `src/lib/site.ts`. As fotos atuais são de referência (Unsplash) até a I2L enviar o acervo próprio e os dados reais de cada obra.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build |
| `npm run lint` | ESLint |
