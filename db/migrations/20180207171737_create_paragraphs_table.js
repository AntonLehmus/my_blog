
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Paragraph', function (table) {
            table.increments().primary();
            table.string('header').notNullable();
            table.text('content').notNullable();
            table.integer('post_id').references('id').inTable('Post').onDelete('CASCADE');
            table.timestamps(false, true);  //use dateTime as type instead of timestamp and default values to current timestamp
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Paragraph')
    ])
};
