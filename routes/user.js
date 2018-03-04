const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const { buildSanitizeFunction } = require('express-validator/filter');

const userController = require('../controllers/userController');
const checkValidationResult = require('../middleware/checkValidationResult');


/* CREATE new user */
router.post('/create',
    [check('email').exists(),
    check('password').exists(),
    sanitize(['email','password'])],
    checkValidationResult,
    userController.create);

/* DELETE user by id. */
router.delete('/',
    [ check('email'),
    sanitize('email') ],
    checkValidationResult,
    userController.delete_by_email);


/* login */
router.post('/login',
    [check('email').exists(),
    check('password').exists(),
    sanitize(['email','password'])],
    checkValidationResult,
    userController.login);

/* UPDATE user by id */
router.patch('/',
    [check('email').exists(),
    check('password').exists(),
    sanitize(['email','password'])],
    checkValidationResult,
    userController.patch);

module.exports = router;