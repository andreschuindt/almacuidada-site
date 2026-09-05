# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.8 — seção “Quem conduz” reorganizada em retrato simétrico  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_3S5vLCYN8Uhp9C2GuvneLdL7gio5  
**GitHub branch:** projetoinspira-production

## Estado publicado
- seção **“Da assinatura à experiência, em quatro movimentos.”** permanece removida integralmente;
- carrossel **“Conteúdos reais da plataforma”** permanece removido;
- seção **“Por dentro da experiência”** permanece reorganizada em uma única coluna central;
- CTA secundário do HERO permanece como **“Conhecer a experiência”**;
- seção **Impacto social** mantém a arte do modelo 5 + 1 e a explicação objetiva de que a cada 5 acessos pagantes uma concessão é entregue a quem precisa;
- seção **“Quem conduz”** foi completamente reorganizada em uma composição de duas colunas mais simétrica;
- a foto de André Schuindt deixou o formato circular pequeno e passou a ocupar um **bloco vertical em formato retrato**, ao lado do texto;
- foto e conteúdo textual agora possuem alturas e proporções visuais mais equilibradas no desktop;
- legenda **“André Schuindt · idealizador e mediador”** foi mantida sobre a base da fotografia em formato de selo;
- quote, textos institucionais, box **“Minha intenção com o INSPIRA”**, assinatura, credenciais e CTA foram preservados e redistribuídos com melhor espaçamento;
- responsividade ajustada: em telas menores, foto e texto passam para uma coluna, mantendo a fotografia em proporção 4:5;
- CSS/JS publicados com cache-buster `v=28`;
- HTML principal servido com `Cache-Control: no-store`;
- cabeçalho de verificação `X-INSPIRA-Release: 2.8` ativo;
- site oficial validado com HTTP 200.

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`.

O runtime oficial está versionado no GitHub em:
- `official-runtime/api/proxy.js`
- `official-runtime/vercel.json`

O deployment Vercel usa um bootstrap enxuto que carrega o runtime versionado do branch de produção e entrega a página oficial com as alterações estruturais aplicadas no servidor antes do HTML chegar ao navegador.

## Validação da release 2.8
- Deployment Vercel: `dpl_3S5vLCYN8Uhp9C2GuvneLdL7gio5`
- Status: `READY`
- Alias oficial: `https://projetoinspira.vercel.app/`
- HTTP: `200`
- Release header: `2.8`
- Seção validada no HTML: `founder-v28`
- Foto utilizada pela seção: `/assets/andre-schuindt.jpg?v=28`

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
