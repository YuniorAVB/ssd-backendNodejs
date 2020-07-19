const mysql = require("mysql");
const config = require("../config/config");

const conexion = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.DB_PORT,
});

conexion.connect((error) => {
  if (error) {
    console.log("DB ERROR", error);
    process.exit();
    return;
  }

  console.log("DB CONNECT");
});

module.exports = conexion;
