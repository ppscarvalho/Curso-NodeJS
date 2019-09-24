var mysql = require("mysql");

var connMySql = function(){
  console.log('Conexao com bd foi estabelecida');
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "portal_noticias"
  });
};

module.exports = function() {
  return connMySql;
};
