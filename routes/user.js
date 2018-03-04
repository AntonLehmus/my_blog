const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const { buildSanitizeFunction } = require('express-validator/filter');

const userController = require('../controllers/userController');
const checkValidationResult = require('../middleware/checkValidationResult');
const checkAuth = require('../middleware/checkAuth');


/* CREATE new user */
router.post('/create',
    [check('email').exists(),
    check('password').exists(),
    sanitize(['email','password'])],
    checkValidationResult,
    userController.create);

/* DELETE user by email. */
router.delete('/',
    [ check('email'),
    sanitize('email') ],
    checkValidationResult,
    checkAuth,
    userController.delete_by_email);


/* login */
router.post('/login',
    [check('email').exists(),
    check('password').exists(),
    sanitize(['email','password'])],
    checkValidationResult,
    userController.login);

/* UPDATE user by email */
router.patch('/',
    [check('email').exists(),
    check('password').exists(),
    sanitize(['email','password'])],
    checkValidationResult,
    checkAuth,
    userController.patch);

module.exports = router;