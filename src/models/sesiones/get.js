function get(conexion, id_sesion, callback) {
  conexion.query(
    "SELECT * FROM sesiones where id_sesion like ?",
    [id_sesion],
    callback
  );
}

module.exports = get;
