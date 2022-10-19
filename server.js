const express = require("express");
const db = require('./model/data/db.js');

const app = express();

/*
  * ROTA GET: para retornar dados
*/
app.get("/", function(req, resp) {
  resp.send("Bem vindo ao app");
})

/*
  * ROTA GET: para retornar contatos
*/
app.get("/contatos", function(req, resp) {
  resp.send("Pagina de contatos do app!");
})

/*
  * ROTA GET: para retornar produtos
*/
app.get("/produtos", function(req, resp) {
  resp.send("Pagina de produtos do app!");
});

// select
const select = db.selectUsuario();
console.log(select);

// insert
const insert = db.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
console.log(insert);

// delete
const deleta = db.deleteUsuario(1);
console.log(deleta);

// update
const update = db.updateUsuario(1, {nome: "Zero", senha: "hhjdhjjdsd7368"});
console.log(update);

// esta sempre deve ser a ultima linha quando usamos o express
app.listen(8081, function() {
  console.log("Servidor funcionando na url http://localhost:8081");
});

// usar nodemon index.js