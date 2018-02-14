
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Tag', function (table) {
            table.increments().primary();
            table.string('name').notNullable();
            table.index('name'); 
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Tag')
    ])
};
