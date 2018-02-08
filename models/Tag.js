
'use strict';

const Model = require('objection').Model;


class Tag extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'tags';
  }

  static relationMappings = {

    posts: {
      relation: Model.ManyToManyRelation,
      modelClass: __dirname + '/Post',
      join: {
        from: 'Tag.id',
        through: {
          from: 'posts_tags.tag_id',
          to: 'posts_tags.post_id'
        },
        to: 'Post.id'
      }
    }
  }
}

module.exports = Tag;