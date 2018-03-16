var mongoose = require('mongoose');

var personaSchema = new mongoose.Schema({
	nombre: {
		type: String
	},
	apellido_01: {
		type: String
	},
	apellido_02: {
		type: String
	},
	telefono: {
		type: String
	},
	dni: {
		type: String,
		required: 'El documento idenfiticativo es obligatorio'
	},
	tipo_documento: {
		type: String,
		enum :['NIF', 'CIF', 'Pasaporte'],
		default: ['NIF']
	},
	direccion: {
		type: String
	},
	fecha_alta: {
		type: Date,
		default: Date.now
	} 
});

module.exports = mongoose.model('Persona', personaSchema);