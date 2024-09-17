const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASS || "root",
  database: process.env.MYSQL_DATABASE || "fullcycle",
});

module.exports = db;
