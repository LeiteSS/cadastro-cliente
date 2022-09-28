// db.js
async function connect() {
  if(global.connection && global.connection.state !== 'disconnected') return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://root:root@loclhost:3306/webii");
  global.connection = connection;

  return connection;
}

async function selectUsuario() {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM usuario;');

  return rows;
}

module.exports = {selectUsuario}