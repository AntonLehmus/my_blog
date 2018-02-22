
'use strict';

const Model = require('objection').Model;


class Paragraph extends Model {

  static get tableName() {
      return 'Paragraph';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['header','content','post_id'],

      properties: {
        id: { type: 'integer' },
        post_id: { type: ['integer'] },
        header: { type: 'string', minLength: 1, maxLength: 255 },
        content: { type: 'string', minLength: 1},
      }
    };
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