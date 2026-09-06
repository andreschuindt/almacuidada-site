# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 3.7 — correção visual definitiva das seções de experiência  
**Publicado em:** 2026-09-05  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_3R7Zj1MDszE54zu62iQZwWrvZgBm  
**GitHub branch:** projetoinspira-production

## Estado publicado
- corrigida a seção **“Por dentro da experiência”** com o asset válido `/assets/plataforma-dashboard-v33.svg?v=37`;
- removida, em runtime, a substituição que trocava as quatro artes do bloco **“Quatro formas de viver a experiência INSPIRA”** por arquivos WebP que estavam falhando no navegador;
- as quatro artes passam a permanecer diretamente incorporadas no HTML como SVGs inline, eliminando dependência de arquivos externos quebrados;
- as quatro artes representam, respectivamente: leituras que inspiram, pausas que restauram, reflexões que ampliam caminhos e uma jornada que acompanha você;
- cache-buster atualizado para `v=37` no CSS e JavaScript;
- novo checkout visual permanece preservado integralmente, com os links oficiais da Greenn;
- HTML principal servido com `Cache-Control: no-store`;
- cabeçalho `X-INSPIRA-Release: 3.7` ativo.

## Runtime oficial
- `official-runtime/api/proxy37.js`
- `official-runtime/vercel.json`
- script remoto transformado em runtime: `inspira-v2-1.js`

## Validação da release 3.7
- Deployment Vercel: `dpl_3R7Zj1MDszE54zu62iQZwWrvZgBm`
- Status: `READY`
- Alias oficial: `https://projetoinspira.vercel.app/`
- HTTP principal: `200`
- Release header: `3.7`
- JS: `/inspira-v2-1.js?v=37`, HTTP `200`
- JS confirma `const agora=null`, preservando as quatro artes SVG inline;
- imagem da plataforma: `/assets/plataforma-dashboard-v33.svg?v=37`, HTTP `200`, MIME `image/svg+xml; charset=utf-8`;
- HTML oficial contém as quatro artes SVG inline no bloco `#agora`.

## Rollback
Os estados anteriores permanecem preservados no histórico do GitHub e nos deployments anteriores do Vercel.
