function getAlls(conexion, callback) {
  conexion.query(`SELECT * FROM personas`, callback);
}

module.exports = getAlls;
