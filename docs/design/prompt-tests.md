# Teste dos prompts da Dama

Execução iniciada em **6 de novembro de 2026**, a pedido do usuário. Escopo: os dois exemplos concretos de [image-prompts.md](image-prompts.md); o template com campos em aberto não é um terceiro prompt.

Modo integrado, **modelo não identificado pela ferramenta**; este teste não comprova uso de Images 2.6. Sem texto na imagem, sem transparência e sem alteração da referência ou dos prompts originais. Cada exemplo recebe uma candidata inicial; não há correções extras neste experimento.

| Exemplo | Estado |
| --- | --- |
| Cena de referência | Gerada e coletada; revisões independentes pendentes |
| Mais espaço à esquerda | Produção em andamento |

A referência tem SHA-256 `e0502c5a4359058a2b29561559751d1a609919d2c8de15b7534b971a1ce2e0e9`. Sua cópia e os documentos foram preservados em snapshots. O prompt exato é salvo antes de cada chamada.

O protocolo `image-production` usa os papéis coordinator, producer, technical e visual em **explicit-load**, sem afirmar ativação nativa. As revisões técnica e visual terão relatórios separados, ligados ao SHA da respectiva candidata. Validação estrutural não equivale a aprovação visual, e uma aprovação do protocolo não substitui a decisão do usuário.

Artefatos locais, não publicados neste PR: `output/image-production/teste-dama/` reúne `run-index.json`, manifests, snapshots, prompts, imagens e ledger. O diretório é ignorado pelo Git; seus caminhos só funcionam no workspace que executou o teste. O resultado será atualizado após as revisões.
