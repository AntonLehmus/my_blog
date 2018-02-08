
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('paragraphs', function (table) {
            table.increments().primary();
            table.string('header').notNullable();
            table.text('content').notNullable();
            table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE');
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('paragraphs')
    ])
};
