const express = require('express');
const router = express.Router();

const paragraphController = require('../controllers/paragraphController');


/* GET all paragraphs. */
router.get('/', paragraphController.get_all);

/* GET paragraph by id. */
router.get('/:id', paragraphController.find_by_id);

/* GET paragraph by post id. */
router.get('/post/:id/', paragraphController.find_by_post_id);

/* DELETE paragraph by id. */
router.delete('/:id', paragraphController.delete_by_id);

/* CREATE new paragraph */
router.post('/', paragraphController.create);

/* UPDATE paragraph by id */
router.patch('/:id', paragraphController.patch);


module.exports = router;
