
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('Post_Tag', function(table){
            table.increments().primary();
            table.integer('post_id').references('Post.id').onDelete('CASCADE');
            table.integer('tag_id').references('Tag.id').onDelete('CASCADE');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('Post_Tag')
    ])
};
