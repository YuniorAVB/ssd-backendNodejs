const express = require("express");
const rutas = express.Router();
const {
  createSession,
  getSession,
} = require("../controllers/sesiones/sessionController");

rutas.post("/", createSession);

rutas.get("/:id", getSession);

module.exports = rutas;
