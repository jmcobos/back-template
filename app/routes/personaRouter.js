let persona = require('express').Router();

let personaCtrl = require('./../controllers/personaController');

persona.get('/', personaCtrl.getPersonas);
persona.get('/:idPersona', personaCtrl.getPersona);

persona.post('/', personaCtrl.newPersona);

module.exports = persona;