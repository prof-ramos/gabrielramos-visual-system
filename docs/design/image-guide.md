# Guia de artes e referências

Este guia inicia o trabalho documental da branch `gerador-image`. Reúne direção, referência e critérios de revisão; não implementa um gerador nem um sistema complexo de componentes.

Leia junto do [sistema visual](visual-system.md). **Contemporary Editorial Engraving** permanece o nome autoral descritivo da direção visual do Gabriel Ramos Visual System, não uma escola histórica nem uma técnica única.

## Referência aprovada

A [imagem original da Dama](references/dama-reference.png), fornecida pelo usuário como `new.png`, é a referência visual aprovada. Foi efetivamente inspecionada em 6 de novembro de 2026 e copiada sem alterações. [Proveniência e SHA-256](references/README.md).

![Referência aprovada da Dama: Justiça vendada reclinada, balança erguida, café em xícara rosa e pães de queijo, com livros e biblioteca marinho.](references/dama-reference.png)

Essa aprovação se refere à referência visual. Os [prompts de especificação](image-prompts.md) deste repositório são propostas para revisão; não são prompts ou novas imagens aprovadas. A imagem documental não é carregada pelo site e não deve ser movida para `public/` ou importada em páginas por conveniência.

## Aplicação da direção

As regras compartilhadas ficam na [referência-mestra do sistema visual](visual-system.md#referência-mestra-de-ilustração-e-personagens), sem um segundo conjunto de normas neste guia. O contraste entre a solenidade da Justiça e o café com pães de queijo é a cena específica da Dama, detalhada em sua [ficha](characters/dama.md). A linguagem monocromática do Droppy não substitui essa ficha.

## Tokens compartilhados

Os valores permanecem nos [tokens CSS existentes](../../src/styles/global.css); este guia reutiliza seus nomes e papéis, sem criar um segundo arquivo de tokens.

| Token existente | Aplicação às artes |
| --- | --- |
| `--ivory` | Figura, luz e áreas claras; não presumir que cada pixel da referência tenha o valor exato do token |
| `--navy` | Fundo profundo, sombras e linhas de gravura |
| `--pink` | Acento pontual, como a xícara; em CTA do site, texto marinho |
| `--gold` | Apoio dentro da ilustração, como os pães de queijo |
| `--ink`, `--muted`, `--border` | Texto e elementos editoriais limpos, quando presentes fora da imagem |
| `--display` | Fraunces: marca 600; títulos 500/600 |
| `--body` | Source Sans 3: corpo 400; interface 400–600 |

Use as fontes locais já presentes. Para peças com texto, prefira compor a tipografia numa camada editorial separada; a ilustração não deve inventar inscrições, legendas ou marcas. Texto, campos e botões ficam livres de textura. O PNG aprovado contém gradações e acentos próprios; os tokens orientam novas especificações, sem recolorir o original.

## Como preparar uma arte

1. Ler este guia e a [ficha da Dama](characters/dama.md); abrir visualmente o [PNG original](references/dama-reference.png), não apenas ler sua descrição.
2. Definir objetivo, uso, proporção, cena, mudança pedida e elementos que devem permanecer. A pose reclinada é a pose da referência, não obrigação para todas as cenas.
3. Usar os [prompts de especificação](image-prompts.md), distinguindo referência aprovada de proposta ainda não revisada. Se uma ferramenta for utilizada no futuro, anexar os pixels da referência de fato: citar o caminho no texto não equivale a fornecer a imagem.
4. Confrontar a proposta com as invariantes e as mudanças autorizadas. Não presumir que um modelo preservará identidade com perfeição.
5. Revisar rosto visível, venda, cabelos, drapeado, mãos, balança, props e legibilidade; comparar visualmente com a referência. Guardar qualquer saída futura separadamente, sem sobrescrever o original.

Nenhuma geração foi executada nesta etapa. [Fontes e limites das capacidades anunciadas pela OpenAI](sources-images.md) orientam a pesquisa, sem configurar modelo, endpoint ou parâmetros de API.
