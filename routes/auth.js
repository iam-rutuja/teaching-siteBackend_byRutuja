const express = require('express');
const router = express.Router();

//controllers
const { signup, accountActivation, signin } = require('../controller/auth');

//validators
const { signupValidator, signinValidator } = require('../validations/auth');
const { runValidation } = require('../validations');

//Authentication
router.post('/signup', signupValidator, runValidation, signup);
router.post('/account-activate', accountActivation);
router.post('/signin', signinValidator, runValidation, signin);

module.exports = router;