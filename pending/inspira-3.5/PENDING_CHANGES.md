# INSPIRA 3.5 — Alterações pendentes

## Status
NÃO PUBLICAR AINDA.

As alterações desta versão foram preparadas na branch `projetoinspira-pending-3.5`, criada a partir da produção atual.

## Checkout / Planos
- Redesenho completo dos 3 cards de planos para aproximar o visual do modelo de referência enviado pelo usuário.
- Fundo dos cards em gradiente roxo com transição quente na base.
- Hierarquia de preço muito mais forte, com números grandes e maior contraste.
- Selos compactos para `Sem fidelização`, `Economia de 20%` e `Economia de 28%`.
- Destaque especial do plano anual com borda verde e faixa superior `Melhor escolha — ECONOMIA DE R$157,00`.
- Botões em gradiente turquesa → verde, com rótulos:
  - INICIAR MENSAL
  - INICIAR SEMESTRAL
  - INICIAR ANUAL
- Benefícios apresentados com checks verdes e sem divisórias horizontais pesadas.
- Mantidos os links oficiais atuais de checkout da Greenn:
  - Mensal: `https://payfast.greenn.com.br/redirect/272524`
  - Semestral: `https://payfast.greenn.com.br/redirect/272527`
  - Anual: `https://payfast.greenn.com.br/redirect/272528`
- Mantido o benefício `Encontro online mensal ao vivo e gravado`, mesmo não aparecendo no recorte de referência, para não perder informação comercial relevante.
- Responsividade preparada para desktop, tablet e celular.

## Arquivo alterado
- `inspira-v2-1.js`

Commit da preparação: `65243ce473a40b01d4d2a993f0087b9d0ab3a184`

## Publicação
Quando o usuário disser explicitamente `pode publicar` ou equivalente:
1. promover as alterações para `projetoinspira-production`;
2. atualizar o cache-buster/release no runtime para 3.5;
3. fazer um único deploy de produção;
4. validar `https://projetoinspira.vercel.app/` e os 3 links de checkout.
