const express = require('express');
const router = express.Router();
const { transaction } = require('objection');
const Post = require('../models/Post');
const Tag = require('../models/Tag');
const Paragraph = require('../models/Paragraph');


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


module.exports = router;
