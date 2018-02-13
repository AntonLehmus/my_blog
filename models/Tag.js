
'use strict';

const Model = require('objection').Model;
//const Post   = require('./Post');

class Tag extends Model {

   static get tableName() {
      return 'Tag';
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