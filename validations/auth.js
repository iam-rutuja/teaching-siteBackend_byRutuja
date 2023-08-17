const { check } = require('express-validator');

exports.signupValidator = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required!'),
  check('email')
    .isEmail()
    .withMessage('Invalid email'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be atleast 6 char long')
]

exports.signinValidator = [
  check('email')
    .isEmail()
    .withMessage('Invalid email'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be atleast 6 char long')
]