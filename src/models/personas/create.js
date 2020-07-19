function create(conexion, data, callback) {
  console.log(data);
  conexion.query(
    "insert into personas (id_persona,nombre,dni,apellido,edad) values (?,?,?,?,?)",
    [data.id_persona, data.nombre, data.dni, data.apellido, data.edad],
    callback
  );
}

module.exports = create;
