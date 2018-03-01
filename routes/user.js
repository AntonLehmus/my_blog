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

module.exports = router;