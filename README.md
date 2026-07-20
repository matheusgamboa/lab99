# Lab99

Landing page da Lab99, estúdio brasileiro de software especializado em Selfware: CRM personalizado, automações, agentes de IA e integrações.

## Como executar

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Motion e acessibilidade

A experiência usa apenas CSS e pequenos componentes React, sem biblioteca de animação. `IntersectionObserver` ativa os reveals, os contadores e a progressão do processo uma única vez; o cabeçalho reage ao scroll e o acordeão mantém apenas um item aberto, com suporte a clique, `Enter`, `Espaço`, setas, `Home` e `End`.

Quando `prefers-reduced-motion: reduce` está ativo, o vídeo do hero é pausado no poster, marquee e camadas de textura deixam de se mover, contadores exibem imediatamente o valor final e todo o conteúdo revelado por scroll fica visível sem deslocamento. O HTML mantém landmarks semânticos, skip link, foco visível e hierarquia de títulos.

Todos os recursos usados em runtime são locais. Os logos oficiais, o vídeo e seu poster ficam em `public/assets/lab99/`; os demais visuais de sistema são construídos com HTML e CSS.
