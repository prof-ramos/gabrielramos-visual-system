# O Investigador de Ideias — proposta

**Estado:** proposta criativa solicitada pelo usuário, ainda não aprovada como personagem do sistema. Não é um retrato de Gabriel Ramos. A imagem da Dama fornece somente linguagem gráfica e orientação cromática; rosto, pose e acessórios não devem ser copiados.

Aplica-se a [referência-mestra](../visual-system.md#referência-mestra-de-ilustração-e-personagens). A [imagem original preservada](../references/dama-reference.png) é a referência de estilo efetivamente anexada ao teste. Nenhuma URL assinada externa foi registrada ou usada.

O escopo é **uma imagem de apresentação vertical 4:5**. A ficha com três vistas fica condicionada à aprovação da apresentação; não foi executada. Feições, silhueta e indumentária descritas no prompt são atributos propostos, não uma identidade já canonizada.

## Prompt original fornecido pelo usuário

Preservado e submetido literalmente, sem acrescentar copy ou variantes:

```text
Crie uma ilustração de personagem para o Gabriel Ramos
Visual System usando a imagem anexada como referência
de linguagem gráfica, não como modelo de personagem.

PERSONAGEM
Nome provisório: O Investigador de Ideias.

Um homem adulto com rosto alongado, sobrancelhas expressivas,
nariz levemente aquilino, cabelo curto ondulado e uma mecha
grisalha na têmpora. Sem barba. Expressão curiosa e perspicaz,
com um sorriso discreto, como quem acaba de perceber uma
contradição interessante.

Veste um sobretudo de alfaiataria com gola ampla sobre
um colete clássico. Usa óculos redondos finos.

Segura uma lupa diante de uma pequena constelação de pontos
e linhas que emerge das páginas de um livro aberto.
A cena combina investigação, conhecimento e tecnologia
com humor sutil e surrealismo editorial.

LINGUAGEM VISUAL
Reproduza o tratamento gráfico da imagem de referência:
aparência de gravura antiga reinterpretada para ilustração
editorial contemporânea, com hachuras finas, linhas curvas
acompanhando os volumes e pontilhado nas sombras.

Construa o rosto, as mãos e os tecidos com riqueza de detalhes.
O volume deve surgir principalmente das linhas e dos pontos,
não de superfícies lisas com aparência de renderização 3D.

PALETA
Fundo azul-marinho profundo.
Personagem em tons de marfim e creme, com dourado de apoio.
Um único acento rosa na fita marcadora do livro.
Sombras predominantemente em marinho.
Use a imagem anexada como orientação cromática.

COMPOSIÇÃO
Uma única figura, da cintura para cima, em vista de três quartos.
Personagem centralizado em composição vertical 4:5.
Mostrar integralmente o rosto, a lupa, o livro e as duas mãos.
Manter margem ao redor da silhueta.
Fundo simples, sem texto e sem elementos de interface.

IDENTIDADE PRÓPRIA
Não copiar o rosto, a pose ou os acessórios da figura
da imagem de referência.
Não incluir venda nos olhos, balança, xícara ou nuvens.
Preservar a linguagem ilustrativa, criando um personagem novo.

EVITAR
Fotografia, renderização 3D, acabamento plástico, anime,
cartoon infantil, neon, gradientes excessivamente suaves,
texto, letras, logotipos, marcas-d'água, objetos duplicados
e anatomia incoerente.

RESULTADO
Uma imagem de apresentação do personagem, com silhueta clara,
personalidade reconhecível e acabamento de gravura editorial.
```

## Resultado do teste inicial

Uma candidata gerada em **6 de novembro de 2026**, sem correção automática ou ficha de três vistas. Ferramenta integrada, modelo não identificado; não se afirma Images 2.6. PNG RGB **1122 × 1402**, aproximadamente 4:5.

O personagem novo e a gravura foram reconhecidos nas revisões. A composição não preservou toda a margem: o sobretudo toca a borda esquerda e é cortado na base. Técnica: composição **1/2**, demais aplicáveis 2/2. Visual: objetivo e composição **1/2**, com limite de inspeção de detalhes pequenos. O protocolo ficou em **`needs_revision`**, sem aprovação antecipada do personagem.

SHA-256 da candidata: `a16b7a58d2241756f35ac91341320f116b39ee007ca04910bfc50da390f76e4f`. SHA-256 do prompt literal: `956a701f04d7f5320b72f12551217762d0a724d6914289c4bda321dd7423be81`. Hashes, snapshots e prompt exato conferidos; os dois pareceres independentes foram registrados e `verify` retornou `valid: true`.

Artefatos **locais e não publicados no PR**, disponíveis somente no workspace de execução:

- [Imagem de apresentação](../../../output/image-production/investigador-ideias/46575df1-24e6-49a0-adf7-421cea3efb7e/final/investigador-ideias-apresentacao.png).
- [Manifest e revisões](../../../output/image-production/investigador-ideias/46575df1-24e6-49a0-adf7-421cea3efb7e/manifest.json), com prompts e relatórios separados em `work/`.
- [Resumo verificável](../../../output/image-production/investigador-ideias/result-summary.json).

A referência original da Dama permaneceu intacta e foi usada só como linguagem/cor. Este teste não altera a imagem aprovada, não canoniza a proposta e não dispara a etapa condicional de três vistas.

## Correção de enquadramento

Após o pedido do usuário para resolver a margem, foi executada **uma correção** sobre a candidata inicial, mantendo a mesma asset key e a linhagem do teste. O enquadramento agora deixa margem marinho nos quatro lados e o sobretudo não toca as laterais. As revisões técnica e visual não observaram alteração material de identidade, objetos ou linguagem; não se afirma identidade pixel a pixel.

Ambos os revisores atribuíram **2 a todos os critérios aplicáveis**, incluindo composição e preservação. Os pareceres foram registrados separadamente para o mesmo SHA; o protocolo ficou **`approved`**, com `verify` retornando `valid: true`. Essa aprovação de execução não aprova a identidade do personagem pelo usuário e não autoriza as três vistas.

PNG RGB **1122 × 1402**, aproximadamente 4:5. SHA-256: `0c5b66c3e697add5fd2e909380de82397b22e71593a46cca9dfb28ff3f4eeb4e`. Ferramenta integrada com modelo não identificado. Orçamento cumulativo: uma geração inicial e **1 das 2 correções permitidas**; nenhuma segunda correção foi necessária. Os originais foram preservados.

Artefatos locais, não publicados no PR:

- [Imagem corrigida selecionada](../../../output/image-production/investigador-ideias/0a8dcc2d-0e0f-41cc-bb1c-e41dc591b256/final/investigador-ideias-margem.png).
- [Manifest e pareceres](../../../output/image-production/investigador-ideias/0a8dcc2d-0e0f-41cc-bb1c-e41dc591b256/manifest.json) e [prompt exato da correção](../../../output/image-production/investigador-ideias/0a8dcc2d-0e0f-41cc-bb1c-e41dc591b256/work/submitted-prompt.txt).
- [Resumo verificável da correção](../../../output/image-production/investigador-ideias/correction-1-summary.json).
