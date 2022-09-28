/*var http = require('http');
console.log(http);

http.createServer().listen(8081);
console.log("O servidor está funcionando");*/

const express = require("express");

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
const select = await db.selectUsuario();
console.log(select);

// insert
const insert = await db.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
console.log(insert);

// delete
const deleta = await db.deleteUsuario(1);
console.log(deleta);

// esta sempre deve ser a ultima linha quando usamos o express
app.listen(8081, function() {
  console.log("Servidor funcionando na url http://localhost:8081");
});

// usar nodemon index.js