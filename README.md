# Portfólio PRONATEC 2026

Um portfólio editorial coletivo para registrar a jornada da turma PRONATEC 2026: pessoas, educadores, projetos, encontros e memórias. Os textos atuais são provisórios e evitam atribuir fatos ainda não informados. Os espaços de fotografia são placeholders gráficos; não representam alunos reais.

## Tecnologias

- Next.js 15 com App Router e TypeScript
- Tailwind CSS 4 e estilos CSS do design system
- GSAP e ScrollTrigger para entradas suaves ao rolar a página
- Lucide React para ícones
- Fontes locais Playfair Display, Manrope e Space Mono via Fontsource
- Estrutura preparada para adicionar Supabase e painel administrativo em uma etapa futura

## Começar

Requer Node.js 20.9 ou superior.

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

## Organização

- `src/app`: layout, estilos globais e página inicial
- `src/components`: componentes reutilizáveis de imagem placeholder e animação
- `src/data`: conteúdo provisório da turma, linha do tempo e projetos
- `public/images`: destino para imagens locais quando forem fornecidas

O componente `PhotoPlaceholder` recebe rótulo, proporção e paleta para manter a composição editorial antes da chegada das fotos. Quando houver fotografias autorizadas, substitua-o por um componente de imagem que aceite uma fonte e texto alternativo; essa interface pode depois ser conectada aos uploads do painel administrativo.

## Direção visual

Marfim `#F5F1E8`, grafite `#202020`, vinho `#A13C32` e areia `#D7C6AA`. O layout prioriza leitura, contraste, espaços amplos, navegação por âncoras e respeito à preferência por movimento reduzido.
