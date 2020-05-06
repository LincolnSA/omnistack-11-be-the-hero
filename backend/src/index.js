/* 
    index, primeiro arquivo a ser chamado na aplicação
    contendo todas as configurações do servidor express
    como definir o body com json, habilitar acesso as
    demais aplicações com cors e aqui também pode ser
    feita a conexão com os demais banco de dados

*/

const express = require('express');
const routes = require("./routes");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => { console.log("Servidor ON, http://localhost:3333") });