
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Post', function (table) {
            table.increments().primary();
            table.string('title').notNullable();
            table.timestamps(false, true);
            table.index('title');  //use dateTime as type instead of timestamp and default values to current timestamp
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Post')
    ])
};
