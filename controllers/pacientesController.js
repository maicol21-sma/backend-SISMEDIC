const db = require("../db");

// GET

const obtenerPacientes = (req, res) => {
  console.log("1. Solicitud GET /api/pacientes recibida");

  db.query("SELECT * FROM pacientes", (error, resultados) => {
    console.log("2. MySQL terminó la consulta");

    if (error) {
      console.error("Error al consultar pacientes:", error);
      return res.status(500).json({
        mensaje: "Error al consultar pacientes"
      });
    }

    console.log("3. Enviando respuesta al navegador");
    res.json(resultados);
  });
};

// POST
const crearPaciente = (req, res) => {
  const { nombre, correo, telefono, eps, genero, direccion } = req.body;

  const sql = `
    INSERT INTO pacientes
    (nombre, correo, telefono, eps, genero, direccion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [nombre, correo, telefono, eps, genero, direccion],
    (error, resultado) => {
      if (error) return res.status(500).json(error);

      res.json({
        mensaje: "Paciente creado",
      });
    }
  );
};

// PUT
const actualizarPaciente = (req, res) => {
  const id = req.params.id;

  const { nombre, correo, telefono, eps, genero, direccion } = req.body;

  const sql = `
    UPDATE pacientes
    SET nombre=?, correo=?, telefono=?, eps=?, genero=?, direccion=?
    WHERE id=?
  `;

  db.query(
    sql,
    [nombre, correo, telefono, eps, genero, direccion, id],
    (error, resultado) => {
      if (error) return res.status(500).json(error);

      res.json({
        mensaje: "Paciente actualizado",
      });
    }
  );
};

// DELETE
const eliminarPaciente = (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM pacientes WHERE id=?",
    [id],
    (error, resultado) => {
      if (error) return res.status(500).json(error);

      res.json({
        mensaje: "Paciente eliminado",
      });
    }
  );
};

module.exports = {
  obtenerPacientes,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
};