let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/guesthome', function(err, res) {
    if(err) {
        console.log('ERROR: No se ha podido conectar a la base de datos. ' + err);
    } else {
        console.log('Conectado con éxito a la base de datos.');
    }
});