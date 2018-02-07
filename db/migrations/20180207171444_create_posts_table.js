
exports.up = function(knex, Promise) {
    knex.schema.createTable('posts', function (table) {
        table.increments().primary();
        table.string('title').notNullable();
        table.timestamps();
      })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('posts')
};
