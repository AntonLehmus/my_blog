
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Post', function (table) {
            table.increments().primary();
            table.string('title').notNullable();
            table.timestamps(false, true); //use dateTime as type instead of timestamp and default values to current timestamp
            table.index('title');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Post')
    ])
};
