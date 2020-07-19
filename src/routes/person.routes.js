const express = require("express");
const rutas = express.Router();
const {
  createPerson,
  getPerson,
  deletePerson,
  getAllsPerson,
  updatePerson,
} = require("../controllers/personas/personController");

rutas.post("/", createPerson);

rutas.get("/", getAllsPerson);

rutas.get("/:id", getPerson);

rutas.delete("/:id", deletePerson);

rutas.put("/:id", updatePerson);

module.exports = rutas;
