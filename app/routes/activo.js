let activo = require('express').Router();

activo.get('/', function(req, res) {
   res.send("Hello World! - Activo");
});

module.exports = activo;