
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Post', function (table) {
            table.increments().primary();
            table.string('title').notNullable();
            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Post')
    ])
};
