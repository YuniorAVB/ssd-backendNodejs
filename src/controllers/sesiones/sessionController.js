const conexion = require("../../database/database");
const { v4: uuidv4 } = require("uuid");

const create = require("../../models/sesiones/create");
const get = require("../../models/sesiones/get");
const destroy = require("../../models/personas/destroy");
const update = require("../../models/personas/update");

function createSession(req, res) {
  const { usuario, contrasenia, id_persona } = req.body;

  create(
    conexion,
    { id_sesion: uuidv4(), usuario, contrasenia, id_persona },
    function (error) {
      if (error) {
        res.json({ message: "fail", state: false });
        return;
      }
      res.json({ message: "success", state: true });
    }
  );
}

function getSession(req, res) {
  const id_sesion = req.params.id;

  get(conexion, id_sesion, function (error, fields) {
    if (error) {
      res.json({ message: "fail", state: false });
      return;
    }
    res.json({ message: "success", state: true, data: fields });
  });
}

module.exports = {
  createSession,
  getSession
};
