const express = require("express");
const app = express();
const port = 4000;

// Middleware para parsear o corpo das requisições POST
app.use(express.urlencoded({ extended: true }));

// Rota que serve a página HTML
app.get('/', (req, res) => {
    res.send(`
        <form action="/calcular-nota" method="post">
            <input type="text" name="nota1" placeholder="Digite a primeira nota" required />
            <input type="text" name="nota2" placeholder="Digite a segunda nota" required />
            <button type="submit">Calcular Nota Final</button>
        </form>
    `);
});

// Rota que recebe os dados do formulário e calcula a nota final
app.post('/calcular-nota', (req, res) => {
    const nota1 = parseFloat(req.body.nota1);
    const nota2 = parseFloat(req.body.nota2);
    const notaFinal = (nota1 + nota2).toFixed(1);
    res.send(`A nota final é: ${notaFinal}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});