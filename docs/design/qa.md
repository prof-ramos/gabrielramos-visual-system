# Verificação da identidade visual

## Ajuste estrutural — 13 de novembro de 2026

Duas revisões feitas em 11 de novembro (gravura em prancha marinho; movimento, busca e rodapé com marca grande) foram desfeitas a pedido de Gabriel Ramos por descaracterizarem a identidade. Gravura, cabeçalho, rodapé, lista, capa, Sobre, 404, hover e a regra "sem animação automática" voltaram ao estado da passagem de 6 de novembro. Permanecem apenas três correções:

- Artigo: retorno e data em trilho à esquerda; título, texto e rodapé numa só margem (antes eram três margens diferentes).
- Hierarquia: `h2` e `h3` reduzidos para não competir com o título da página.
- Capa: título em duas linhas a 320px.

Verificado em Chromium headless (Playwright) sobre o preview de produção: `astro check` sem erros, avisos ou hints; cinco páginas; sem overflow horizontal em início, arquivo, artigo e Sobre a 320, 360, 390, 768, 1024 e 1440px; capturas de capa e artigo inspecionadas em 1440 e 390px. As seções abaixo são o registro de 6 de novembro, não refeito.

Executada em 6 de novembro de 2026. QA real em Chromium via ego-browser, num Agent Space exclusivo, encerrado ao terminar. O navegador integrado não estava disponível nesta sessão (host de browser indisponível). Nenhuma aba pessoal foi usada.

## Evidências

- Home em desktop 1440px e mobile 390px: fontes Fraunces e Source Sans 3 efetivamente carregadas (`document.fonts.check`), sem overflow horizontal.
- Home e Sobre em 320px: largura do documento igual à viewport. Artigo em 390px: mesma verificação; título, leitura e rodapé inspecionados por captura.
- Teclado real: Tab revelou o skip-link; Enter focou `main#conteudo`; Tab alcançou o CTA com contorno sólido; Enter abriu o arquivo do blog.
- Hierarquia: home h1/h2/h3; arquivo h1/h2. A lista recebe `headingLevel` para respeitar seu contexto.
- `prefers-reduced-motion: reduce` emulado no navegador; nenhuma animação presente.
- Comparação visual local de Fraunces/Source Sans 3 com Geist renderizada e inspecionada, sem trocar a seleção original.
- Contrastes calculados pela fórmula WCAG: corpo/marfim 10,49:1; marinho/marfim 13,10:1; texto marinho/CTA rosa 7,38:1; texto secundário/marfim 5,72:1.
- No preview de produção, a página inexistente exibiu o 404 personalizado com largura 390px sem overflow. Capturas finais do produto foram feitas no preview, sem a barra de ferramentas do Astro dev.

As capturas locais estão em `output/design-review/` (ignorado pelo Git): `home-desktop.png`, `home-mobile.png`, `article-mobile.png`, `404-mobile.png`, `type-comparison.png`.

## Validação técnica final

`npm run build` executou `astro check` em 20 arquivos com zero erros, avisos e hints, e gerou as cinco páginas estáticas. O `dist/` final contém a correção de h2 no arquivo e `tabindex=-1` no destino do skip-link. Home sem scripts cliente ou fontes remotas. Assets locais com hash; regras `_headers` e estrutura de publicação Pages preservadas.

Saída final: 17 arquivos, 290.719 bytes no total, maior arquivo de 67.388 bytes. HTTP dev: início, arquivo, artigo, Sobre, RSS e robots retornaram 200. Preview e servidor auxiliar da comparação encerrados; dev em 127.0.0.1:4321 permanece ativo.

O banner promocional do Astro foi preservado intacto no disco, mas não é exibido. Nenhum símbolo definitivo ou mascote foi alterado. Sem deploy; aplicação dos headers e comportamento da CDN continuam dependentes de publicação no Pages. Não foi executada auditoria automatizada completa de acessibilidade nem teste com leitor de tela; a verificação cobre contraste, semântica, foco, teclado e responsividade descritos acima.
