# Lucas Agents — QA Skills

Conjunto de skills para apoiar atividades recorrentes de QA no dia a dia. Cada skill deve encapsular um fluxo de trabalho claro e reutilizável, aproveitando as ferramentas já disponíveis no projeto que está sendo verificado.

## Objetivos

- Automatizar tarefas de QA repetíveis sem esconder falhas ou incertezas.
- Produzir resultados rastreáveis, com evidências, arquivos afetados e próximos passos.
- Adaptar-se à linguagem e às ferramentas existentes no projeto-alvo, sem impor dependências desnecessárias.
- Separar verificações independentes em skills pequenas e combináveis.

## Organização

As skills compartilhadas do workspace ficam em `.github/skills/`, uma pasta por skill:

```text
.github/
└── skills/
    ├── <nome-da-skill>/
    │   ├── SKILL.md
    │   ├── scripts/       # opcional: automações da skill
    │   ├── references/    # opcional: material carregado quando necessário
    │   └── assets/        # opcional: modelos e outros arquivos
    └── README.md
```

Consulte [`.github/skills/README.md`](.github/skills/README.md) para as convenções de criação e manutenção.

## Princípios de QA

1. Entender o contexto, as ferramentas e os comandos já configurados no projeto-alvo antes de executar verificações.
2. Preferir comandos de validação existentes e em modo somente leitura; não alterar código ou configuração sem solicitação.
3. Distinguir falhas confirmadas, avisos e limitações do ambiente.
4. Apresentar evidências reproduzíveis: comando, resultado, arquivo/localização quando disponíveis.
5. Não declarar sucesso quando uma verificação não pôde ser executada.

## Skills

- [`jira-card-analysis`](.github/skills/jira-card-analysis/SKILL.md): analisa documentação de um card Jira via MCP e produz um relatório factual.
- [`test-cases`](.github/skills/test-cases/SKILL.md): cria casos funcionais de caixa-preta em BDD e produz relatório interativo.

Os relatórios HTML futuros serão salvos em `reports/` e seguirão o [padrão compartilhado](.github/skills/README.md).

O conhecimento reutilizável dos cards é mantido em [`.github/qa-knowledge/`](.github/qa-knowledge/README.md), separado por chave Jira, com fontes e confirmações para reutilização entre conversas.
