let axios = require('axios');
let jwt = require('jsonwebtoken');

let config = require('./../../config/initializers/config');

exports.logearse = function(req, res) {

    const url = 'http://localhost:3000/usuarios/name/' + req.body.usuario;

    axios.get(url)
        .then(function(response) {
            if(response.data !== null) {
                if(req.body.password === response.data.password) {
                    var token = jwt.sign({ id: response.data._id }, config.clave, { expiresIn: 1800 });
                    res.status(200).send({ auth: true, token: token });
                } else {
                    res.status(401).send('Unauthorized');    
                }
            } else {
                res.status(404).send("Not Found");
            }
        })
        .catch(function(error) {
            res.status(500).send("Internal Server Error");
        });
};

exports.registrarse = function(req, res) {
    
    const url = 'http://localhost:3000/usuarios/name/' + req.body.usuario;

    axios.get(url)
        .then(function(response) {
            if(response.data !== null) {
            }
        })
        .catch(function(error) {
            res.status(500).send("Internal Server Error");
        });
};

exports.logout = function(req, res) {
    
    const url = 'http://localhost:3000/usuarios/name/' + req.body.usuario;

    axios.get(url)
        .then(function(response) {
            if(response.data !== null) {
            }
        })
        .catch(function(error) {
            res.status(500).send("Internal Server Error");
        });
}
