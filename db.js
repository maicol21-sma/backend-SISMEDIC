
require("dotenv").config();

const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },
});

conexion.connect((error) => {
  if (error) {
    console.error("Error de conexión a MySQL:", error.message);
  } else {
    console.log("Conexión exitosa a MySQL");
  }
});

module.exports = conexion;
