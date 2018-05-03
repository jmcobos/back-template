let usuario = require('./../models/usuario');

exports.getUsuarios = function(peticion, respuesta) {
  usuario.find({}, function(error, entidad) {
    if (error)
      return respuesta.status(500).json({ Mensaje: error.message });
    if (!entidad)
      return respuesta.status(404).json({ Mensaje: "Usuarios no encontrados."});
    respuesta.status(200).json(entidad);
  });
};

exports.getUsuarioById = function(request, respuesta) {
  usuario.findById(request.params.idPersona, function(error, entidad) {
    if (error)
      return respuesta.status(500).json({ Mensaje: error.message });
    if (!entidad)
      return respuesta.status(404).json({ Mensaje: "Usuario no encontrado."});
    respuesta.status(200).json(entidad);
  });
};

exports.getUsuarioByName = function(request, respuesta) {
    usuario.findOne({ usuario: request.params.usuario }, function(error, entidad) {
    if (error)
      return respuesta.status(500).json({ Mensaje: error.message });
    if (!entidad)
      return respuesta.status(404).json({ Mensaje: "Usuario no encontrado."});
    respuesta.status(200).json(entidad);
  });
};

exports.postUsuario = function(request, respuesta) {
  var nuevo_usuario = new usuario(request.body);
  nuevo_usuario.save(function(error, entidad) {
    if (error)
      return respuesta.status(500).json({ Mensaje: error.message });
    if (!entidad)
      return respuesta.status(404).json({ Mensaje: "Usuario no creado."});
    respuesta.status(200).json(entidad);
  });
};

exports.putUsuario = function(request, respuesta) {
  usuario.findByIdAndUpdate(request.params.idPersona, request.body, function(error, entidad) {
    if (error)
      return respuesta.status(500).json({ Mensaje: error.message });
    if (!entidad)
      return respuesta.status(404).json({ Mensaje: "Usuario no actualizado."});
    respuesta.status(200).json(entidad);
  });
};

exports.deleteUsuario = function(request, respuesta) {
  usuario.findByIdAndRemove(request.params.idPersona, function (error, entidad) {
    if (error)
      return respuesta.status(500).send(error);
    respuesta.status(200).send("Usuario " + usuario.nombre + " ha sido borrado.");
  });
};

// GETS A SINGLE USER FROM THE DATABASE
exports.getById = function (req, res) {
    usuario.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
};

exports.put = function (req, res) {
    usuario.findByIdAndUpdate(req.params.idPersona, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
};