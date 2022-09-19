const mysql = require("mysql");

const oMySQLConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pnl",
});

module.exports = oMySQLConnection;
