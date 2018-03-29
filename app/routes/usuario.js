let express = require('express');
let usuario = express.Router();

let usuarioCtrl = require('./../controllers/usuario');
let authorize = require('./../../config/middlewares/auth');

usuario.route('/').get(authorize.isLoggedIn, usuarioCtrl.getPersonas);
usuario.route('/').post(usuarioCtrl.newPersona);
usuario.route('/:idPersona').get(authorize.isLoggedIn, usuarioCtrl.getPersona);
usuario.route('/name/:usuario').get(usuarioCtrl.getPersonaByName);

module.exports = usuario;