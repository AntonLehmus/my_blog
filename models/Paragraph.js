
'use strict';

const Model = require('objection').Model;


class Paragraph extends Model {
    // Table name is the only required property.
    static get tableName() {
      return 'paragraphs';
  }

  static relationMappings = {
    post: {
      relation: Model.BelongsToOneRelation,
      modelClass: Post,
      join: {
        from: 'paragraph.post_id',
        to: 'paragraph.id'
      }
    }
  }
}

module.exports = Paragraph;