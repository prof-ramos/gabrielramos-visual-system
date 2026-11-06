# Gabriel Ramos Visual System

## Primeira passagem: intenção e tokens

**Contemporary Editorial Engraving** é o nome autoral descritivo da direção visual escolhida para o Gabriel Ramos Visual System. Articula práticas reconhecidas de gravura e ilustração editorial; não é apresentado aqui como uma escola histórica, categoria consolidada ou técnica única. GabrielRamos é a identidade mãe; proframos e SherlockRamos compartilham linguagem tipográfica, paleta e disciplina editorial. Este blog usa a assinatura SherlockRamos. As demais assinaturas não são destinos de navegação nem credenciais profissionais.

| Token | Valor | Papel |
| --- | --- | --- |
| Marfim frio | `#F4F5F1` | Leitura e superfície principal |
| Marinho | `#142C40` | Marca, cabeçalho, rodapé e títulos |
| Rosa | `#EEA6BA` | CTA pontual, sempre com texto marinho |
| Dourado | `#AD8A4B` | Detalhe de apoio na ilustração |
| Tinta | `#273C49` | Corpo de texto |
| Borda | `#CDD3D1` | Separação sutil, sem sombra de card |

Fraunces 600 na marca, 500/600 nos títulos. Source Sans 3 em 400 no corpo e 400–600 na interface. Texto alinhado à esquerda, leitura até 68ch; escala fluida e margem lateral mínima de 24px no mobile. Fontes WOFF2 locais, com licença OFL e sem solicitação remota em runtime.

### Duas estruturas consideradas

**Hero bipartido, escolhido:** pergunta editorial à esquerda, estudo de gravura à direita. Publicações em lista ampla e silenciosa, mantendo a arte como único gesto expressivo.

```text
┌───────────────────────────────────────────────────┐
│ SherlockRamos                  Início Blog Sobre  │ marinho
├───────────────────────────────────────────────────┤
│ E se a pergunta         [esfera gravada suspensa   │
│ for outra?               sobre páginas de livro]  │ marfim
│ Direito, tecnologia...                            │
│ [Ler as publicações]                              │
├───────────────────────────────────────────────────┤
│ Publicações recentes                   Ver todas  │
│ data             título + descrição               │
├───────────────────────────────────────────────────┤
│ GabrielRamos                           Feed RSS   │ marinho
└───────────────────────────────────────────────────┘
```

**Capa centrada, descartada:** marca e pergunta centradas acima de uma gravura horizontal. A composição pareceria capa genérica de revista e alongaria a navegação no celular.

## Crítica antes do código

O starter usava eyebrow em caixa alta, azul padrão, imagem promocional do Astro e setas acrescentadas a links. Essa combinação serviria para qualquer blog. A revisão remove esses recursos: o contraste marfim/marinho define a estrutura, a pergunta editorial admite Direito, tecnologia, humor e curiosidade sem inventar biografia, e a gravura de um pequeno observatório impossível sobre um livro concentra a expressão surreal.

Não aplicar textura aos campos, textos ou botões. Não numerar conteúdos sem sequência real. Não fabricar categorias, números, credenciais ou links sociais. O dourado existe somente na órbita da gravura. O rosa no CTA e no pequeno corpo celeste tem função pontual. Sem animação automática.

## Segunda passagem: implementação

A gravura vetorial é decoração original, não mascote nem símbolo definitivo da marca. Curvas de latitude, meridianos, pontilhado e folhas hachuradas evocam engraving/etching em uma composição de livro e esfera. O asset promocional do Astro foi inspecionado e preservado intacto no disco, mas retirado das superfícies públicas por incompatibilidade com o sistema.

A comparação tipográfica fica em `type-comparison.html`, fora das rotas do produto: Fraunces/Source Sans 3 versus Geist. Geist não substitui a seleção do briefing. As decisões de contraste, respiração e hierarquia são verificadas em navegador; resultados estão em `qa.md`.

## Aplicação e manutenção

- Tokens globais: `src/styles/global.css`; fontes: `src/styles/fonts.css`.
- Componentes compartilhados: Header, Footer, PostList e EditorialEngraving.
- Páginas limpas de leitura em marfim; a gravura aparece na capa e no contexto Sobre.
- Feed, canonical, robots, sitemap, Markdown e publicação estática no Pages permanecem funcionais.
- Fotografias editoriais futuras podem ser usadas nos artigos; a imagem promocional do starter não deve voltar como fallback.
- O texto inicial é uma publicação de exemplo, explicitamente sinalizada; a página Sobre descreve o espaço, não a vida do autor.

## Vocabulário de textura e aplicação ao Droppy

Diretriz estética fornecida pelo usuário; esta seção registra o vocabulário, sem afirmar inspeção de imagens de referência.

- **Halftone (retícula):** pontos organizados que constroem sombras e volume, com aparência de impressão.
- **Dithering:** pontos ou pixels que simulam tonalidades com uma paleta limitada, trazendo um caráter retrô digital.
- **Engraving / etching:** linhas finas, hachuras e pontilhismo associados a gravuras antigas.

A combinação pode ser descrita como **Vintage Engraving Halftone**. Termos úteis para pesquisa estética: **Stipple Art**, **Engraving Halftone**, **Dithered Illustration** e **Retro Print Texture**.

Para o **Droppy**, a denominação específica é **Monochromatic Dithered Engraving**: paleta azul monocromática, pontos digitais e detalhamento tradicional de gravura. Essa orientação vale para sua linguagem ilustrativa; preserva a identidade mãe **Contemporary Editorial Engraving** e sua paleta marfim, marinho, rosa e dourado de apoio. Textura continua concentrada em ilustrações e decoração; leitura, campos e botões permanecem limpos.

Referências estéticas ou links comerciais não são autorização nem licença de uso de assets. Esta atualização não altera a ilustração existente nem incorpora imagens externas.

## Guia de artes e personagens

A aplicação ilustrativa está detalhada no [guia de artes](image-guide.md). A [ficha da Dama](characters/dama.md) deriva da [referência original aprovada e preservada](references/dama-reference.png), inspecionada nesta etapa; ela não se confunde com o Droppy. Os [prompts](image-prompts.md) são propostas de especificação para revisão, sem novas imagens aprovadas. Fontes, limites e a diferença entre anúncio e capacidade efetivamente verificada estão em [sources-images.md](sources-images.md).
