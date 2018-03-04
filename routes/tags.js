const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const { buildSanitizeFunction } = require('express-validator/filter');

const tagController = require('../controllers/tagController');
const checkValidationResult = require('../middleware/checkValidationResult');
const checkAuth = require('../middleware/checkAuth');




/* GET all tags. */
router.get('/', tagController.get_all);

/* GET tag by id. */
router.get('/:id',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    tagController.find_by_id);

/* GET posts for tag. */
router.get('/:id/posts/',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    tagController.get_posts);

/* DELETE tag by id. */
router.delete('/:id',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    checkAuth,
    tagController.delete_by_id);

/* CREATE new tag */
router.post('/',
    [check('name').exists(),
    sanitize(['name'])],
    checkValidationResult,
    checkAuth,
    tagController.create);

/* UPDATE tag by id */
router.patch('/:id',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt(),
    check('name').exists(),
    sanitize(['name'])],
    checkValidationResult,
    checkAuth,
    tagController.patch);


module.exports = router;
