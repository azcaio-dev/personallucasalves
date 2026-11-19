# Lucas Alves — Personal Trainer
Landing page responsiva (React + Vite). A página usa HTML de apresentação compartilhado em `src/page.js`, com montagem via React em `src/main.jsx`, CSS em `src/style.css` e dados em `src/config.js`.

## Executar
1. Extraia o ZIP.
2. Abra a pasta `lucas-alves` no VS Code.
3. No terminal, rode `npm install` e depois `npm run dev`.
4. Acesse o endereço mostrado no terminal.

## Personalizar
- `src/config.js`: WhatsApp, Instagram, e-mail, link MFIT e depoimentos autorizados. Sem WhatsApp, os CTAs abrem o Instagram.
- `src/page.js`: textos e estrutura das seções.
- `src/style.css`: cores, espaçamentos e design responsivo.
- `public/images`: logotipo, foto original, foto recortada e imagem ilustrativa de corrida.

O mockup de aplicativo é ilustrativo. Valide os textos comerciais e os serviços oferecidos antes da publicação. Nenhum depoimento fictício foi inserido. O Google Fonts é opcional (há fontes de fallback).

## Publicar
`npm run build` gera a pasta `dist`. Envie o conteúdo para a hospedagem estática. A prévia HTML separada não depende do npm; o projeto Vite é a versão para desenvolvimento.
