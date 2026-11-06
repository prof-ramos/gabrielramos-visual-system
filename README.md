# Sherlock Ramos · Astro Blog

Blog estático baseado no starter oficial do Astro, preparado para Cloudflare Pages Free. Markdown validado, fontes locais, imagens otimizadas no build e nenhum JavaScript de aplicação enviado ao navegador.

## Desenvolvimento

Use Node 24 LTS (`.node-version`) e npm. Astro 7 requer Node **22.23.4 ou superior**.

```sh
npm ci
npm run dev
```

Abra **http://127.0.0.1:4321**. O servidor fica restrito à máquina e atualiza as páginas ao salvar. O Astro 7 inicia o servidor em segundo plano; encerre com `npm run astro -- dev stop` e consulte `npm run astro -- dev status`. Para acesso deliberado pela rede local: `npm run dev -- --host 0.0.0.0`.

```sh
npm run check    # valida tipos, conteúdo e componentes
npm run build    # valida e gera dist/
npm run preview  # serve dist/ localmente após o build
```

O dev-server é apenas local; a hospedagem publica os arquivos estáticos de `dist/`.

## Publicar no Cloudflare Pages Free

1. Envie este repositório ao GitHub/GitLab e conecte-o a um projeto **Pages** no painel Workers & Pages.
2. Use o preset **Astro**, comando **`npm run build`**, diretório **`dist`** e raiz do projeto **`/`**. Escolha a branch de produção do repositório.
3. Use a imagem de build **v3**. A versão Node é selecionada por `.node-version`; `engines` sozinho não configura o runtime do Pages.
4. Configure **`SITE_URL`** na produção e nos previews com a URL canônica final, por exemplo `https://meu-blog.pages.dev` (ou seu domínio próprio). Refaça o build ao alterar o domínio.
5. O Pages instala as dependências e publica a cada push. O lockfile deve ser versionado. Se optar por instalação explicitamente reproduzível no painel, defina `SKIP_DEPENDENCY_INSTALL=1` e use `npm ci && npm run build`.

`SITE_URL` tem precedência sobre `CF_PAGES_URL` (injetada pelo Pages). Fora do Pages, o fallback é `http://localhost:4321`. Isso evita um domínio fictício e mantém canonical, RSS, sitemap e robots consistentes. `SITE_URL` é uma variável de build, não um segredo; para um build local com o domínio final: `SITE_URL=https://meu-blog.pages.dev npm run build`.

A Cloudflare recomenda Workers para novos projetos; este template usa **Pages por escolha explícita da tarefa**. Não precisa de adaptador Cloudflare, Functions, banco, Wrangler ou credenciais para desenvolver/gerar o site. Nenhum recurso remoto é criado pelos scripts.

### Cuidados com o plano gratuito

- Saída 100% estática: nenhuma chamada de Functions/Workers para renderizar páginas.
- Até **500 builds/mês**, **1 build simultâneo**, **20 minutos/build**, **20.000 arquivos/site** e **25 MiB por arquivo** no Free; verifique os limites vigentes antes de expandir.
- Restrinja branches de preview no painel se necessário para poupar builds; prefira iterar no dev-server.
- `public/_headers` aplica headers de segurança e cache de um ano somente aos assets com hash em `/_astro/`. HTML mantém o comportamento padrão do Pages para atualizações.
- O `404.html` gerado mantém respostas de página não encontrada; não há fallback de SPA.
- Fontes locais e imagens transformadas no build dispensam serviços de imagem pagos e chamadas externas do navegador.

## Escrever e personalizar

Edite `src/consts.ts` para título e descrição; a apresentação está em `src/pages/index.astro` e `src/pages/about.astro`.

Crie `src/content/blog/meu-artigo.md`:

```md
---
title: 'Meu artigo'
description: 'Uma descrição curta para o arquivo e o feed.'
pubDate: 2026-11-06
draft: false
---

Escreva seu conteúdo aqui.
```

O nome do arquivo define `/blog/meu-artigo/`. `updatedDate` e `heroImage` são opcionais; imagens devem apontar para arquivos em `src/assets/` usando caminho relativo ao artigo. Rascunhos (`draft: true`) ficam fora de **todas** as páginas públicas, rotas e RSS, inclusive no dev-server. Datas futuras não agendam publicações automaticamente: use `draft` e publique por commit quando desejar.

RSS: `/rss.xml` · sitemap: `/sitemap-index.xml` · robots: `/robots.txt`. O sitemap só é gerado no build: use o preview para conferi-lo. O preview também roda em segundo plano; encerre com `npm run astro -- preview stop`.

## Referências

- [Astro: blog starter](https://github.com/withastro/astro/tree/main/examples/blog)
- [Cloudflare Pages: configuração de build](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages: imagem de build](https://developers.cloudflare.com/pages/configuration/build-image/)
- [Cloudflare Pages: limites](https://developers.cloudflare.com/pages/platform/limits/)
- [Cloudflare Pages: headers](https://developers.cloudflare.com/pages/configuration/headers/)

## Identidade visual

O sistema **Gabriel Ramos / Contemporary Editorial Engraving** está documentado em [docs/design/visual-system.md](docs/design/visual-system.md), com tokens, wireframe, crítica e decisões. A [comparação tipográfica](docs/design/type-comparison.html) fica fora das rotas do blog; fontes e licenças são locais. Consulte [a verificação visual](docs/design/qa.md) para evidências e limites do QA.
