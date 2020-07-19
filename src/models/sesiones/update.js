function update(conexion, data, callback) {
  conexion.query(
    `UPDATE personas set  nombre = ?, apellido = ?, dni=?,edad=? where id_persona like ?`,
    [data.nombre, data.apellido, data.dni, data.edad, data.id_persona],
    callback
  );
}

module.exports = update;
