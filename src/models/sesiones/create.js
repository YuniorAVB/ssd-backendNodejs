function create(conexion, data, callback) {
  conexion.query(
    "insert into sesiones (id_sesion,usuario,contrasenia,id_persona) values (?,?,?,?)",
    [data.id_sesion, data.usuario, data.contrasenia, data.id_persona],
    callback
  );
}

module.exports = create;
