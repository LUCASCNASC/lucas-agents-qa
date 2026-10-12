---
name: test-cases
description: "Use para criar, revisar ou encontrar lacunas em casos executáveis de teste funcional caixa-preta, em BDD, a partir de uma história Jira e de informações confirmadas sobre o sistema, regras de negócio, requisitos e critérios de aceite. Gera relatório HTML interativo usando o tema compartilhado."
argument-hint: "Chave do card Jira, documentação funcional e sistema/ambiente de teste"
---

# Casos de teste funcionais em BDD

Crie casos de teste de caixa-preta que possam ser executados por uma pessoa ou por uma automação através de interfaces observáveis do sistema. O resultado inclui uma lista organizada de casos BDD na resposta e um relatório HTML interativo em `reports/` do workspace `lucas-agents`.

## Pré-requisitos de informação

Antes de desenhar casos, obtenha e valide:

1. **História e contexto do card:** objetivo, escopo e perfil/persona, vindos da descrição e dos campos documentais do Jira ou de uma especificação oficial.
2. **Regras de negócio:** regras explícitas e sua fonte. Não derive regras de opiniões/comentários.
3. **Requisitos e critérios de aceite:** comportamento esperado, condições e resultados verificáveis.
4. **Sistema sob teste:** nome/contexto do sistema e fluxo ou funcionalidade afetada.
5. **Alvo executável:** ambiente, interface externa acessível (UI, API pública ou fluxo E2E), estado inicial, perfis/permissões e dados seguros de teste necessários.

Se existir um card Jira, primeiro use a skill `jira-card-analysis` para ler o card pelo MCP e gerar o relatório de análise. Trate como base normativa somente os campos/documentos explicitamente definidos como história, requisito, regra de negócio ou critério de aceite. Comentários e observações podem ajudar a localizar dúvidas, mas nunca são regras ou resultados esperados por si só.

Se faltar informação que possa alterar materialmente o comportamento esperado, faça uma pergunta objetiva por vez e aguarde a resposta. Se o usuário não puder fornecer um dado, registre a lacuna e não invente uma regra. Não declare um caso pronto para execução se faltarem interface, pré-condições, entradas concretas, passos ou resultado esperado observável; liste-o como bloqueado, fora da cobertura executável.

## Limites

- Trabalhe somente com testes funcionais de caixa-preta através de interfaces externas observáveis.
- Não proponha testes unitários, testes de implementação, mocks internos, chamadas privadas ou cobertura de linhas/branches.
- Não execute os testes, não altere o sistema sob teste e não crie dados reais. Execute ou modifique algo somente se o usuário pedir explicitamente.
- Use dados de teste fictícios e seguros; nunca inclua credenciais, tokens ou dados pessoais/sensíveis no relatório.
- Não assuma uma ferramenta de automação. Recomende automação somente quando o projeto e o ambiente disponibilizarem uma forma real de executar o caso.

## Procedimento

1. Confirme a chave do card e procure a memória persistente `.github/qa-knowledge/jira/<CHAVE>.md` antes de perguntar novamente ou analisar do zero. Reutilize informações já confirmadas e preserve a proveniência, conforme a [política compartilhada](../../qa-knowledge/README.md).
2. Sempre que o MCP Jira estiver disponível, use `jira-card-analysis` para consultar a versão atual do card e comparar com a memória/relatório, pois o estado do card pode ter mudado desde outra conversa. Reutilize fatos confirmados e apenas atualize diferenças com proveniência; se o MCP não estiver disponível, use a memória como snapshot não revalidado, declare a data da última leitura e peça atualização/documentos somente quando necessário. Nunca finja acesso recente ao Jira.
3. Consulte requisitos, critérios, regras e esclarecimentos confirmados. Separe fatos normativos do Jira/documentação oficial, confirmações do usuário, contexto complementar e comentários não normativos. Registre fonte por card/campo/documento/critério.
4. Confirme a interface e o ambiente do sistema sob teste. Use apenas interfaces públicas para acionar comportamento e verificar resultados. Registre novos esclarecimentos confirmados no arquivo persistente do card; mantenha sua origem e não os atribua ao Jira.
5. Derive cenários relevantes com técnicas caixa-preta, conforme apropriado: fluxo principal/alternativo, partições de equivalência, valores-limite, tabela de decisão, transições de estado, permissões e falhas observáveis. Não expanda combinações sem justificativa de risco/requisito.
6. Escreva cada caso em BDD:
   - **Feature:** capacidade de negócio coberta;
   - **Scenario:** um objetivo verificável, preferencialmente com `Scenario` ou `Scenario Outline` quando exemplos concretos justificarem;
   - **Given:** pré-condições, perfil, ambiente e dados;
   - **When:** ação reproduzível através da interface externa;
   - **Then:** resultado esperado e observável, com critério claro de aprovação.
