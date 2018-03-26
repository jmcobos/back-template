let auth = require('express').Router();

let authCtrl = require('./../controllers/auth');

auth.post('/', authCtrl.authenticate);

module.exports = auth;