
'use strict';

const Model = require('objection').Model;
const Tag   = require('./Tag');
const Paragraph = require('./Paragraph');

class Post extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'Post';
  }

  // This object defines the relations to other models.
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