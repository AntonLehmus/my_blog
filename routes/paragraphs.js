const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const { buildSanitizeFunction } = require('express-validator/filter');

const paragraphController = require('../controllers/paragraphController');
const checkValidationResult = require('../middleware/checkValidationResult');



/* GET all paragraphs. */
router.get('/', paragraphController.get_all);

/* GET paragraph by id. */
router.get('/:id',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    paragraphController.find_by_id);

/* GET paragraph by post id. */
router.get('/post/:id/',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    paragraphController.find_by_post_id);

/* DELETE paragraph by id. */
router.delete('/:id',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    paragraphController.delete_by_id);

/* CREATE new paragraph */
router.post('/',
    [check('header').exists(),
    check('content').exists(),
    check('post_id').exists().isInt({min:1}),
    sanitize(['header','content'])],
    checkValidationResult,
    paragraphController.create);

/* UPDATE paragraph by id */
router.patch('/:id',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt(),
    check('header').exists(),
    check('content').exists(),
    check('post_id').exists().isInt({min:1}),
    sanitize(['header','content'])],
    checkValidationResult,
    paragraphController.patch);


module.exports = router;
