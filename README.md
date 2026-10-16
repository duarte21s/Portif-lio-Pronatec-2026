# Portfólio PRONATEC 2026

Portfólio editorial coletivo para registrar a jornada da turma PRONATEC 2026: estudantes, projetos, encontros e memórias. Os nomes exibidos são identificadores provisórios; não há nomes, biografias nem fotografias de pessoas reais. Os placeholders serão substituídos por registros autorizados, quando estiverem disponíveis.

## Tecnologias

- Next.js 15 com App Router e TypeScript
- Tailwind CSS 4 e design system em CSS responsivo
- GSAP e ScrollTrigger para revelações suaves ao rolar a página
- Lucide React para ícones
- Fontes locais Playfair Display, Manrope e Space Mono via Fontsource
- Dados locais tipados, organizados para uma futura integração com Supabase

## Começar

Requer Node.js 20.9 ou superior.

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Rotas

- `/` — homepage editorial com prévias da turma, projetos e memória visual.
- `/turma` — diretório pesquisável dos integrantes.
- `/turma/[slug]` — perfil individual. Os campos pessoais são opcionais e só aparecem quando há conteúdo.
- `/galeria` — álbuns filtráveis com visualizador modal, legendas e navegação por teclado.

Os dados provisórios ficam em `src/data/portfolio.ts`; modelos em `src/types/portfolio.ts`. Fotografias futuras devem ser adicionadas aos campos opcionais `portrait` ou `Photo.src`. São aceitos caminhos locais na pasta `public/`. O componente `PhotoPlaceholder` mantém a composição e as proporções enquanto a imagem real não está disponível.

## Componentes

`src/components` contém a navegação e o rodapé compartilhados, cabeçalhos de página e seção, estados vazios, cartões e perfil de estudante, além da grade de álbuns e do visualizador de fotos. O diretório `src/components/gallery` reúne os componentes específicos da galeria.

## Verificações

```bash
npm run lint
npm run typecheck
npm run build
```

## Direção visual e acessibilidade

A paleta mantém marfim `#F5F1E8`, grafite `#202020`, vinho `#A13C32` e areia `#D7C6AA`, com hierarquia tipográfica Playfair Display, Manrope e Space Mono. A navegação usa links semânticos e indica a rota ativa; controles de filtros e pesquisa funcionam por teclado; o visualizador usa diálogo modal nativo, setas do teclado e fechamento por Escape. As animações respeitam `prefers-reduced-motion`.

O projeto não inclui banco de dados, autenticação, painel administrativo nem uploads nesta etapa.
