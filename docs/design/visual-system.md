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

## Referência-mestra de ilustração e personagens

**Status desta seção: proposta pendente de validação de Gabriel Ramos.** A [imagem da Dama](references/dama-reference.png) permanece a referência de trabalho anteriormente aprovada; essa aprovação não confirma automaticamente toda a sistematização abaixo.

### Finalidade e linguagem compartilhada

Esta referência-mestra é a orientação canônica para ilustrações e personagens do Gabriel Ramos Visual System. Complementa **Contemporary Editorial Engraving** e os tokens existentes, sem substituí-los ou criar uma identidade concorrente.

O vocabulário compartilhado é gravura com linhas finas, hachuras e pontilhado; volume descrito pelo desenho (escultórico na Dama, sem impor sua anatomia aos demais personagens); marinho e marfim como relação principal; dourado de apoio e rosa em acentos pontuais. A escolha da referência não obriga toda peça a ter fundo escuro. A exceção do **Droppy**, em *Monochromatic Dithered Engraving*, continua monocromática e não deve receber acentos rosa ou dourados automaticamente.

**Estilo não é personagem:** técnica e paleta podem ser compartilhadas; venda e balança são atributos da Dama; xícara, café, pães de queijo e biblioteca pertencem à cena de referência. Nenhum desses elementos deve ser transferido por padrão a outros personagens. Cada personagem precisa de sua própria referência e ficha.

**Droppy, decisão pendente:** preservar a orientação azul monocromática já documentada. Ainda falta definir com o usuário até onde o acabamento da referência-mestra se aplica a ele e registrar uma referência visual e ficha próprias. Não aplicar-lhe automaticamente marfim, rosa ou dourado, nem declarar sua variante azul revogada ou definitiva além do que já foi documentado.

### Fichas e composição

Cada ficha registra nome, função narrativa, silhueta, rosto, cabelo, roupas, expressões, poses e referência principal. Deve separar invariantes de variações permitidas; campos sem evidência ficam **pendentes**, não preenchidos por inferência. Consulte a [ficha da Dama](characters/dama.md) antes de qualquer variação dela. A [apresentação do Investigador de Ideias](characters/investigador-ideias-proposta.md) é uma proposta em teste; sua ficha de três vistas depende da aprovação do usuário.

- **Banners:** reservar área limpa quando houver composição editorial, mantendo o personagem legível.
- **Avatares:** priorizar silhueta e reconhecimento no tamanho final.
- **Capas:** usar objetos pertinentes ao tema, sem acrescentar símbolos para preencher espaço.
- **Fichas de personagem:** manter vistas e elementos separados, sem sobreposição que impeça comparação.

Textura pertence às ilustrações e à decoração. Texto, campos, botões e demais superfícies de interface continuam limpos. Nas ilustrações desta família, não adotar fotografia, acabamento de render 3D/plástico, neon, textura que prejudique a leitura, alterações dos atributos fixos ou novos tokens sem aprovação. Isso não revoga o uso de fotografias editoriais em artigos previsto acima. Volume escultórico em uma gravura não significa acabamento plástico ou renderização 3D.

### Revisão, agentes e procedência

Revisar técnica, paleta, atributos fixos, pertinência ao tema, tamanho de uso e leitura. Agentes devem consultar esta seção, o [guia operacional](image-guide.md), a ficha específica e a imagem efetiva; quando houver geração autorizada, anexar a referência real à ferramenta. Descrição textual ou caminho de arquivo não substituem os pixels. Isso orienta a consistência, sem garantir igualdade entre gerações. Use o [checklist de aceitação](image-guide.md#checklist-de-aceitação) e consulte os [resultados observados nos testes](prompt-tests.md).

| Campo | Registro |
| --- | --- |
| Responsável pela validação do sistema | Gabriel Ramos |
| Referência de trabalho da Dama | [PNG original preservado](references/dama-reference.png) |
| Procedência documentada | Arquivo fornecido pelo usuário; detalhes e SHA no [registro](references/README.md) |
| Autoria, origem de criação, data de criação e direitos de uso | Pendentes de confirmação; não inferir da aprovação estética |
| Aprovação desta seção-mestra | Pendente |

Referências externas não inspecionadas não substituem o PNG existente. Novas propostas e saídas devem manter procedência própria, preservando os originais e distinguindo aprovação da referência, revisão do protocolo e aprovação final do usuário.
