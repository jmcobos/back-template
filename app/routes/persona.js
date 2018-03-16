let persona = require('express').Router();

let personaCtrl = require('./../controllers/persona');

persona.get('/', personaCtrl.getPersonas);
persona.get('/:idPersona', personaCtrl.getPersona);

persona.get('/name/:nombrePersona', personaCtrl.getPersonaByName);

persona.post('/', personaCtrl.newPersona);

module.exports = persona;