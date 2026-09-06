# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 3.6 — correção definitiva de carregamento das imagens  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_8sgFunDYrWStffXLprSHaTGX8eqY  
**GitHub branch:** projetoinspira-production

## Estado publicado
- corrigido o carregamento da imagem principal da seção **“Por dentro da experiência”**;
- corrigido o carregamento das quatro imagens do bloco **“Algumas formas de você viver essa experiência INSPIRA”**;
- os cinco arquivos visuais passam a ser servidos diretamente do branch de produção do GitHub pelo runtime oficial, eliminando dependência do deployment upstream para esses assets;
- aplicado novo cache-buster `v=36` nas imagens e no JavaScript para eliminar cache antigo de imagens quebradas no navegador;
- imagem da plataforma: `/assets/inspira-platform-v34.webp?v=36`;
- cards: `/assets/inspira-card-leituras-v34.webp?v=36`, `/assets/inspira-card-pausas-v34.webp?v=36`, `/assets/inspira-card-reflexoes-v34.webp?v=36`, `/assets/inspira-card-jornada-v34.webp?v=36`;
- novo checkout visual da release 3.5 foi preservado integralmente;
- links oficiais da Greenn permanecem preservados;
- HTML principal servido com `Cache-Control: no-store`;
- JavaScript publicado em `/inspira-v2-1.js?v=36`;
- cabeçalho `X-INSPIRA-Release: 3.6` ativo;
- site oficial e assets validados com HTTP 200 e MIME `image/webp`.

## Runtime oficial
- `official-runtime/api/proxy36.js`
- `official-runtime/vercel.json`
- script de experiência e checkout: `inspira-v2-1.js`

## Validação da release 3.6
- Deployment Vercel: `dpl_8sgFunDYrWStffXLprSHaTGX8eqY`
- Status: `READY`
- Alias oficial: `https://projetoinspira.vercel.app/`
- HTTP: `200`
- Release header: `3.6`
- JS: `/inspira-v2-1.js?v=36`
- Imagens: HTTP `200`, `image/webp`

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
