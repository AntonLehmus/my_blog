
'use strict';

const Model = require('objection').Model;


class Paragraph extends Model {

  static get tableName() {
      return 'Paragraph';
  }

  static relationMappings() {
    return{
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass:  __dirname + '/Post',
        join: {
          from: 'Paragraph.post_id',
          to: 'Post.id'
        }
      }
    }
  }
}

module.exports = Paragraph;