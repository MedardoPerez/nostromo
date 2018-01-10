var db = require('../views/dbconnections'); //reference of dbconnection.js  
var Usuario = {
    getAllUsuario: function (callback) {
        return db.query("Select * from usuario", callback);
    },
    getUsuarioById: function (id, callback) {
        return db.query("select * from usuario where IdUsuario=?", [id], callback);
    },
    addUsuario: function (User, callback) {
        return db.query('Insert into usuario(IdUsuario,Nombre,Apellido,Correo,Password,Telefono,Estado,Activo,DescripcionTransaccion,TipoTransaccion,ModificadoPor) values(?,?,?,?,?,?,?,?,?,?,?)',
            [User.IdUsuario, User.Nombre, User.Apellido, User.Correo, User.Password, 
                User.Telefono, User.Estado, User.Activo, 
                User.DescripcionTransaccion, User.TipoTransaccion, User.ModificadoPor], callback);
    },
    deleteUsuario: function (id, callback) {
        return db.query("delete from usuariro where Id=?", [id], callback);
    },
    updateUsuario: function (id, User, callback) {
        return db.query("update usuario set Title=?,Status=? where Id=?", [User.Title, User.Status, id], callback);
    }
};
module.exports = Usuario;