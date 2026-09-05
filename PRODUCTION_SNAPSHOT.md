# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.6 — remoção definitiva das seções e novo layout de “Por dentro da experiência”  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_6kwfb56KQNAYYLwDgLhVcPKzHDvY  
**GitHub branch:** projetoinspira-production

## Estado publicado
- seção **“Da assinatura à experiência, em quatro movimentos.”** removida integralmente do HTML entregue pelo site oficial;
- carrossel **“Conteúdos reais da plataforma”** removido integralmente do layout entregue;
- seção **“Por dentro da experiência”** mantida e reorganizada em uma única coluna central, sem espaço vazio lateral;
- bloco textual limitado a uma largura de leitura confortável e CTAs preservados;
- CTA secundário do HERO ajustado para **“Conhecer a experiência”**, apontando para `#plataforma`;
- botão da seção plataforma ajustado para **“Ver formas de viver o INSPIRA”**, apontando para `#agora`;
- demais seções, planos, benefícios, comunidade, encontros, impacto, fundador, depoimentos, FAQ e B2B preservados;
- versão de CSS/JS publicada com cache-buster `v=26`;
- HTML principal servido com `Cache-Control: no-store` para evitar que versões antigas permaneçam visíveis no navegador;
- cabeçalho de verificação `X-INSPIRA-Release: 2.6` ativo;
- site oficial validado com HTTP 200.

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`.

O deployment oficial usa o runtime Vercel versionado também no GitHub em:
- `official-runtime/api/proxy.js`
- `official-runtime/vercel.json`

O runtime lê os arquivos públicos do branch de produção e entrega a página oficial já com as remoções estruturais aplicadas no servidor, antes do HTML chegar ao navegador.

## Validação da release 2.6
- Deployment Vercel: `dpl_6kwfb56KQNAYYLwDgLhVcPKzHDvY`
- Status: `READY`
- Alias oficial: `https://projetoinspira.vercel.app/`
- HTTP: `200`
- Release header: `2.6`

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
