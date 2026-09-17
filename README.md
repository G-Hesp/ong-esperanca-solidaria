# ONG Esperança Solidária

Projeto acadêmico de front-end para uma ONG fictícia. A aplicação apresenta iniciativas sociais, orientações sobre voluntariado e doações e formulários de demonstração.

**Situação atual:** páginas HTML independentes e uma página de componentes interativos implementadas. SPA, persistência de preferências, modularização ES6 e fluxo GitFlow ainda estão planejados. Não há back-end, banco de dados, envio de cadastros ou recebimento de pagamentos.

## 1. Objetivo e público

Organizar informações para voluntários, doadores e pessoas interessadas nos projetos da organização, exercitando HTML semântico, CSS responsivo, acessibilidade e manipulação do DOM com JavaScript.

Os dados institucionais e de contato são fictícios. Utilize somente dados de teste nos formulários.

## 2. Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| HTML5 | Estrutura semântica, navegação, formulários, imagens e elemento `dialog`. |
| CSS | Variáveis de design, Grid, Flexbox, media queries e estados visuais dos componentes. |
| JavaScript puro | Eventos, verificação de e-mail, mensagens, modal e toast. |
| JPEG e WebP | Versões otimizadas das imagens ilustrativas. |

A aplicação não usa frameworks ou bibliotecas externas em tempo de execução. A build utiliza NPM, esbuild 0.28.2 e html-minifier-terser 7.2.0 como dependências de desenvolvimento. Git e GitHub fazem parte do planejamento de versionamento, mas não há repositório remoto ou histórico de releases estabelecido nesta entrega.

## 3. Estrutura de diretórios

A pasta raiz é `ong-esperanca-solidaria`.

| Caminho | Finalidade |
| --- | --- |
| `html/index.html` | Apresentação da ONG, missão e contatos fictícios. |
| `html/projetos.html` | Projetos sociais, voluntariado e campanhas de doação. |
| `html/cadastro.html` | Formulário completo com regras nativas de preenchimento e envio demonstrativo. |
| `html/componentes.html` | Demonstração estilizada de cards, badges, alertas, formulário, modal e toast. |
| `css/componentes.css` | Design System, layout e estilos da página de componentes. |
| `js/componentes.js` | Eventos e interações da página de componentes. |
| `imagens/acao-social.jpg` e `.webp` | Ilustração de distribuição de alimentos. |
| `imagens/voluntariado.jpg` e `.webp` | Ilustração de organização de materiais educativos. |
| `imagens/doacoes.jpg` e `.webp` | Ilustração de alimentos, roupas e livros para doação. |
| `CAPTURAS.txt` | Roteiro para produzir as evidências visuais. |
| `README.md` | Documentação de execução, implementação, testes e planejamento. |

O CSS e o script externos de componentes estão vinculados somente a `componentes.html`. As três páginas originais não receberam esse tema. O formulário de `cadastro.html` ainda possui um pequeno script interno para impedir o envio real. A separação integral dos scripts é uma tarefa pendente.

## 4. Pré-requisitos

- Navegador com JavaScript habilitado e suporte ao elemento `dialog` e ao método `showModal()`.
- Todos os arquivos extraídos, preservando a estrutura de pastas.
- Opcional: Python 3 para servir os arquivos por HTTP local.
- Opcional: Node.js para conferir a sintaxe JavaScript.

Python é opcional para o servidor local. Node.js 22 ou superior e NPM são necessários para gerar a build, mas não para executar os arquivos finais no navegador.

## 5. Instalação e execução local

### Opção A — abrir os arquivos diretamente

1. Baixe o ZIP do projeto e extraia todo o conteúdo.
2. Localize a pasta `ong-esperanca-solidaria`.
3. Abra `html/index.html` para consultar as páginas institucionais.
4. Abra `html/componentes.html` para acessar a demonstração interativa.
5. Mantenha `html`, `css`, `imagens` e `js` no mesmo nível. Abrir somente um HTML isolado ou diretamente dentro do ZIP pode impedir o carregamento dos recursos.

Para abrir os fontes diretamente, não é necessário instalar dependências. Para gerar a versão de produção, siga a seção 8.

### Opção B — servidor HTTP local

