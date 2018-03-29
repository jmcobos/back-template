let usuario = express.Router();
let auth = express.Router();

let authCtrl = require('./../controllers/auth');
let authorize = require('./../../config/middlewares/auth');

auth.Router('/').post(authCtrl.authenticate);

module.exports = auth;