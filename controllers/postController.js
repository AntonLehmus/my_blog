const { transaction } = require('objection');
const Post = require('../models/Post');

//load all posts
exports.get_all = async (req, res, next) => {

    const posts = await Post.query()
    .skipUndefined();

    res.send(posts);
};

//load all posts with tags and paragraphs
exports.post_get_all_eager = async (req, res, next) => {

    const posts = await Post.query()
    .skipUndefined()
    .allowEager('[tags, paragraphs]')
    .eager('[tags, paragraphs]');

    res.send(posts);
};

//find post by id
exports.find_by_id = async (req, res, next) => {

    const post = await Post.query().findById(req.params.id);

    post ? res.send(post) : res.status(404).json({message:'post not found'});
}

//find post by id and eager load paragraphs and tags
exports.find_by_id_eager = async (req, res, next) => {

    const post = await Post.query().findById(req.params.id)
    .allowEager('[tags, paragraphs]')
    .eager('[tags, paragraphs]');

   post ? res.send(post) : res.status(404).json({message:'post not found'});
}

//delete post by id
exports.delete_by_id = async (req, res, next) => {

    const post = await Post.query().deleteById(req.params.id);
    res.send({});
}

//create post
exports.create = async (req, res, next) => {
    const graph = req.body;

    // It's a good idea to wrap `insertGraph` call in a transaction since it
    // may create multiple queries.
    const insertedGraph = await transaction(Post.knex(), trx => {
      return (
        Post.query(trx)
          // For security reasons, limit the relations that can be inserted.
          .allowInsert('[paragraphs.[header,content],tags.[name]]')
          .insertGraph(graph)
      );
    });

    res.send(insertedGraph);
};

//update post
exports.patch = async (req, res, next) => {
    const post = await Post.query().patchAndFetchById(req.params.id, req.body);

    res.send(post);
};

//add tags for post
exports.add_tags = async (req, res, next) => {

    const post = await Post.query().findById(req.params.id);

    if(!post){
        res.status(404).json({message:'post not found'});
    }

    await post.$relatedQuery('tags').relate(req.body.tag_ids);

    res.send(post);
};

//remove post tags by id
exports.remove_tags = async (req, res, next) => {

    const post = await Post.query().findById(req.params.id);

    if(!post){
        res.status(404).json({message:'post not found'});
    }

    await post.$relatedQuery('tags').unrelate().whereIn('id',req.body.tag_ids);

    res.send({});
}