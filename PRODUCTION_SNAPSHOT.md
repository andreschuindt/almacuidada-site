# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.9 — atualização visual consolidada da experiência, conteúdos e seção “Quem conduz”  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_2Kz496ajyT82GfDb3ooygbN427hB  
**GitHub branch:** projetoinspira-production

## Estado publicado
- seção **“Da assinatura à experiência, em quatro movimentos.”** permanece removida integralmente;
- carrossel antigo **“Conteúdos reais da plataforma”** permanece removido;
- CTA secundário do HERO permanece como **“Conhecer a experiência”**;
- seção **“Por dentro da experiência”** foi centralizada e recebeu nova hierarquia editorial;
- título atualizado para **“Veja uma parte do que você encontra dentro do INSPIRA.”**;
- benefícios da seção foram reorganizados em uma grade simétrica e responsiva;
- foi incluída uma **amostra visual real do ambiente digital da Plataforma Alma Cuidada**, com legenda explicando que o catálogo é dinâmico;
- bloco **“Quatro formas de viver a experiência INSPIRA”** recebeu quatro novas imagens editoriais, totalmente diferentes das anteriores e alinhadas aos temas **Leituras que inspiram**, **Pausas que restauram**, **Reflexões que ampliam caminhos** e **Uma jornada que acompanha você**;
- textos e legendas dos quatro cartões foram refinados e mantidos em composição uniforme;
- seção **Impacto social** mantém a arte do modelo 5 + 1 e a explicação de que a cada cinco acessos pagantes uma concessão é entregue a quem precisa;
- seção **“Quem conduz”** foi novamente refinada para evitar corte da fotografia de André Schuindt;
- retrato agora é apresentado integralmente dentro de um card próprio, sem `object-fit: cover` que corte o rosto, com legenda separada e composição equilibrada ao lado do texto;
- quote, textos institucionais, box **“Minha intenção com o INSPIRA”**, assinatura, credenciais e CTA foram preservados;
- todos os novos elementos possuem comportamento responsivo para desktop, tablet e celular;
- recursos visuais desta versão foram consolidados em `assets/inspira-v29-sprite.svg`;
- CSS/JS publicados com cache-buster `v=29`;
- HTML principal servido com `Cache-Control: no-store`;
- cabeçalho de verificação `X-INSPIRA-Release: 2.9` ativo;
- site oficial e novo recurso visual validados com HTTP 200.

## Arquitetura de publicação
O conteúdo-fonte permanece versionado no branch `projetoinspira-production`.

O runtime oficial está versionado no GitHub em:
- `official-runtime/api/proxy.js`
- `official-runtime/vercel.json`

Os elementos visuais consolidados da release estão em:
- `assets/inspira-v29-sprite.svg`

O runtime entrega a página oficial com as alterações estruturais aplicadas no servidor antes do HTML chegar ao navegador.

## Validação da release 2.9
- Deployment Vercel: `dpl_2Kz496ajyT82GfDb3ooygbN427hB`
- Status: `READY`
- Alias oficial: `https://projetoinspira.vercel.app/`
- HTTP: `200`
- Release header: `2.9`
- CSS/JS: `v=29`
- Asset visual: `/assets/inspira-v29-sprite.svg?v=29`
- Asset visual validado com HTTP 200

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
