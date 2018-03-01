
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('User', function(table){
            table.increments().primary();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.timestamps(false, true); //use dateTime as type instead of timestamp and default values to current timestamp
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('User')
    ])
};
