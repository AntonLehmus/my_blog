const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');


/* GET all posts. */
router.get('/', postController.get_all);

/* GET all posts with eager loaded data. */
router.get('/eager', postController.post_get_all_eager);

/* GET post by id. */
router.get('/:id', postController.find_by_id);

/* GET post by id. */
router.get('/:id/eager', postController.find_by_id_eager);

/* DELETE post by id. */
router.delete('/:id', postController.delete_by_id);

/* CREATE new post */
router.post('/', postController.create);

/* UPDATE post by id */
router.patch('/:id', postController.patch);

/* ADD tags for post */
router.post('/:id/tags', postController.add_tags);

/* REMOVE tags for post */
router.delete('/:id/tags', postController.remove_tags);

module.exports = router;
