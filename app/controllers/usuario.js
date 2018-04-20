let usuario = require('./../models/usuario');

exports.getUsuarios = function(peticion, respuesta) {
  usuario.find({}, function(error, usuarios) {
    if (error) 
      respuesta.status(500).send(error);
    respuesta.status(200).send(usuarios);
  });
};

exports.getUsuarioById = function(request, response) {
  usuario.findById(req.params.idPersona, function(err, usuario) {
    if (error)
      return response.send(error);
    response.json(usuario);
  });
};

if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);

exports.getUsuarioByName = function(req, res) {
    usuario.findOne({ usuario: req.params.usuario }, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.createUsuario = function(req, res) {
  var new_task = new usuario(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.updateUsuario = function(req, res) {
  usuario.findOneAndUpdate({_id: req.params.idPersona}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deleteUsuario = function(req, res) {
  usuario.remove({
    _id: req.params.idPersona
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Persona eliminada correctamente' });
  });
};

// CREATES A NEW USER
exports.newPersona = function (req, res) {
    usuario.create({
      usuario: req.body.usuario,
      password: req.body.password,
      correo: req.body.correo,
      nombre : req.body.nombre,
      apellido_01 : req.body.apellido_01,
      apellido_02 : req.body.apellido_02
    }, 
    function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information to the database." + err);
        res.status(200).send(user);
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

// DELETES A USER FROM THE DATABASE
exports.delete = function (req, res) {
    usuario.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
    });
};

// UPDATES A SINGLE USER IN THE DATABASE
exports.put = function (req, res) {
    usuario.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
};

