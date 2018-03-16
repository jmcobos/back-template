var mongoose = require('mongoose');

var authSchema = new mongoose.Schema({
	usuario: {
		type: String
	},
	password: {
		type: String
	}
});

module.exports = mongoose.model('Auth', authSchema);