
'use strict';

const Model = require('objection').Model;

class User extends Model {

   static get tableName() {
      return 'User';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email','password'],

      properties: {
        id: { type: 'integer' },
        email: { type: 'email', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 12},
      }
    };
  }

}

module.exports = User;