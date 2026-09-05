# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.7 — nova arte e explicação do impacto social 5 + 1  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_CgoDHw4tbNRvaqCiQkormmTBkvS4  
**GitHub branch:** projetoinspira-production

## Estado publicado
- seção **“Da assinatura à experiência, em quatro movimentos.”** permanece removida integralmente;
- carrossel **“Conteúdos reais da plataforma”** permanece removido;
- seção **“Por dentro da experiência”** permanece reorganizada em uma única coluna central;
- CTA secundário do HERO permanece como **“Conhecer a experiência”**;
- seção **Impacto social** atualizada com uma nova ilustração editorial no lugar dos números grandes **5 + 1**;
- nova arte comunica visualmente cinco pessoas contribuindo para que uma sexta pessoa receba acesso ao cuidado;
- texto da seção explica de forma direta que **a cada 5 acessos pagantes ao INSPIRA, uma concessão de acesso é entregue a quem precisa e não consegue custear a participação**;
- explicação complementar reforça que cada grupo de cinco assinaturas abre uma nova possibilidade de acesso para pessoas em contexto de vulnerabilidade emocional;
- lógica para empresas e organizações preservada por meio de acessos em lote e Planos Sementes;
- nova arte versionada em `assets/impacto-social-5mais1.svg`;
- CSS/JS publicados com cache-buster `v=27`;
- HTML principal servido com `Cache-Control: no-store`;
- cabeçalho de verificação `X-INSPIRA-Release: 2.7` ativo;
- site oficial e novo asset validados com HTTP 200.

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`.

O deployment oficial usa o runtime Vercel versionado também no GitHub em:
- `official-runtime/api/proxy.js`
- `official-runtime/vercel.json`

O runtime lê os arquivos públicos do branch de produção e entrega a página oficial com as alterações estruturais aplicadas no servidor antes do HTML chegar ao navegador.

## Validação da release 2.7
- Deployment Vercel: `dpl_CgoDHw4tbNRvaqCiQkormmTBkvS4`
- Status: `READY`
- Alias oficial: `https://projetoinspira.vercel.app/`
- HTTP: `200`
- Release header: `2.7`
- Asset da ilustração: `/assets/impacto-social-5mais1.svg?v=27`

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
