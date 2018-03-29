let usuario = require('./../models/usuario');

exports.getPersonas = function(req, res) {
  usuario.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.getPersonaByName = function(req, res) {
    usuario.findOne({ usuario: req.params.usuario }, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.crearUsuario = function(req, res) {
  var new_task = new usuario(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.getPersona = function(req, res) {
  usuario.findById(req.params.idPersona, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.updatePersona = function(req, res) {
  usuario.findOneAndUpdate({_id: req.params.idPersona}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deletePersona = function(req, res) {
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

// RETURNS ALL THE USERS IN THE DATABASE
exports.getAll = function (req, res) {
    usuario.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
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

