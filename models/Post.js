
'use strict';

const Model = require('objection').Model;
const Tag   = require('./Tag');
const Paragraph = require('./Paragraph');

class Post extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'posts';
  }

  // This object defines the relations to other models.
  static relationMappings = {
    paragraphs: {
      relation: Model.HasManyRelation,
      //  We use the file path version here to prevent require loops.
      modelClass: __dirname + '/Paragraph',
      join: {
        from: 'Post.id',
        to: 'Paragraph.post_id'
      }
    },

    tags: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Tag',
      join: {
        from: 'Post.id',
        through: {
          from: 'posts_tags.post_id',
          to: 'posts_tags.tag_id'
        },
        to: 'Tag.id'
      }
    }
  }
}

module.exports = Post;