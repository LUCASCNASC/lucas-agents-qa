# Memória de conhecimento QA

Este diretório é a memória persistente e versionável do projeto para uso pelas skills QA em conversas futuras. Ao trabalhar em um card, leia primeiro o registro correspondente; não dependa do histórico do chat atual.

## Onde persistir

- Um arquivo `jira/<CHAVE>.md` por card, por exemplo `jira/NPT-1234.md`.
- Use `card-template.md` para novos registros. Crie a subpasta `jira/` somente quando o primeiro registro real for produzido.
- Links, regras, decisões e lacunas devem apontar à origem e guardar a data de consulta/confirmação.

## O que guardar

Registre um resumo enxuto e estruturado das informações relevantes para análises futuras:

- identificador, título e URL do card;
- história, objetivo, escopo e contexto do sistema sob teste;
- regras, requisitos e critérios de aceite extraídos do Jira/documentação oficial;
- esclarecimentos funcionais que o usuário confirmou no chat;
- ambiente, interfaces, perfis, dados fictícios de teste e restrições confirmados;
- perguntas em aberto, ambiguidades, conflitos e fontes inacessíveis;
- proveniência de cada item e data da última leitura/validação.

Não arquive a transcrição completa do chat. Normalize e resuma apenas conhecimento reutilizável. Não armazene credenciais, tokens, dados pessoais/sensíveis ou exemplos com dados reais. Use placeholders seguros para segredos.

## Autoridade e proveniência

Mantenha categorias separadas; não transforme uma categoria na outra por inferência:

1. **Jira/documentação oficial:** conteúdo normativo do card e documentos formais vinculados.
2. **Confirmação do usuário:** esclarecimento explicitamente confirmado pelo usuário, com data e contexto. É uma fonte distinta da especificação Jira; não atribua sua autoria ao card.
3. **Comentário/observação:** contexto não normativo. Pode sinalizar questão ou conflito, mas não é regra, requisito nem critério de aceite, a menos que o usuário o confirme explicitamente; nesse caso registre como confirmação do usuário e preserve o comentário apenas como origem.
4. **Análise/hipótese:** interpretação ainda não confirmada. Nunca apresente como fato ou cobertura atendida.

Em conflito, preserve as duas fontes, sinalize o conflito e solicite decisão. Uma atualização do Jira não apaga silenciosamente decisões confirmadas pelo usuário, e uma confirmação do usuário não altera silenciosamente o conteúdo original do Jira.

## Fluxo entre conversas

1. Ao receber uma chave Jira, procure e leia `jira/<CHAVE>.md` antes de pedir ao usuário informações que já estejam registradas ou de refazer uma análise completa.
2. Quando o MCP Jira estiver disponível, consulte o card antes de produzir ou atualizar um relatório; registre a data da leitura. Compare o snapshot atual com a memória e explicite mudanças/conflitos. Sem MCP, trate a memória como snapshot não revalidado e declare sua data.
3. Integre esclarecimentos do usuário assim que forem confirmados. Ao fim de uma análise ou geração de casos, atualize o registro com fatos reutilizáveis, fontes, pendências e revisão.
4. Se não conseguir gravar/ler o registro, informe a limitação; não afirme que o conhecimento foi persistido.
5. Em respostas e relatórios, indique se a memória foi consultada, atualizada ou estava ausente, e use proveniência para todas as informações normativas.

## Arquivos de relatório

Todo relatório baseado em card inclui título e chave no cabeçalho, nas fontes/metadados e no nome do arquivo. Para salvar em `reports/`, use:

```text
<tipo>_<chave-jira-em-minusculas>_<slug-do-titulo-do-card>.html
```

Exemplos:

- `jira_analysis_npt-1234_<slug-do-titulo>.html`
- `test_cases_npt-1234_<slug-do-titulo>.html`

Normalize o título para um slug ASCII minúsculo com hífens; remova caracteres inválidos para nome de arquivo e limite o slug a 60 caracteres. Se o título estiver indisponível, use `sem-titulo`. Não remova nem substitua a chave. Se o caminho já existir, acrescente timestamp (`yyyyMMdd-HHmmss`) antes de `.html`; nunca sobrescreva silenciosamente. Use os componentes compartilhados de `reports/assets/`.
