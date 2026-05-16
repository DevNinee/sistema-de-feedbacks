# Guia de Estudos: O que este projeto nos ensina sobre Node.js?

Este projeto de coleta de feedbacks parece simples por fora, mas por baixo dos panos ele utiliza diversos conceitos fundamentais do **Node.js** e do **Express.js** que são usados todos os dias por programadores experientes.

Abaixo, detalhamos cada conceito apresentado neste projeto e quais são as melhores práticas associadas a eles.

---

## 1. O que é o Express.js?
No topo do seu \`server.js\`, você importa e inicia o Express:
\`\`\`javascript
const express = require('express');
const app = express();
\`\`\`
**Conceito:** O Node.js sozinho não sabe lidar com a internet (rotas, sites, links) de forma simples. O **Express** é um "framework" (um pacote de ferramentas) que ensina o Node.js a criar um servidor web capaz de ouvir requisições do navegador e devolver sites de forma incrivelmente fácil.
**Melhor Prática:** Sempre separe a porta do seu servidor em uma variável (\`const port = 3000;\`) para facilitar a troca quando for publicar (fazer o deploy) do seu site no futuro.

---

## 2. Servindo Arquivos Estáticos (Frontend)
\`\`\`javascript
app.use(express.static('public'));
\`\`\`
**Conceito:** Arquivos como \`index.html\`, \`style.css\` e imagens não mudam sozinhos, eles são estáticos. Usar o \`express.static\` diz ao servidor: *"Se o usuário pedir uma imagem ou o CSS, procure dentro da pasta chamada public e entregue pra ele"*.
**Melhor Prática:** Nunca misture o código do servidor (backend, como o \`server.js\`) na mesma pasta dos arquivos visuais (frontend). O projeto respeita isso muito bem isolando o HTML e o CSS na pasta \`/public\`.

---

## 3. Middlewares e Leitura de Formulários
\`\`\`javascript
app.use(express.urlencoded({ extended: true }));
\`\`\`
**Conceito:** *Middlewares* são como "guardas de trânsito" que ficam entre o navegador e o seu servidor. Quando o usuário clica em "Enviar", os dados viajam pela internet em um formato cru. O \`urlencoded\` intercepta essa viagem, traduz os dados do formulário e coloca eles mastigadinhos dentro de uma variável mágica chamada \`req.body\`.

---

## 4. O Padrão Request & Response (\`req\`, \`res\`)
Em toda rota, você vê uma função como \`(req, res) => { ... }\`:
*   **\`req\` (Request/Requisição):** É tudo o que o usuário **enviou** para você (ex: o formulário digitado no \`req.body\`, o navegador que ele está usando, etc).
*   **\`res\` (Response/Resposta):** É a ferramenta que você usa para **devolver** algo para o usuário.
    *   \`res.sendFile()\`: Devolve um arquivo HTML pronto.
    *   \`res.send()\`: Devolve um texto ou um código HTML montado na hora.
    *   \`res.redirect()\`: Força o navegador do usuário a ir para outro link.

---

## 5. Rotas: A diferença entre GET e POST
*   **GET (\`app.get\`)**: É usado apenas para **buscar e visualizar** informações. Quando você digita uma URL no navegador, você faz um GET. Exemplo: Ver a página inicial, ver a lista de feedbacks.
*   **POST (\`app.post\`)**: É usado para **enviar ou modificar** dados no servidor. Exemplo: Cadastrar um novo feedback ou pedir para remover um feedback do sistema.
**Melhor Prática:** Nunca use uma rota GET para deletar coisas. Se um navegador decidir recarregar um GET, ele pode acabar apagando seus dados por acidente. Deletar coisas deve ser sempre via POST ou DELETE! O seu projeto fez isso certinho na rota \`/feedbacks/remover\`.

---

## 6. Armazenamento em Memória (Arrays)
\`\`\`javascript
let feedbacks = [];
\`\`\`
**Conceito:** O projeto atual armazena os dados em uma variável. Isso significa que eles vivem na memória RAM (temporária) do computador onde o Node.js está rodando.
*   **Ponto Positivo:** É muito rápido e fácil para testar e aprender.
*   **Ponto Negativo (Por que usamos Bancos de Dados na vida real?):** Quando o comando \`node server.js\` é reiniciado, tudo é apagado. Em um projeto real para milhares de pessoas, nós trocaríamos essa linha por uma conexão com um banco de dados real (como PostgreSQL, MySQL ou MongoDB) para que os dados fiquem guardados para sempre no HD.

---

## 7. Renderização do Lado do Servidor (SSR Simplificado)
Na rota \`/feedbacks/lista\`, nós usamos o Node.js para misturar o HTML com dados reais do sistema usando Template Literals (\`\${fb.nome}\`).
**Conceito:** Isso significa que a página que o usuário vê é literalmente "fabricada" e costurada dentro do seu \`server.js\` milissegundos antes de ser enviada pela rede. Isso é muito bom para SEO (Google) e garante que todos os usuários vejam exatamente a mesma lista.

---

## Conclusão e Resumo de Melhores Práticas Aplicadas:
1.  **Código Limpo:** O projeto removeu lixos e comentários irrelevantes.
2.  **Separação por Responsabilidade:** O Backend fica no \`server.js\`, o CSS no \`style.css\` e o esqueleto no \`index.html\`.
3.  **Segurança e Verificação:** Na rota de envio, foi criado um \`if (nome && comentario)\` para garantir que o sistema não salve feedbacks vazios caso o formulário quebre.
4.  **UX Inteligente:** Uso de redirecionamentos (\`res.redirect\`) lógicos para não deixar o usuário perdido em uma tela em branco após enviar um comentário.

Guarde este guia para futuras consultas! Ele é a base para 90% de todo o desenvolvimento web moderno usando Node.js.
