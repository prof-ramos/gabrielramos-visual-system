# Teste dos prompts da Dama

Concluído em **6 de novembro de 2026**, a pedido do usuário. Foram testados os dois exemplos concretos de [image-prompts.md](image-prompts.md); o template com campos em aberto não é um terceiro prompt. Cada exemplo recebeu **uma candidata inicial, sem correções extras**.

Modo integrado, **modelo não identificado pela ferramenta**: este teste não comprova uso de Images 2.6. Sem texto na imagem ou transparência. O original e os prompts documentais não foram alterados; o estado de proposta no documento de origem não equivale à aprovação das candidatas.

| Exemplo | Resultado observado | Revisão técnica | Revisão visual | Estado do protocolo |
| --- | --- | --- | --- | --- |
| Cena-base | Composição, paleta e elementos reconhecíveis | Integridade 1/2: dedos dos pés pouco distintos, sem confirmar ausência de defeitos anatômicos | Critérios aplicáveis 2/2 | `needs_revision` |
| Mais espaço à esquerda | Área marinho ampliada, mas cena redesenhada além dela | Integridade 1/2; preservação 1/2 | Preservação 0/2: mudaram dobras, pães e vapor | `needs_revision` |

A dúvida anatômica não demonstra, por si só, um defeito introduzido pela geração. A cena-base passou na avaliação visual; o protocolo exige aprovação dos dois papéis para o mesmo hash, por isso permanece sem aprovação. A variação não atendeu à preservação restrita. Duas amostras não medem uma taxa geral de consistência; nenhuma substitui a referência aprovada ou a decisão do usuário.

## Evidência e artefatos locais

Ambas decodificam como PNG RGB **2172 × 724**, sem alpha. Hashes de candidatas, prompts exatos e snapshots foram conferidos. Os quatro relatórios independentes foram registrados separadamente via helper; `verify` retornou `valid: true` para os dois manifests, ambos `needs_revision`.

| Candidata | SHA-256 |
| --- | --- |
| Cena-base | `9605748f15c4d784c8a0cba759966826c2580749b69d71179209aaf9a02e3a75` |
| Espaço à esquerda | `401b4a4b8753523e3ca42c0416069d46184f44864897fafb090187fd5206a995` |

Links abaixo funcionam **somente no workspace de execução**, não no GitHub. Imagens, runs e ledger não foram publicados no PR:

- [Cena-base](../../output/image-production/teste-dama/c3eecb3d-e1f9-43b5-8b6d-9ff2a44095ca/final/dama-cena-base.png) e [manifest](../../output/image-production/teste-dama/c3eecb3d-e1f9-43b5-8b6d-9ff2a44095ca/manifest.json).
- [Variação à esquerda](../../output/image-production/teste-dama/58849eb1-1939-4fb8-ae9f-29415187a8b8/final/dama-espaco-esquerda.png) e [manifest](../../output/image-production/teste-dama/58849eb1-1939-4fb8-ae9f-29415187a8b8/manifest.json).
- [Índice](../../output/image-production/teste-dama/run-index.json) e [resumo verificável](../../output/image-production/teste-dama/result-summary.json); os prompts e relatórios ficam em `work/` de cada run.

O protocolo usou coordinator, producer, technical e visual em **explicit-load**, sem afirmar ativação nativa. Revisores distintos emitiram os pareceres técnico e visual ligados ao SHA de cada candidata. A referência mantém SHA-256 `e0502c5a4359058a2b29561559751d1a609919d2c8de15b7534b971a1ce2e0e9`; snapshots e histórico de tentativas permanecem no diretório local ignorado pelo Git.
