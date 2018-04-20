let express = require('express');
let auth = express.Router();

let authCtrl = require('./../controllers/auth');
let authorize = require('./../../config/middlewares/auth');

auth.route('/').post(authCtrl.logearse);

module.exports = auth;