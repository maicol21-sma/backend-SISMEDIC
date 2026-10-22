
const express = require("express");
const router = express.Router();

const {
  obtenerPacientes,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente,
} = require("../controllers/pacientesController");

// Consultar todos los pacientes.
router.get("/", obtenerPacientes);

// Registrar un paciente nuevo.
router.post("/", crearPaciente);

// Actualizar un paciente existente.
router.put("/:id", actualizarPaciente);

// Eliminar un paciente.
router.delete("/:id", eliminarPaciente);

module.exports = router;
