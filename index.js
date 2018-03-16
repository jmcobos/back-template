// index.js

let app = require('./config/initializers/app');
let config = require('./config/initializers/config');

let server = app.listen(config.puerto, function() {
    console.log('Servidor en marcha en el puerto ' + config.puerto);
});


