
'use strict';

const Model = require('objection').Model;

class Tag extends Model {

   static get tableName() {
      return 'Tag';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  static relationMappings() {
    return{
      posts: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname + '/Post',
        join: {
          from: 'Tag.id',
          through: {
            from: 'Post_Tag.tag_id',
            to: 'Post_Tag.post_id'
          },
          to: 'Post.id'
        }
      }
    }
  }
}

module.exports = Tag;