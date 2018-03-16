// app.js

'use strict';

let express = require('express');
let app = express();

let db = require('./database');

let auth = require('./../../app/routes/auth');
let persona = require('./../../app/routes/persona');
let activo = require('./../../app/routes/activo');

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/auth', auth);
app.use('/personas', persona);
app.use('/activos', activo);

module.exports = app;