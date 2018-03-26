let usuario = require('express').Router();

let usuarioCtrl = require('./../controllers/usuario');

usuario.get('/', usuarioCtrl.getPersonas);
usuario.get('/:idPersona', usuarioCtrl.getPersona);

usuario.get('/name/:usuario', usuarioCtrl.getPersonaByName);

usuario.post('/', usuarioCtrl.newPersona);

module.exports = usuario;