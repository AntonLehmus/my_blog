
exports.up = function(knex, Promise) {
    knex.schema.createTable('tags', function (table) {
        table.increments().primary();
        table.string('name').notNullable();
      })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('tags')
};
