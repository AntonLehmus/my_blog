const { transaction } = require('objection');
const Paragraph = require('../models/Paragraph');
const Post = require('../models/Post');


//load all paragraphs
exports.get_all = async (req, res, next) => {

    const paragraphs = await Paragraph.query()
    .skipUndefined();

    res.send(paragraphs);
};

//find paragraph by id
exports.find_by_id = async (req, res, next) => {

    const paragraph = await Paragraph.query().findById(req.params.id);

    paragraph ? res.send(paragraph) : res.status(404).json({message:'paragraph not found'});
}

//find paragraph by post id
exports.find_by_post_id = async (req, res, next) => {

    const post = await Post.query().findById(req.params.id).eager('[paragraphs]');

    post ? res.send(post.paragraphs) : res.status(404).json({message:'post not found'});
}

//delete paragraph by id
exports.delete_by_id = async (req, res, next) => {

    const paragraph = await Paragraph.query().deleteById(req.params.id);
    res.send({});
}

//create paragraph
exports.create = async (req, res, next) => {
    const graph = req.body;

    console.log(graph);

    // It's a good idea to wrap `insertGraph` call in a transaction since it
    // may create multiple queries.
    const insertedGraph = await transaction(Paragraph.knex(), trx => {
      return (
        Paragraph.query(trx)
          // For security reasons, limit the relations that can be inserted.
          .allowInsert('[paragraphs.[header,content]]')
          .insertGraph(graph)
      );
    });

    res.send(insertedGraph);
};

//update paragraph
exports.patch = async (req, res, next) => {
    const paragraph = await Paragraph.query().patchAndFetchById(req.params.id, req.body);

    res.send(paragraph);
};
