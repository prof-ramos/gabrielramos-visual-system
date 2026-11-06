# Prompts de especificação para artes

**Estado dos textos abaixo: propostas de especificação, não aprovadas pelo usuário.** Apenas a [imagem original da Dama](references/dama-reference.png) foi fornecida como referência visual aprovada. Os exemplos organizam decisões para revisão; não comprovam fidelidade de um gerador. O estado de execução dos dois exemplos da Dama é registrado separadamente em [prompt-tests.md](prompt-tests.md); a realização de um teste não aprova o prompt ou a candidata.

Antes de reutilizar qualquer texto, consultar o [guia](image-guide.md), a [ficha](characters/dama.md) e abrir visualmente o original. Não substituir a referência por uma descrição genérica de Lady Justice. O nome do arquivo ou seu caminho em um prompt não entrega os pixels a uma ferramenta: a referência deve ser efetivamente anexada quando houver uma geração autorizada.

## Estrutura comum para personagens

Separar explicitamente estilo, identidade e cena. Os campos abaixo são um roteiro, não uma nova identidade aprovada:

```text
Objetivo e uso: [mensagem, destino, proporção e área para texto].
Referência-mestra de estilo: imagem da Dama efetivamente anexada.
Linguagem comum: gravura editorial, hachuras e pontilhado que constroem
volume, paleta contida, contraste legível, respiro e humor pela situação.
Personagem: [nome, ficha e imagem própria efetivamente anexada].
Identidade: [invariantes exclusivas da ficha, sem copiar atributos da Dama].
Variante documentada: [paleta/acabamento específico, se existente].
Cena e mudança solicitada: [pose, gesto, ambiente e objetos necessários].
Interface e texto: [composição editorial separada e superfícies limpas].
Evitar: mistura de personagens, props não pedidos, ruído uniforme,
aparência plástica/3D e cartoon genérico.
Revisão: comparar estilo com a referência-mestra e identidade com a ficha.
Pendências: [decisões ainda necessárias; não tratá-las como resolvidas].
```

Para o Droppy, manter a indicação azul monocromática já registrada e explicitar a pendência de compatibilização descrita no [guia](image-guide.md). Não usar este template para completar identidade visual ainda não definida.

## Estrutura reutilizável da Dama

```text
Objetivo e uso: [o que a peça comunica e onde será usada].
Referência visual: imagem original da Dama efetivamente anexada.
Papel da referência: identidade, rosto, venda, cabelos, traje/drapeado,
volume escultórico, hachuras e relação marfim/marinho.
Mudança solicitada: [uma mudança de pose, cena ou enquadramento].
Invariantes: preservar identidade da ficha; não redesenhar rosto ou traje.
Cena e props: [apenas elementos que pertencem ao pedido].
Composição: [proporção, enquadramento e espaço para composição editorial].
Cor: tokens do sistema; rosa e dourado apenas em acentos ilustrativos.
Textura: hachuras e pontilhado acompanhando o volume, sem ruído uniforme.
Tipografia: [sem texto na imagem, ou texto exato a compor em camada separada].
Evitar: novos atributos não pedidos, deformações e mistura com o Droppy.
Revisão: comparar visualmente a saída com a referência e as invariantes.
```

## Exemplo de especificação da cena de referência

Proposta de descrição para revisão, não um prompt aprovado nem uma tentativa de reproduzir o PNG:

> Usar a imagem anexada da Dama como referência principal. Preservar o desenho do rosto visível, a venda, os cabelos presos com folhagens, o fecho oval e o vocabulário do drapeado clássico. Figura escultórica em marfim, reclinada, erguendo a balança e segurando um pires com xícara rosa, café e vapor. Manter livros, biblioteca marinho e pães de queijo dourados como na cena de referência. Hachuras finas e pontilhado devem construir volume. O humor surge da pausa para o café em contraste com a solenidade da Justiça. Não acrescentar espada, texto ou outros personagens. Não reinterpretar a identidade da Dama nem confundi-la com o Droppy.

## Exemplo de variação controlada

Proposta ainda não aprovada: **a mesma cena, com mais espaço vazio à esquerda para composição editorial**.

> Tomar a imagem anexada como referência de identidade e composição. Propor maior área marinho vazia à esquerda, preservando a Dama reclinada, seu rosto visível, venda, cabelo, traje, balança e os props da cena. Não mudar a expressão nem acrescentar elementos para preencher o espaço. Manter xícara rosa e pães de queijo dourados como acentos pontuais; volume escultórico em marfim, sombras de hachura e biblioteca discreta. Deixar a imagem sem texto: a tipografia será composta separadamente em Fraunces e Source Sans 3. Comparar o resultado com o original antes de considerar qualquer uso.

Essa variação é uma hipótese de direção, não uma afirmação de que uma ferramenta conseguirá expandir a imagem mantendo todos os detalhes. Poses novas podem ser especificadas posteriormente a partir da mesma ficha, conforme o pedido; não são necessárias para validar esta primeira etapa documental.

## Registro de aprovação

Para cada futura proposta, registrar objetivo, referência usada, mudanças solicitadas, pontos de revisão e decisão do usuário. Não promover automaticamente um exemplo deste arquivo a “aprovado”, nem tratar este guia como autorização para geração paga ou publicação. Salvar novas saídas em arquivos próprios, preservando o PNG original e sua proveniência.
