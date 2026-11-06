## Agent skills

### Issue tracker

Issues e specs ficam no GitHub Issues de `prof-ramos/gabrielramos-visual-system`. Veja [docs/agents/issue-tracker.md](docs/agents/issue-tracker.md).

### Triage labels

Use os cinco labels canônicos: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human` e `wontfix`. Veja [docs/agents/triage-labels.md](docs/agents/triage-labels.md).

### Domain docs

Layout single-context: `GLOSSARY.md` na raiz e ADRs em `docs/adr/`, criados quando houver conteúdo real. Veja [docs/agents/domain.md](docs/agents/domain.md).

### Artes e referência da Dama

Antes de especificar, gerar, editar ou avaliar artes deste sistema, leia [docs/design/image-guide.md](docs/design/image-guide.md) e o [sistema visual](docs/design/visual-system.md). Para a Dama, leia também a [ficha](docs/design/characters/dama.md) e abra efetivamente [a imagem original](docs/design/references/dama-reference.png) com a ferramenta de visualização de imagens; ler apenas o caminho ou a descrição não substitui a inspeção. Preserve o original byte a byte. Consulte [prompts e seus estados de aprovação](docs/design/image-prompts.md) e [fontes/limitações](docs/design/sources-images.md); referência aprovada não significa aprovação de novas propostas nem garantia de consistência do modelo.

A imagem da Dama é também a **referência-mestra do estilo comum**: abra-a para qualquer trabalho de ilustração da família, além de consultar a referência e a ficha próprias do personagem. Não transfira venda, rosto, drapeado, balança ou props da Dama a outros personagens. Preserve os tokens de `src/styles/global.css`, as fontes locais e a interface clara e limpa; o fundo marinho da arte não autoriza mudar o tema do site. Para o Droppy, conserve a orientação azul monocromática documentada e a pendência de compatibilização com a referência-mestra, sem inventar uma decisão definitiva. Use o [checklist de aceitação](docs/design/image-guide.md#checklist-de-aceitação) e não substitua referências aprovadas por novas saídas sem decisão explícita.
