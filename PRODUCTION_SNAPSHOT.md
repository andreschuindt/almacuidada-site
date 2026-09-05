# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 3.0 — correção definitiva da amostra da plataforma e do retrato do fundador  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_8JG56THjDunKLMoCoLHx3SkawWq4  
**GitHub branch:** projetoinspira-production

## Estado publicado
- seção **“Da assinatura à experiência, em quatro movimentos.”** permanece removida integralmente;
- carrossel antigo **“Conteúdos reais da plataforma”** permanece removido;
- CTA secundário do HERO permanece como **“Conhecer a experiência”**;
- seção **“Por dentro da experiência”** permanece centralizada e com hierarquia editorial revisada;
- a **amostra visual real da Plataforma Alma Cuidada** agora é renderizada efetivamente dentro do bloco, sem o quadro vazio que aparecia na release anterior;
- o bloco **“Quatro formas de viver a experiência INSPIRA”** mantém as quatro novas artes editoriais e passou a usar o mesmo método de renderização corrigido;
- seção **Impacto social** mantém a arte do modelo 5 + 1 e a explicação objetiva da concessão a cada cinco acessos pagantes;
- seção **“Quem conduz”** agora exibe efetivamente o retrato de André Schuindt no card lateral, sem o quadro vazio da versão anterior;
- foto e conteúdo permanecem equilibrados em duas colunas no desktop e responsivos em telas menores;
- quote, textos institucionais, box **“Minha intenção com o INSPIRA”**, assinatura, credenciais e CTA foram preservados;
- o recurso visual consolidado continua em `assets/inspira-v29-sprite.svg`, mas agora é exibido por uma janela de recorte com elemento `<img>` em vez de `background-image`, eliminando a falha de renderização;
- CSS/JS publicados com cache-buster `v=30`;
- HTML principal servido com `Cache-Control: no-store`;
- cabeçalho de verificação `X-INSPIRA-Release: 3.0` ativo;
- site oficial validado com HTTP 200.

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`.

O runtime oficial está versionado no GitHub em:
- `official-runtime/api/proxy.js`
- `official-runtime/vercel.json`

O recurso visual consolidado está em:
- `assets/inspira-v29-sprite.svg`

## Validação da release 3.0
- Deployment Vercel: `dpl_8JG56THjDunKLMoCoLHx3SkawWq4`
- Status: `READY`
- Alias oficial: `https://projetoinspira.vercel.app/`
- HTTP: `200`
- Release header: `3.0`
- CSS/JS: `v=30`
- Asset visual: `/assets/inspira-v29-sprite.svg?v=30`

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
