
'use strict';

const Model = require('objection').Model;
const Tag   = require('./Tag');
const Paragraph = require('./Paragraph');

class Post extends Model {

  static get tableName() {
      return 'Post';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],

      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }

  static relationMappings() {
    return {
      paragraphs: {
        relation: Model.HasManyRelation,
        modelClass: Paragraph,
        join: {
          from: 'Post.id',
          to: 'Paragraph.post_id'
        }
      },

      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: Tag,
        join: {
          from: 'Post.id',
          through: {
            from: 'Post_Tag.post_id',
            to: 'Post_Tag.tag_id'
          },
          to: 'Tag.id'
        }
      }
    }
  }
}

module.exports = Post;