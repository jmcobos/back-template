let auth = require('./../models/auth');

exports.getAuth = function(req, res) {
    // Aquí tendría que mirar que el usuario exista en personas y que guarde el registro del log en la tabla auth.
   res.send("Hello World! - Auth");
};