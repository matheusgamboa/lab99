# Lab99

Landing page light-first da Lab99, estúdio brasileiro de software especializado em Selfware: CRM personalizado, automações, agentes de IA e integrações.

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

## Direção visual

A interface usa somente a paleta institucional `#FFA057`, `#1A1A1A` e `#FFFFFF`, com bastante espaço em branco, divisões editoriais e uma única seção escura de contraste. Os logos oficiais permanecem em `public/assets/lab99/`.

O fundo do hero é o componente local `components/FlickeringGrid.tsx`. Ele gera uma malha determinística de pontos laranja com animação CSS sutil e não adiciona Tailwind, shadcn, Base UI ou dependências de terceiros. O elemento é decorativo (`aria-hidden`) e vira uma composição estática quando `prefers-reduced-motion: reduce` está ativo.

## Motion e acessibilidade

`IntersectionObserver` ativa as entradas de conteúdo durante o scroll. O acordeão mantém um item aberto por vez e oferece navegação por clique, `Enter`, `Espaço`, setas, `Home` e `End`. A página também inclui landmarks semânticos, skip link, foco visível, hierarquia de títulos e layouts responsivos.

Com redução de movimento ativa, o conteúdo aparece imediatamente, a malha não pisca e as transições são desativadas. Todos os recursos usados em runtime são locais.
