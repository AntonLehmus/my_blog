const express = require('express');
const router = express.Router();
const { transaction } = require('objection');
const Post = require('../models/Post');
//const Tag = require('../models/Tag');
//const Paragraph = require('../models/Paragraph');


/* GET posts listing. */
router.get('/', function(req, res, next) {

    const posts = Post.query()
    .skipUndefined()
    // For security reasons, limit the relations that can be fetched.
    .allowEager('[tags, paragraphs]')
    .eager('[tags, paragraphs]')
    .then(function(posts){
        res.send(posts);
    });

});

/* GET post by id. */
router.get('/:id', function(req, res, next) {

    const post = Post.query().findById(req.params.id)
    .skipUndefined()
    // For security reasons, limit the relations that can be fetched.
    .allowEager('[tags, paragraphs]')
    .eager('[tags, paragraphs]')
    .then(function(post){
        if (!post) {
            res.status(404).send('{}');
        }

        res.send(post);
    });

});

/* DELETE post by id. */
router.delete('/:id', function(req, res, next) {

    const post = Post.query().deleteById(req.params.id)
    .then(function(post){
        res.send({});
    });

});

module.exports = router;
