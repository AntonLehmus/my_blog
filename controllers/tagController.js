const { transaction } = require('objection');
const Tag = require('../models/Tag');


//load all tags
exports.get_all = async (req, res, next) => {
    try{
        const tags = await Tag.query()
        .skipUndefined();

        res.send(tags);
    }catch(err){
        return res.status(500).send();
    }
};

//find tag by id
exports.find_by_id = async (req, res, next) => {
    try{
        const tag = await Tag.query().findById(req.params.id);

        tag ? res.send(tag) : res.status(404).json({message:'tag not found'});
    }catch(err){
        return res.status(500).send();
    }
}

//get posts for tag
exports.get_posts = async (req, res, next) => {
    try{
        const tag = await Tag.query().findById(req.params.id).eager('[posts]');

        tag ? res.send(tag.posts) : res.status(404).json({message:'tag not found'});
    }catch(err){
        return res.status(500).send();
    }
}

//delete tag by id
exports.delete_by_id = async (req, res, next) => {
    try{
        const tag = await Tag.query().deleteById(req.params.id);
        res.send({});
    }catch(err){
        return res.status(500).send();
    }
}

//create tag
exports.create = async (req, res, next) => {
    const graph = req.body;

    try{
        const insertedGraph = await transaction(Tag.knex(), trx => {
          return (
            Tag.query(trx)
              .insertGraph(graph)
          );
        });

        res.send(insertedGraph);
    }catch(err){
        return res.status(500).send();
    }

};

//update tag
exports.patch = async (req, res, next) => {
    try{
        const tag = await Tag.query().patchAndFetchById(req.params.id, req.body);

        res.send(tag);
    }catch(err){
        return res.status(500).send();
    }
};
