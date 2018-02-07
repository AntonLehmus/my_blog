
exports.up = function(knex, Promise) {
    knex.schema.createTable('paragraphs', function (table) {
        table.increments().primary();
        table.string('header').notNullable();
        table.text('content').notNullable();
        table.integer('post_id').references('id').inTable('posts');
        table.timestamps();
      })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('paragraphs')
};
