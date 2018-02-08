
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('posts_tags', function(table){
            table.increments().primary();
            table.integer('post_id').references('posts.id').onDelete('CASCADE');
            table.integer('tag_id').references('tags.id').onDelete('CASCADE');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('posts_tags')
    ])
};
