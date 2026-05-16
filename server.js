const express = require('express');
const app = express();
const port = 3000;

let feedbacks = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/public/sobre.html');
});

app.post('/feedbacks/enviar', (req, res) => {
    const { nome, comentario } = req.body;
    if (nome && comentario) {
        feedbacks.push({ nome, comentario });
    }
    res.redirect('/feedbacks/lista');
});

app.get('/feedbacks/lista', (req, res) => {
    let listaHtml = '';

    feedbacks.forEach((f, index) => {
        listaHtml += `
            <div style="border: 1px solid #000; padding: 10px; margin-bottom: 10px;">
                <p><strong>Nome:</strong> ${f.nome}</p>
                <p><strong>Comentário:</strong> ${f.comentario}</p>
                <form action="/feedbacks/remover" method="POST">
                    <input type="hidden" name="index" value="${index}">
                    <button type="submit">Remover</button>
                </form>
            </div>
        `;
    });

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <h1>Feedbacks</h1>
            <section class="bloco">
                <div class="feedbacks">
                    ${feedbacks.length === 0 ? '<p>Nenhum feedback recebido.</p>' : listaHtml}
                </div> 
                <br>
                <a href="/sobre">Sobre</a> |
                <a href="/">Voltar para o formulário</a>
            </section>
        </body>
        </html>
    `);
});

app.post('/feedbacks/remover', (req, res) => {
    const index = parseInt(req.body.index, 10);
    if (!isNaN(index) && index >= 0 && index < feedbacks.length) {
        feedbacks.splice(index, 1);
    }
    res.redirect('/feedbacks/lista');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});