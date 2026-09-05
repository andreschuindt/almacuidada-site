# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.5 — limpeza estrutural da jornada  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_55MGhHG8wiXN2Ss76TwzjiFK9zfQ  
**GitHub branch:** projetoinspira-production

## Estado preservado
- Todas as melhorias das versões 2.1 a 2.4 preservadas
- Seção **Da assinatura à experiência, em quatro movimentos.** removida do HTML entregue pelo site oficial
- Bloco completo do carrossel **Conteúdos reais da plataforma** removido do HTML entregue pelo site oficial
- Seção **Por dentro da experiência** mantida e reajustada em coluna única, sem espaço vazio do carrossel
- CTA secundário do hero aponta para `#plataforma` com o texto **Conhecer a experiência**
- CTA da seção plataforma aponta para `#agora` com o texto **Ver formas de viver o INSPIRA**
- Seção **Algumas formas de você viver essa experiência INSPIRA.** preservada
- Menu, CTAs, planos, benefícios, comunidade, encontros, impacto, fundador, depoimentos, FAQ e B2B preservados
- MIME de HTML, CSS, JS e imagens validado no runtime oficial
- Site oficial validado com HTTP 200

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`.

O deployment oficial usa um runtime Vercel versionado também no GitHub em:
- `official-runtime/api/proxy.js`
- `official-runtime/vercel.json`

Esse runtime lê os arquivos públicos do branch de produção e entrega a página oficial com as duas remoções estruturais aplicadas no servidor, antes do HTML chegar ao navegador.

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.

Este branch registra o estado atualmente publicado em produção.
