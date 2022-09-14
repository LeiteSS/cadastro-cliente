/*var http = require('http');
console.log(http);

http.createServer().listen(8081);
console.log("O servidor está funcionando");*/

const express = require("express");

const app = express();

app.listen(8081, function() {
  console.log("Servidor funcionando na url http://loclahost:8081");
})