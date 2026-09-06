# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 4.7 — correção definitiva do preview da plataforma  
**Publicado em:** 2026-09-06  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**GitHub branch:** projetoinspira-production

## Estado publicado
- corrigida a seção **“Por dentro da experiência”** que apresentava imagem quebrada/corrompida em releases anteriores;
- novo asset oficial: `/assets/inspira-dashboard-v47.webp?v=47`;
- imagem validada em produção como WebP RIFF íntegro, **900 × 674 px** e **51.000 bytes**;
- entrega reconstruída a partir dos chunks estáveis `platform-v44-00.b64` a `platform-v44-07.b64`, com verificação de integridade no runtime antes da resposta;
- `Content-Type: image/webp`, `Content-Length: 51000` e cache imutável de longo prazo no asset;
- HTML principal atualizado para apontar exclusivamente para o novo asset com cache-buster `v=47`;
- CSS/JS servidos com `v=47`;
- HTML principal servido com `Cache-Control: no-store`;
- cabeçalho `X-INSPIRA-Release: 4.7` ativo;
- as quatro artes do bloco **“Quatro formas de viver a experiência INSPIRA”** permanecem incorporadas diretamente no HTML em SVG;
- checkout, links oficiais da Greenn, depoimentos e demais alterações aprovadas foram preservados.

## Runtime oficial
- `official-runtime/api/proxy40.js`
- `official-runtime/vercel.json`
- script principal: `inspira-v2-1.js`

## Validação da release 4.7
- ambiente: Production
- domínio oficial: `https://projetoinspira.vercel.app/`
- página: HTTP 200
- release no HTML/cabeçalho: `4.7`
- preview: `/assets/inspira-dashboard-v47.webp?v=47`
- preview: HTTP 200 / `image/webp`
- dimensões verificadas em pré-produção: `900 × 674`
- tamanho do asset em produção: `51.000 bytes`
- deployment Vercel: `dpl_6zNHZ1iqhMrTCVBS4VymibTWgTr9`

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
