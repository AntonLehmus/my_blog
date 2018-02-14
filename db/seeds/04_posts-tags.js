
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Post_Tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('Post_Tag').insert([
        {post_id: 1, tag_id: 1},
        {post_id: 1, tag_id: 2},
        {post_id: 1, tag_id: 3},
        {post_id: 2, tag_id: 4},
        {post_id: 2, tag_id: 4},
        {post_id: 2, tag_id: 3},
        {post_id: 3, tag_id: 3},
        {post_id: 3, tag_id: 1},
        {post_id: 3, tag_id: 2},
        {post_id: 4, tag_id: 1},
        {post_id: 4, tag_id: 4},
        {post_id: 4, tag_id: 3},
        {post_id: 5, tag_id: 1},
        {post_id: 5, tag_id: 2},
        {post_id: 5, tag_id: 4},

      ]);
    });
};
