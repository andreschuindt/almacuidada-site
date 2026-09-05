# INSPIRA 2.9 — ajustes acumulados (NÃO PUBLICAR AINDA)

Branch de preparação: `projetoinspira-pending-2.9`

## 1. Seção “Por dentro da experiência”
- centralizar todo o bloco textual;
- manter leitura mais limpa e simétrica;
- reorganizar os quatro benefícios em duas colunas no desktop e uma coluna no mobile;
- centralizar os CTAs;
- inserir abaixo do texto a captura real da plataforma enviada pelo usuário;
- tratar a imagem como prova visual do conteúdo disponível, com moldura editorial, sombra leve, cantos arredondados e legenda curta;
- texto aprovado para a seção: **“Veja uma parte do que você encontra dentro do INSPIRA.”**;
- apoio: **“Menos promessa abstrata. Mais experiência concreta: uma plataforma organizada para você ler, escutar, assistir, refletir e praticar no seu próprio ritmo.”**;
- asset final reservado no código como `/assets/plataforma-conteudos-amostra-v29.webp`.

### Fonte da imagem da plataforma
Arquivo anexado nesta conversa: `2b8d80ea-b448-48a4-834b-bd1e9b6de5b6.png`
Dimensões: 728 × 499 px
SHA-256: `cf39c13f5b7e92cf482c598611bea2809726fe7789e94740fd0b29d10ab2c9e0`

## 2. Seção “Quem conduz”
- corrigir o corte da foto;
- remover altura mínima fixa que forçava `object-fit: cover`;
- usar enquadramento integral da fotografia com `object-fit: contain`;
- deixar foto e texto visualmente equilibrados, sem alongar artificialmente a coluna da esquerda;
- manter a foto em um card próprio, com legenda abaixo da imagem em vez de sobrepor o rosto/corpo;
- preservar integralmente os textos, assinatura, credenciais e CTA;
- responsivo: foto acima do texto em telas menores, sempre sem corte.

## Estado
- alterações de HTML/CSS já estão preparadas em `official-runtime/api/proxy.js` nesta branch;
- **nenhum deploy foi feito**;
- **nenhuma alteração foi publicada no domínio oficial**;
- quando o usuário disser explicitamente **“pode publicar”**, converter/anexar a imagem da plataforma para o asset final, revisar o conjunto acumulado, promover para produção e fazer um único deploy oficial.
