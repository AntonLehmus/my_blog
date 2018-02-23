const { transaction } = require('objection');
const Post = require('../models/Post');

//load all posts
exports.get_all = async (req, res, next) => {
    try{
        const posts = await Post.query()
        .skipUndefined();

        res.send(posts);
    }catch(err){
        return res.status(500).send();
    }
};

//load all posts with tags and paragraphs
exports.post_get_all_eager = async (req, res, next) => {
    try{
        const posts = await Post.query()
        .skipUndefined()
        .allowEager('[tags, paragraphs]')
        .eager('[tags, paragraphs]');

        res.send(posts);
    }catch(err){
        return res.status(500).send();
    }

};

//find post by id
exports.find_by_id = async (req, res, next) => {
    try{
        const post = await Post.query().findById(req.params.id);

        post ? res.send(post) : res.status(404).json({message:'post not found'});
    }catch(err){
        return res.status(500).send();
    }
}


//find post by id and eager load paragraphs and tags
exports.find_by_id_eager = async (req, res, next) => {
    try{
        const post = await Post.query().findById(req.params.id)
        .allowEager('[tags, paragraphs]')
        .eager('[tags, paragraphs]');

        post ? res.send(post) : res.status(404).json({message:'post not found'});
    }catch(err){
        return res.status(500).send();
    }

}

//delete post by id
exports.delete_by_id = async (req, res, next) => {
    try{
        const post = await Post.query().deleteById(req.params.id);
    }catch(err){
        return res.status(500).send();
    }
    res.send({});
}

//create post
exports.create = async (req, res, next) => {
    const graph = req.body;

    try{
        const insertedGraph = await transaction(Post.knex(), trx => {
          return (
            Post.query(trx)
              .allowInsert('[paragraphs.[header,content],tags.[name]]')
              .insertGraph(graph)
          );
        });

        res.send(insertedGraph);
    }catch(err){
        return res.status(500).send();
    }

};

//update post
exports.patch = async (req, res, next) => {
    try{
        const post = await Post.query().patchAndFetchById(req.params.id, req.body);

        res.send(post);
    }catch(err){
        return res.status(500).send();
    }

};

//add new tags for post
exports.add_tags = async (req, res, next) => {
    const post = await Post.query().findById(req.params.id).eager('[tags]');

    if(!post){
        res.status(404).json({message:'post not found'});
    }

    //check if the tag is actually new
    let tag_ids = req.body.tag_ids;
    let new_ids = [];
    let existing_tag_ids = [];

    post.tags.map( (tag) => {
        existing_tag_ids.push(tag.id);
    });

    tag_ids.map((id) => {
        if( !existing_tag_ids.includes(id) ){
            new_ids.push(id);
        }
    });


    if( new_ids.length > 0 ){
        try{
            await post.$relatedQuery('tags').relate(new_ids);
        }catch(err){
            return res.status(500).send();
        }
        return res.status(201);
    }

    res.status(409).json({message:'tag already exist'});
};

//remove post tags by id
exports.remove_tags = async (req, res, next) => {

    const post = await Post.query().findById(req.params.id);

    if(!post){
        res.status(404).json({message:'post not found'});
    }

    try{
        await post.$relatedQuery('tags').unrelate().whereIn('id',req.body.tag_ids);
    }catch(err){
        return res.status(500).send();
    }

    res.send({});
}