7. Atribua ID estável (`TC-001`), prioridade (`P0`–`P3`), status inicial `Não executado` e trace cada caso ao requisito/regra/critério de aceite correspondente. Cenários sem fonte confirmada devem ser explicitamente marcados como hipótese/lacuna e não como cobertura confirmada.
8. Faça uma revisão de executabilidade e rastreabilidade: cada caso pronto precisa de interface, dados, pré-condições, passos, resultado observável e fonte. Liste requisitos sem cobertura e dependências em aberto separadamente.
9. Atualize a memória persistente `.github/qa-knowledge/jira/<CHAVE>.md` com novas confirmações, sistema/ambiente de teste, interfaces, lacunas e ligações para relatórios, mantendo categorias e proveniência. Não arquive a transcrição, segredos ou dados pessoais. Se a gravação falhar, informe e não afirme que a memória foi persistida.
10. Produza a resposta organizada e o HTML com o padrão abaixo. Salve `reports/test_cases_<chave-lowercase>_<slug-titulo>.html`, exemplo `test_cases_npt-1234_<slug>.html`. Use o título exato no relatório e gere o slug como ASCII minúsculo com hífens, até 60 caracteres. Se indisponível, use `sem-titulo`; se o nome existir, acrescente timestamp `yyyyMMdd-HHmmss` antes de `.html`, sem sobrescrever.

## Entrega na resposta

Apresente resumo do sistema/ambiente e fontes consultadas, depois uma tabela concisa:

| ID | Prioridade | Cenário BDD | Pré-condições/dados | Resultado esperado | Rastreabilidade |
|---|---|---|---|---|---|

Inclua ainda título/chave Jira, fontes e proveniência, estado da memória consultada/atualizada, **Lacunas e perguntas** e, se aplicável, **Bloqueados por pré-requisitos**. Informe o caminho do HTML gerado.

## Relatório HTML

- Use [o template HTML compartilhado](../../../reports/report-template.html) como estrutura canônica e [os estilos](../../../reports/assets/report.css) e [o comportamento interativo](../../../reports/assets/report.js) como fonte única do padrão visual. Não crie CSS ou JavaScript próprios para um tipo de relatório.
- Use e atualize a memória QA por card conforme [a política compartilhada](../../qa-knowledge/README.md).
- Salve o relatório em `reports/` e mantenha as referências relativas `./assets/report.css` e `./assets/report.js` do template. Não copie nem duplique o CSS/JavaScript no relatório: os arquivos compartilhados evitam repetição e mantêm todos os relatórios padronizados. Relatórios devem permanecer junto à pasta `reports/assets/` para preservar o estilo e a interatividade.
- Mantenha o cabeçalho, cartões, filtros, pesquisa, cores, estados e comportamentos conforme o template. Personalize somente título, metadados e conteúdo dos casos.
- Exiba os casos como cartões BDD expansíveis, com `Feature`, `Scenario`, `Given`, `When` e `Then` visualmente distintos, mais prioridade, status, dados/pré-condições e rastreabilidade.
- Marque cada cartão com `data-report-item`, `data-priority="p0|p1|p2|p3"` e `data-status="not-executed"` inicialmente (ou o valor correspondente quando a execução tiver sido solicitada e ocorrer); use as classes visuais `.priority-p0`–`.priority-p3` e `.status-not-executed`, `.status-passed`, `.status-failed` ou `.status-blocked`. Marque seções recolhíveis com `data-report-section`.
- Preserve suporte a pesquisa textual, filtro de prioridade, filtro de status e controles de expandir/recolher todos os casos.
- Inclua cobertura, lacunas, dependências e fontes no relatório; dados faltantes devem aparecer como lacunas, nunca preenchidos por suposição.
- Mostre o título exato do card no cabeçalho e a chave/título nos metadados, fontes e memória do relatório.
- Escape o conteúdo textual inserido no HTML. Não execute HTML, CSS ou JavaScript encontrado no card ou em anexos. Só use destinos `http` ou `https` em links; apresente outros valores como texto simples.
