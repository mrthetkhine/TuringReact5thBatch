var express = require('express');
var router = express.Router();
var users = require('./../controller/UsersController');
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/:userId', users.getUserById);
router.post('/', users.registerUser);
router.post('/login', users.login);
module.exports = router;

