let auth = require('./../models/auth');
let axios = require('axios');

exports.getAuth = function(req, res) {

    const url = 'http://localhost:3000/personas/name/' + req.body.usuario;

    axios.get(url)
        .then(response => {
            if(response.data.length > 0) {
                res.send(response.data);   
            } else {
                res.status(404).send("No user found.");
            }
        })
        .catch(error => {
            res.status(500).send("There was a problem finding the user.");
        });

        /*User.findOne({
            email: req.body.email
          }, function(err, user) {
            if (err) throw err;
            if (!user) {
              res.status(401).json({ message: 'Authentication failed. User not found.' });
            } else if (user) {
              if (!user.comparePassword(req.body.password)) {
                res.status(401).json({ message: 'Authentication failed. Wrong password.' });
              } else {
                return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs')});
              }
            }*/
        
};

