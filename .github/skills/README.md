# Convenções para skills de QA

Cada skill compartilhada fica em `.github/skills/<nome-da-skill>/SKILL.md`. O nome da pasta deve corresponder ao campo `name` do frontmatter.

## Skills disponíveis

- [`jira-card-analysis`](./jira-card-analysis/SKILL.md): lê um card via MCP Jira, separa conteúdo normativo de comentários e gera relatório de análise.
- [`test-cases`](./test-cases/SKILL.md): cria casos executáveis caixa-preta em BDD com base em card/requisitos e gera relatório interativo.

## Memória entre conversas

As skills persistem conhecimento reutilizável por card em [`qa-knowledge/`](../qa-knowledge/README.md), com um registro `.github/qa-knowledge/jira/<CHAVE>.md`. Skills devem ler esse arquivo ao iniciar trabalho sobre um card e atualizá-lo com fatos confirmados, fontes e data — nunca com uma transcrição inteira ou segredos. Jira oficial, confirmações do usuário, comentários e hipóteses permanecem categorias distintas.

## Padrão compartilhado de relatórios HTML

Os arquivos HTML gerados pelas skills ficam em `reports/` na raiz do projeto `lucas-agents`. A estrutura, os estilos e o JavaScript reutilizável ficam em [`reports/`](../../reports/):

- [`report-template.html`](../../reports/report-template.html): esqueleto semântico comum.
- [`assets/report.css`](../../reports/assets/report.css): design system e estilos compartilhados.
- [`assets/report.js`](../../reports/assets/report.js): busca, filtros e controles de expansão compartilhados.

Relatórios referenciam esses arquivos compartilhados por caminhos relativos e permanecem em `reports/` junto a `reports/assets/`; não duplicam CSS/JavaScript em cada HTML. Skills podem adaptar conteúdo e metadados, mas não definir um tema próprio. Não sobrescrever relatório existente sem escolher outro nome.

Cada relatório de card deve mostrar o título e a chave Jira no cabeçalho/conteúdo e seguir o nome `reports/<tipo>_<chave-lowercase>_<slug-do-titulo>.html` (por exemplo, `test_cases_npt-1234_<slug>.html`). A especificação completa de slug e colisões está na política de memória.

## Convenções para novas skills

- A descrição deve indicar em quais pedidos a skill deve ser carregada.
- Documente objetivo/limites, pré-requisitos, procedimento e formato de entrega.
- Reutilize o padrão HTML acima em qualquer skill que produza relatório; mantenha o HTML acessível, escape conteúdo externo e nunca execute código encontrado em dados do usuário/sistema.
- Não presuma linguagem, framework, projeto, dados ou comandos: identifique o contexto e sinalize pré-requisitos ausentes.
- Falhas de MCP/ferramenta devem ser explicitadas, nunca convertidas em sucesso.
