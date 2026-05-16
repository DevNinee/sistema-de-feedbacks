
## Projeto Nodejs com Express desenvolvido para atividade academica. 
## Desenvolvido por Erick Ferreira.

# Sistema de Coleta de Feedbacks

Este projeto nasceu de uma necessidade acadêmica: criar uma aplicação funcional para captar as percepções dos alunos sobre um curso de forma prática e direta. Ele foi construído utilizando Node.js e o framework Express, servindo como uma porta de entrada para entender como a comunicação entre o navegador e um servidor realmente acontece.

## Por que este projeto foi construído assim?

Ao desenvolver este sistema, priorizei a simplicidade e a experiência de quem vai usar, tanto o aluno que envia o feedback quanto o administrador que o lê. Abaixo, explico as escolhas técnicas e os benefícios de cada uma:

### Node.js e Express.js
Escolhi o Node.js com Express pela agilidade. O Express é extremamente leve e permite criar rotas de forma muito intuitiva. Para um projeto que lida com requisições de formulários (POST) e exibição de páginas (GET), ele é uma das ferramentas mais eficientes que existem hoje, além de ter uma comunidade gigante.

### Armazenamento em Memória
Para cumprir os requisitos da atividade, os dados são armazenados em um array (memória RAM). O benefício disso é a velocidade instantânea de resposta e a simplicidade do código, já que não precisamos configurar um banco de dados externo para um protótipo inicial. Isso permite focar inteiramente na lógica das rotas e na validação dos dados.

### Tailwind CSS e Design
Mesmo sendo uma aplicação acadêmica, decidi usar o Tailwind CSS. O benefício é ter um visual profissional e limpo sem precisar escrever centenas de linhas de CSS puro. Isso garantiu que a tela de feedbacks fosse centralizada e responsiva, funcionando bem tanto no computador quanto no celular.

### Interatividade e UX (Experiência do Usuário)
Adicionei pequenas funções em JavaScript para tornar o uso mais fluido:
- O uso de botões de emoji que preenchem o texto ajuda o aluno a expressar seu sentimento mais rápido.
- A configuração para enviar o formulário ao apertar a tecla "Enter" torna o processo de escrita muito mais natural, lembrando o comportamento de aplicativos de conversa modernos.

---

## Como instalar e testar o projeto

1. Tenha o Node.js instalado em seu computador.
2. Clone o repositório em sua máquina.
3. No terminal, dentro da pasta do projeto, instale as dependências com o comando:
   npm install
4. Inicie o servidor com o comando:
   node server.js
5. Abra o navegador e acesse: http://localhost:3000

---

## Detalhes Técnicos da Atividade

Este projeto seguiu rigorosamente os requisitos solicitados, incluindo:
- Processamento de dados via rotas POST para garantir a segurança das informações enviadas.
- Redirecionamentos automáticos para facilitar a navegação do usuário.
- Uma interface dedicada para listagem e exclusão de feedbacks, demonstrando o ciclo completo de um dado no sistema (criação, leitura e deleção).

## Próximos Passos e Evolução

Embora o projeto cumpra seu papel atual como uma ferramenta de aprendizado em memória, o próximo passo lógico para sua evolução será a implementação de um **banco de dados persistente**  penso em MongoDB ou PostgreSQL. Isso trará o benefício de manter as informações salvas mesmo após o servidor ser reiniciado, permitindo que meu sistema escale e suporte um volume muito maior de dados com total segurança.
Hospedagem no Render, já pensando na possibilidade de se tornar um projeto a longo prazo.


