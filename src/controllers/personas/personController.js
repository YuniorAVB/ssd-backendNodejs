const conexion = require("../../database/database");
const { v4: uuidv4 } = require("uuid");

const create = require("../../models/personas/create");
const get = require("../../models/personas/get");
const destroy = require("../../models/personas/destroy");
const getAlls = require("../../models/personas/getAlls");
const update = require("../../models/personas/update");

function createPerson(req, res) {
  const { nombre, dni, apellido, edad } = req.body;
  create(
    conexion,
    { id_persona: uuidv4(), nombre, dni, apellido, edad },
    function (error, fields) {
      if (error) {
        res.json({ message: "fail", state: false });
        return;
      } else {
        res.json({ message: "success", state: true });
      }
    }
  );
}

function getPerson(req, res) {
  const id_persona = req.params.id;
  get(conexion, id_persona, function (error, fields) {
    if (error) {
      res.send({ message: "fail", state: false });
      return;
    }
    res.send({ message: "success", state: true, data: fields });
  });
}

function deletePerson(req, res) {
  const id_persona = req.params.id;
  destroy(conexion, id_persona, function (error, fields) {
    if (error) {
      res.send({ message: "fail", state: false });
      return;
    }
    res.send({ message: "success", state: true, data: fields });
  });
}

function getAllsPerson(req, res) {
  getAlls(conexion, function (error, fields) {
    if (error) {
      res.send({ message: "fail", state: false });
      return;
    }
    res.send({ message: "success", state: true, data: fields });
  });
}

function updatePerson(req, res) {
  const { nombre, apellido, dni, edad } = req.body;

  const id_persona = req.params.id;

  update(conexion, { id_persona, nombre, apellido, dni, edad }, function (
    error,
    fields
  ) {
    if (error) {
      console.log(error)
      res.send({ message: "fail", state: false });
      return;
    }
    res.send({ message: "success", state: true, data: fields });
  });
}

module.exports = {
  createPerson,
  getPerson,
  deletePerson,
  getAllsPerson,
  updatePerson,
};
