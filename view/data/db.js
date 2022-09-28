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

async function insertUsuario(usuario) {
  const conn = await connect();
  const sql = 'INSERT INTO usuario(nome, senha) VALUES (?, ?);';
  const values = [usuario.nome, usuario.senha];

  return await conn.query(sql, values);
}

async function deleteUsuario(id) {
  const conn = await connect();
  const sql = 'DELETE FROM usuario where id=?;';

  return await conn.query(sql, [id]);
}

module.exports = {selectUsuario, insertUsuario}