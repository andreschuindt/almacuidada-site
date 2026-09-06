# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 3.8 — preview premium da plataforma em alta definição  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**GitHub branch:** projetoinspira-production

## Estado publicado
- substituída a imagem anterior da seção **“Por dentro da experiência”**, que apresentava perda de definição em telas maiores;
- novo preview reconstruído em **SVG vetorial de alta definição**, inspirado na arte premium aprovada, eliminando tremido e borrado no redimensionamento;
- o preview mantém a estrutura visual de **Programas em Destaque** e **Curadoria de Conteúdo**, com os programas e temas apresentados de forma nítida;
- novo asset oficial: `/assets/plataforma-dashboard-premium-v38.svg?v=38`;
- as quatro artes do bloco **“Quatro formas de viver a experiência INSPIRA”** permanecem incorporadas diretamente no HTML em SVG e não dependem de imagens externas quebráveis;
- checkout redesenhado permanece preservado, com os três planos e links oficiais da Greenn;
- CSS/JS servidos com cache-buster `v=38`;
- HTML principal servido com `Cache-Control: no-store`;
- cabeçalho `X-INSPIRA-Release: 3.8` ativo;
- asset da plataforma servido como `image/svg+xml`.

## Runtime oficial
- `official-runtime/api/proxy36.js`
- `official-runtime/vercel.json`
- script principal: `inspira-v2-1.js`
- preview premium: `assets/plataforma-dashboard-premium-v38.svg`

## Validação da release 3.8
- ambiente: Production
- alias oficial: `https://projetoinspira.vercel.app/`
- release: `3.8`
- JS/CSS: `v=38`
- preview: `/assets/plataforma-dashboard-premium-v38.svg?v=38`

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
