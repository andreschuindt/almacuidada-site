# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.4 — painel estático da plataforma  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_8d9vU54fKkR139DjJsFDq8Ukkfeh  
**GitHub branch:** projetoinspira-production

## Estado preservado
- Todas as melhorias das versões 2.1, 2.2 e 2.3 preservadas
- CTA mobile, arquitetura de conversão, acessibilidade, contraste, SEO, Open Graph e Schema/JSON-LD preservados
- O carrossel da seção **Conteúdos reais da plataforma** foi removido da experiência renderizada
- No lugar do carrossel foi inserido um painel visual estático, sem setas, dots, autoplay ou navegação lateral
- Imagem utilizada no painel: `assets/comunidade-inspira-banner-1000.webp`
- Legenda do painel: **Uma visão da experiência INSPIRA.**
- Texto complementar: **Conteúdos, curadoria, práticas e comunidade reunidos em um mesmo ecossistema digital de cuidado.**
- Asset validado em produção com HTTP 200 e `Content-Type: image/webp`
- Seção **Da assinatura à experiência, em quatro movimentos.** removida da experiência renderizada
- CTA secundário do hero passa a direcionar para `#plataforma` com o texto **Conhecer a experiência**
- Seção **Algumas formas de você viver essa experiência INSPIRA.** preservada com quatro cards editoriais
- Estado oficial sincronizado entre GitHub e Vercel

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`. O deployment oficial do Vercel serve o snapshot imutável do commit `586baa8f39bedf2c6d2b39ac371dff14e0f0d992`, com rewrites para os arquivos versionados, MIME correto e cabeçalhos de indexação/segurança.

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.

Este branch registra o estado atualmente publicado em produção.
