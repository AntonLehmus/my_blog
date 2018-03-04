const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');
const { buildSanitizeFunction } = require('express-validator/filter');

const postController = require('../controllers/postController');
const checkValidationResult = require('../middleware/checkValidationResult');
const checkAuth = require('../middleware/checkAuth');



/* GET all posts. */
router.get('/', postController.get_all);

/* GET all posts with eager loaded data. */
router.get('/eager', postController.post_get_all_eager);

/* GET post by id. */
router.get('/:id',
    [ check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    postController.find_by_id);

/* GET post by id and eager load data. */
router.get('/:id/eager', [
    check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    postController.find_by_id_eager);

/* DELETE post by id. */
router.delete('/:id', [
    check('id').trim().isInt({min:1}),
    sanitize('id').toInt() ],
    checkValidationResult,
    checkAuth,
    postController.delete_by_id);

/* CREATE new post */
router.post('/', [
    check('title').exists(),
    sanitize(['title','header','content','name']),],
    checkAuth,
    checkValidationResult,
    postController.create);

/* UPDATE post by id */
router.patch('/:id', [
    check('id').trim().isInt({min:1}),
    check('title').exists(),
    sanitize(['title','header','content','name']),
    sanitize('id').toInt() ],
    checkAuth,
    checkValidationResult,
    postController.patch);

/* ADD tags for post */
router.post('/:id/tags', [
    check('id').trim().isInt({min:1}),
    sanitize('id').toInt(),
    check('tag_ids').exists().isNumeric()],
    checkValidationResult,
    checkAuth,
    postController.add_tags);

/* REMOVE tags for post */
router.delete('/:id/tags', [
    check('id').trim().isInt({min:1}),
    sanitize('id').toInt(),
    check('tag_ids').exists().isNumeric()],
    checkValidationResult,
    checkAuth,
    postController.remove_tags);

module.exports = router;
