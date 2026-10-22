
require("dotenv").config();

const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conexion.connect((error) => {
  if (error) {
    console.error("Error de conexión a MySQL:", error.message);
  } else {
    console.log("Conexión exitosa a MySQL");
  }
});

module.exports = conexion;
