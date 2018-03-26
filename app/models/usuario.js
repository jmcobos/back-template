var mongoose = require('mongoose');

var usuarioSchema = new mongoose.Schema({
	fecha_alta: {
		type: Date,
		default: Date.now
	},
	usuario: { 
		type: String,
		required: 'El usuario es obligatorio.'
	},
	correo: {
		type: String,
		required: 'El correo electrónico es obligatorio.'
	},
	password: {
		type: String,
		required: 'La contraseña es obligatorio'
	},
	tipo_documento: {
		type: String,
		enum :['NIF', 'CIF', 'Pasaporte']
	},
	identificador: {
		type: String
	},
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
	direccion: {
		type: String
	},
	localidad: {
		type: String
	},
	codido_postal: {
		type: String
	},
	provincia: {
		type: String
	},
	pais: {
		type: String
	}	 
});

module.exports = mongoose.model('Usuario', usuarioSchema);