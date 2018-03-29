let express = require('express');
let usuario = express.Router();

let usuarioCtrl = require('./../controllers/usuario');
let authorize = require('./../../config/middlewares/auth');

usuario.route('/').get(authorize.isLoggedIn, usuarioCtrl.getUsuarios);
usuario.route('/').post(usuarioCtrl.createUsuario);
usuario.route('/name/:usuario').get(usuarioCtrl.getUsuarioByName);
usuario.route('/:idPersona').get(authorize.isLoggedIn, usuarioCtrl.getUsuarioById);
usuario.route('/:idPersona').put(authorize.isLoggedIn, usuarioCtrl.updateUsuario);
usuario.route('/:idPersona').delete(authorize.isLoggedIn, usuarioCtrl.deleteUsuario);

module.exports = usuario;