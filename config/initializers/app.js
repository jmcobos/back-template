// app.js

'use strict';

let express = require('express');
let app = express();

let db = require('./database');

let persona = require('./../../app/routes/personaRouter');
let activo = require('./../../app/routes/activoRouter');

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/personas', persona);
app.use('/activos', activo);

module.exports = app;