Se Python 3 estiver instalado, abra um terminal dentro da pasta raiz do projeto e execute:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

No Windows, se o comando disponível for o launcher do Python:

```powershell
py -3 -m http.server 8000 --bind 127.0.0.1
```

Acesse:

- [Página inicial](http://127.0.0.1:8000/html/index.html)
- [Componentes interativos](http://127.0.0.1:8000/html/componentes.html)

Use `Ctrl+C` no terminal para encerrar o servidor. Esse servidor serve os arquivos estáticos e não processa cadastros. Quando os módulos ES6 forem integrados, utilize a execução por HTTP em vez de `file://`.

## 6. Funcionalidades implementadas

### Páginas institucionais

- Navegação entre documentos HTML independentes.
- Hierarquia de títulos e regiões semânticas.
- Imagens com alternativas textuais e versões JPEG/WebP.
- Formulário com labels, fieldsets e legends.
- Regras nativas como `required`, `type`, `maxlength` e `pattern`.

Os padrões de CPF, telefone e CEP verificam formatação. Não confirmam existência, titularidade ou dígitos verificadores do CPF. O cadastro não é enviado nem armazenado.

### Página de componentes

- Cards com categorias e estados indicados por badges.
- Alerta informativo sobre o caráter demonstrativo do projeto.
- Verificação de preenchimento e formato do e-mail no evento `submit`.
- Mensagem de erro, `aria-invalid`, associação por `aria-describedby` e foco no campo.
- Remoção do resultado anterior durante a digitação.
- Alerta de preenchimento válido e toast com fechamento manual.
- Modal aberto com `showModal()` e fechado por seus botões ou pelo comportamento nativo de Escape.
- Listener de fechamento para devolver o foco ao botão de abertura.

Esses comportamentos estão presentes no código; a execução visual completa ainda precisa ser confirmada em navegador local.

## 7. Design System e responsividade

O arquivo `componentes.css` centraliza oito cores: `#205C3B`, `#143D28`, `#A44228`, `#E9B44C`, `#FFFFFF`, `#F5F7F5`, `#52605A` e `#18251E`. Tons adicionais apoiam bordas e fundos de feedback.

A escala tipográfica define `0.875rem`, `1rem`, `1.25rem`, `1.75rem` e `2.5rem`. Os espaçamentos usam múltiplos de `0.5rem`, equivalentes a 8 px quando a fonte raiz é 16 px.

A página de componentes utiliza Grid de 12 colunas na estrutura principal e Flexbox nos alinhamentos internos. Há breakpoints de 480, 768, 1024, 1280 e 1536 px. Em telas amplas, a área de projetos ocupa oito colunas e o painel do formulário ocupa quatro.

Botões possuem estilos de hover, foco visível, pressionamento e indisponibilidade. A preferência `prefers-reduced-motion` reduz os efeitos de movimento. Esses recursos não representam certificação de acessibilidade; contraste, ampliação, teclado e leitura assistiva devem ser testados.

## 8. Build e verificações técnicas

A build foi configurada em `scripts/build.mjs`, com dependências de versões exatas e `package-lock.json`. Na raiz do projeto, execute:

```bash
npm ci
npm run build
```

O esbuild agrupa e minifica CSS e JavaScript com `bundle: true`, `minify: true`, `platform: browser`, `target: es2020` e saída IIFE para os scripts clássicos. A estrutura `css` e `js` é preservada em `dist`. Não são produzidos sourcemaps públicos.

O html-minifier-terser processa as quatro páginas, remove comentários e compacta espaços de modo conservador, preservando separações de palavras, aspas de atributos e tags. Também minifica CSS e JS internos. As imagens já otimizadas são copiadas sem recompressão.

A pasta `dist` é recriada a cada build; não edite seus arquivos manualmente. Os fontes são preservados. `dist/index.html` encaminha para `html/index.html`, permitindo abrir a raiz após uma futura publicação. O arquivo `relatorio-build.json` registra os tamanhos antes e depois.

Resultado desta execução: HTML, CSS e JS passaram de **29.924 para 27.160 bytes**, redução de **9,24%**. O total não inclui imagens nem o novo encaminhamento da raiz. Isso não mede compressão HTTP ou velocidade real de carregamento.

Para conferir a produção com Python 3:

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Abra [a versão de produção local](http://127.0.0.1:8000/) e [os componentes](http://127.0.0.1:8000/html/componentes.html). Encerrar: Ctrl+C.

Foram verificados os links e recursos locais gerados, a preservação de IDs e atributos dos controles e a sintaxe dos scripts minificados. A build não substitui os testes visuais e comportamentais pendentes. Não há suíte `npm test` nem deploy realizado. `0.1.0` no pacote é um identificador de desenvolvimento, não uma release ou tag Git criada.

Com Node.js disponível, execute na raiz do projeto:

```bash
node --check js/componentes.js
```

Esse comando verifica somente a sintaxe do script. Não executa o DOM, não testa a interface e não substitui os testes abaixo.

Na etapa inicial, `index.html`, `projetos.html` e `cadastro.html` foram verificados com o Nu HTML Checker, que retornou uma lista vazia de mensagens. Esse resultado se refere à versão analisada naquele momento, não a alterações futuras ou à página posterior de componentes.

Para repetir a validação, envie cada arquivo ao [Nu HTML Checker do W3C](https://validator.w3.org/nu/). Ao enviar apenas HTML, o relatório pode não resolver as imagens referenciadas por caminhos locais. Confira separadamente o resumo de erros e avisos.

Na página de componentes, foram conferidos sintaxe JavaScript, identificadores, associações e referências locais. A abertura no navegador remoto foi bloqueada pela política de segurança do ambiente. Não foram produzidas capturas nem confirmados os testes comportamentais nessa sessão.

## 9. Roteiro de testes manuais

Os resultados esperados abaixo são critérios a verificar, não testes já aprovados.

| Ação | Resultado esperado |
| --- | --- |
| Abrir as quatro páginas | Conteúdo e recursos locais carregam sem referências quebradas. |
| Validar interesse com e-mail vazio | Mensagem de erro, campo destacado e foco no e-mail. |
| Digitar `teste` e validar | Mensagem de formato inválido. |
| Digitar `pessoa@example.com` e validar | Alerta de preenchimento válido e toast, sem envio de dados. |
| Alterar o e-mail após validação | Resultado anterior e toast são removidos. |
| Fechar o toast | Notificação desaparece e foco volta ao botão do formulário. |
| Clicar em “Como contribuir” | Modal abre sobre fundo escurecido. |
| Fechar pelo botão ou por Escape | Modal fecha e foco retorna ao botão de abertura. |
| Navegar com Tab e Shift+Tab | Foco perceptível e sequência coerente; conferir contenção no modal. |
| Redimensionar próximo a cada breakpoint | Conteúdo se reorganiza sem cortes nem rolagem horizontal indevida. |
| Ampliar o conteúdo a 200% | Textos e controles continuam utilizáveis. |
| Testar cadastro com CPF ou CEP fora do padrão | Validação nativa impede a submissão demonstrativa. |

Use Console para exceções, Network para recursos que falham e pontos de interrupção para acompanhar os eventos. Registre passos de reprodução, resultado esperado, resultado obtido e correção. Repita o cenário após cada ajuste.

Para as capturas exigidas, consulte `CAPTURAS.txt`: badges, alerta de erro, sucesso com toast e modal aberto.

## 10. Arquitetura futura e limitações

Ainda precisam ser implementados e testados:

- Integração do Design System às três páginas originais.
- Menu hambúrguer e submenu responsivo.
- Roteamento SPA e templates dinâmicos.
- Persistência de preferências com `localStorage` e tratamento de dados inválidos.
- Validação personalizada dos demais campos e consistência do CPF e da data de nascimento.
- Modularização com `import` e `export`.
- Testes completos de navegação e acessibilidade.

A divisão proposta é `app.js`, `roteador.js`, `templates.js`, `validacao.js`, `armazenamento.js` e `feedback.js`. Esses arquivos ainda não existem nesta entrega. O armazenamento futuro deverá priorizar preferências, sem guardar dados pessoais sensíveis.

## 11. Versionamento e contribuição — planejamento

GitFlow ainda não foi aplicado ao projeto. Não há commits, pull requests, issues, milestones ou releases comprovados nesta entrega.

| Branch prevista | Responsabilidade |
| --- | --- |
| `main` | Versões estáveis revisadas. |
| `develop` | Integração das alterações da próxima versão. |
| `feature/*` | Funcionalidades isoladas, criadas a partir de `develop`. |
| `release/*` | Preparação do lançamento; integração final em `main` e `develop`. |
| `hotfix/*` | Correção urgente a partir de `main`, também incorporada a `develop`. |

Fluxo previsto: registrar uma issue com critérios de conclusão, criar a branch adequada, implementar, testar e abrir um PR explicando problema, mudanças e resultados. Fazer merge após revisão. Não criar branches temporárias vazias apenas para representar o modelo.

### Conventional Commits

Exemplos de mensagens propostas, ainda não registradas:

```text
feat(html): adiciona páginas institucionais e cadastro
feat(css): adiciona estilos aos componentes de feedback
feat(js): implementa validação demonstrativa e controle de feedback
docs(readme): documenta execução e limitações do projeto
```

Use `fix` para correções reais e `refactor` para reorganização sem adição de funcionalidade. Cada commit deve representar uma mudança coerente, sem inventar histórico de desenvolvimento.

### Releases

A convenção prevista é `MAJOR.MINOR.PATCH`: mudanças incompatíveis no contrato público, novas funcionalidades compatíveis e correções compatíveis, respectivamente. Durante o desenvolvimento inicial, poderá ser adotada `v0.1.0`; `v1.0.0` ficará reservada ao cumprimento dos requisitos e dos testes definidos. Nenhuma dessas tags foi criada.

## 12. Créditos e uso acadêmico

As imagens foram geradas com auxílio de inteligência artificial para o projeto, sem fotografias de referência fornecidas da internet, e disponibilizadas em versões JPEG e WebP. A organização e os contatos apresentados são fictícios.

Este material tem finalidade acadêmica. Nenhuma licença de distribuição foi definida; antes de uma publicação para reutilização por terceiros, essa escolha deverá ser documentada.


## 13. Alto contraste — implementado

As quatro páginas carregam `css/alto-contraste.css` e `js/tema.js`. O botão “Alto contraste” alterna o atributo `data-tema` no HTML e atualiza `aria-pressed`. O tema usa branco sobre preto (21:1) e amarelo sobre preto (19,56:1); botões selecionados usam preto sobre amarelo (19,56:1). Esses valores são cálculos das cores declaradas, não uma auditoria completa da renderização ou certificação WCAG.

A preferência é salva em `ong.tema.v1` no localStorage, restaurada no início e sincronizada entre abas da mesma origem. Falhas de acesso não impedem a troca do tema. Use HTTP local para comportamento consistente de persistência entre páginas; o armazenamento em file:// depende do navegador. Nenhum dado do formulário é armazenado.

O CSS cobre texto, links, campos, cartões, badges, alertas, toast, modal e foco. Imagens não recebem filtros. Erros e sucesso mantêm mensagens e sinais além da cor. O botão é nativo, com nome fixo, operação por teclado e estado pressionado acessível. Sem JavaScript, o botão fica oculto e o tema padrão permanece.

Teste manual pendente: alternar e restaurar o tema, recarregar, navegar entre páginas, abrir o modal e conferir foco, mensagens e aparência em todas as telas. O bloqueio anterior do navegador remoto não foi contornado.


## 14. Publicação GitHub Pages — configuração preparada

O workflow `.github/workflows/pages.yml` executa em pushes na branch main ou manualmente. Instala as dependências com npm ci, gera dist e publica esse artefato usando GitHub Actions. A configuração segue as ações oficiais documentadas em https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages .

Ainda não houve execução no GitHub: falta conectar a conta, criar o repositório, enviar os arquivos e selecionar GitHub Actions em Settings > Pages > Source. Os arquivos package.json e package-lock.json devem ficar na raiz do repositório, junto de html, css, js, imagens, scripts e .github. Não envie node_modules. A pasta .github precisa ser incluída mesmo sendo oculta no gerenciador de arquivos.

Após o workflow concluir, verificar o endereço retornado pelo deploy. Não há URL pública confirmada nesta entrega.
