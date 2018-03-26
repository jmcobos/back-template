let auth = require('./../models/auth');
let axios = require('axios');

exports.authenticate = function(req, res) {

    let usuario = req.body.usuario;
    let pass = req.body.password;

    const url = 'http://localhost:3000/usuarios/name/' + usuario;

    axios.get(url)
        .then(function(response) {
            if(response.data !== null) {
                if(pass === response.data.password) {
                    // res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')});
                    res.status(200).send(response.data);
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
