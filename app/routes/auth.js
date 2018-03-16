let auth = require('express').Router();

let authCtrl = require('./../controllers/auth');

auth.post('/', authCtrl.getAuth);

module.exports = auth;