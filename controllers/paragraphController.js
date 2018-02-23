const { transaction } = require('objection');
const Paragraph = require('../models/Paragraph');
const Post = require('../models/Post');


//load all paragraphs
exports.get_all = async (req, res, next) => {
    try{
        const paragraphs = await Paragraph.query()
        .skipUndefined();

        res.send(paragraphs);
    }catch(err){
        return res.status(500).send();
    }
};

//find paragraph by id
exports.find_by_id = async (req, res, next) => {
    try{
        const paragraph = await Paragraph.query().findById(req.params.id);

        paragraph ? res.send(paragraph) : res.status(404).json({message:'paragraph not found'});
    }catch(err){
        return res.status(500).send();
    }
}

//find paragraph by post id
exports.find_by_post_id = async (req, res, next) => {
    try{
        const post = await Post.query().findById(req.params.id).eager('[paragraphs]');

        post ? res.send(post.paragraphs) : res.status(404).json({message:'post not found'});
    }catch(err){
        return res.status(500).send();
    }
}

//delete paragraph by id
exports.delete_by_id = async (req, res, next) => {
    try{
        const paragraph = await Paragraph.query().deleteById(req.params.id);
        res.send({});
    }catch(err){
        return res.status(500).send();
    }
}

//create paragraph
exports.create = async (req, res, next) => {
    const graph = req.body;

    try{
        const insertedGraph = await transaction(Paragraph.knex(), trx => {
          return (
            Paragraph.query(trx)
              .allowInsert('[paragraphs.[header,content]]')
              .insertGraph(graph)
          );
        });

        res.send(insertedGraph);
    }catch(err){
        return res.status(500).send();
    }

};

//update paragraph
exports.patch = async (req, res, next) => {
    try{
        const paragraph = await Paragraph.query().patchAndFetchById(req.params.id, req.body);

        res.send(paragraph);
    }catch(err){
        return res.status(500).send();
    }
};
