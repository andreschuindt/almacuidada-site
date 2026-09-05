# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.3 — nova arte DIARIAMENTE no carrossel  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_Fow8famMEn3f826HPWkPnDVK2VNn  
**GitHub branch:** projetoinspira-production

## Estado preservado
- Todas as melhorias das versões 2.1 e 2.2 preservadas
- CTA mobile, arquitetura de conversão, acessibilidade, contraste, SEO, Open Graph e Schema/JSON-LD preservados
- Carrossel de uma imagem por vez preservado
- Primeira imagem do carrossel substituída por uma nova arte editorial de alta definição para **DIARIAMENTE — Bem-estar no Trabalho**
- Novo asset vetorial: `assets/diariamente-bem-estar-trabalho-carousel-v5.svg`
- Legenda do primeiro slide: **Diariamente — bem-estar no trabalho**
- Asset validado em produção com HTTP 200 e `Content-Type: image/svg+xml`
- Ajuste de enquadramento do primeiro slide para exibição completa, sem bloco cinza, corte ou distorção
- Cache-busting aplicado ao JavaScript principal (`?v=20260905-v23`) para forçar a nova revisão no navegador
- Seção dos quatro movimentos continua removida por regra da versão 2.2
- Seção **Algumas formas de você viver essa experiência INSPIRA.** preservada
- Estado oficial sincronizado entre GitHub e Vercel

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`. O deployment oficial do Vercel utiliza `api/proxy.js` e `vercel.json` para servir o snapshot de conteúdo do commit `ed482d3d1ccbef21a278746e9f16ef56999f355d`, com MIME correto e cache controlado. O HTML oficial recebe versionamento do JavaScript na resposta para evitar reutilização de uma revisão antiga em cache.

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.

Este branch registra o estado atualmente publicado em produção.
