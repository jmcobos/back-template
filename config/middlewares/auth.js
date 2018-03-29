let jwt = require('jsonwebtoken');

let auth = require('./../../app/controllers/auth');
let config = require('./../initializers/config');

const isAuthenticated = {

    isLoggedIn : function (req, res, next) {
        
        var token = req.headers['token'];
        
        if (!token) 
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, config.clave, function(err, decoded) {
            console.log(err);
            if (err) 
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
            return next();
        });
        
        res.redirect('/');

    },
    isSuperUser : function (req, res, next) {
        if (req.user.is_superuser) {
            return next();
        }
        res.redirect('/');
    }

};
module.exports = isAuthenticated;