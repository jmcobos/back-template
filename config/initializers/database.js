let mongoose = require('mongoose');
let config = require('./../initializers/config');

mongoose.Promise = global.Promise;
mongoose.connect(config.database, function(err, res) {
    if(err) {
        console.log('ERROR: No se ha podido conectar a la base de datos. ' + err);
    } else {
        console.log('Conectado con éxito a la base de datos.');
    }
});