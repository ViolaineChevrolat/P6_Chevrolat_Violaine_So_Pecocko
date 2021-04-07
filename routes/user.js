const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//const limiter = require ('../middleware/express-limit');

router.post('/signup', userCtrl.newUser);
router.post('/login', userCtrl.theUser); //ok

//router.post('/signup', limiter, //userCtrl.signup);
//router.post('/login', limiter, //userCtrl.login);

module.exports = router;