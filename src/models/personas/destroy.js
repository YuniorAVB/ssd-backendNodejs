function destroy(conexion, id_persona, callback) {
    conexion.query(
      `DELETE FROM personas where id_persona  like ?`,
      [id_persona],
      callback
    );
  }
  
  module.exports = destroy;
  