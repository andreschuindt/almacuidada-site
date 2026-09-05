# Projeto INSPIRA — Production Snapshot

**Release:** INSPIRA 2.2 — Atualizações visuais finais + carrossel corrigido  
**Publicado em:** 2026-09-04  
**Site oficial:** https://projetoinspira.vercel.app/  
**Vercel project:** projetoinspira  
**Vercel deployment:** dpl_Bog4erhmh7X6xACyY7fwcRqoKyfx  
**GitHub branch:** projetoinspira-production

## Estado preservado
- Todas as melhorias da versão 2.1 de auditoria, conversão, acessibilidade e performance
- CTA mobile e arquitetura de conversão preservados
- Contraste, foco, semântica, SEO, Open Graph, Schema/JSON-LD e páginas legais preservados
- Carrossel de uma imagem por vez
- Primeira imagem do carrossel atualizada para **Diariamente — bem-estar no trabalho** com asset WebP direto e validado
- Asset: `assets/diariamente-bem-estar-trabalho-v3.webp`
- Remoção da seção **Da assinatura à experiência, em quatro movimentos**
- CTA secundário do hero atualizado para **Conhecer a experiência**
- Nova seção **Algumas formas de você viver essa experiência INSPIRA.**
- Quatro cards editoriais: Leituras que inspiram; Pausas que restauram; Reflexões que ampliam caminhos; Uma jornada que acompanha você
- Estado oficial sincronizado entre GitHub e Vercel

## Arquitetura de publicação
O conteúdo-fonte completo permanece versionado no branch `projetoinspira-production`. O deployment oficial do Vercel utiliza `api/proxy.js` e `vercel.json` para servir, com MIME e cache corretos, o snapshot imutável do commit `9d91f82d45108750165cae49c18ecaba07b2007f`, que contém o HTML/CSS/JS e todos os assets necessários à release 2.2.

## Rollback
O estado anterior da produção foi preservado em branches de backup criados antes desta publicação, incluindo `projetoinspira-production-backup-20260904-final`.

Este branch registra o estado atualmente publicado em produção.
