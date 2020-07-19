function get(conexion, id_persona, callback) {
  conexion.query(
    `select * from personas where id_persona like ?`,
    [id_persona],
    callback
  );
}

module.exports = get;
