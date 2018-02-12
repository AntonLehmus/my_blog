
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Post_Tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('Post_Tag').insert([
        {id: 1, post_id: 1, tag_id: 1},
        {id: 2, post_id: 1, tag_id: 2},
        {id: 3, post_id: 1, tag_id: 3},
        {id: 4, post_id: 2, tag_id: 4},
        {id: 5, post_id: 2, tag_id: 4},
        {id: 6, post_id: 2, tag_id: 3},
        {id: 7, post_id: 3, tag_id: 3},
        {id: 8, post_id: 3, tag_id: 1},
        {id: 9, post_id: 3, tag_id: 2},
        {id: 10, post_id: 4, tag_id: 1},
        {id: 11, post_id: 4, tag_id: 4},
        {id: 12, post_id: 4, tag_id: 3},
        {id: 13, post_id: 5, tag_id: 1},
        {id: 14, post_id: 5, tag_id: 2},
        {id: 15, post_id: 5, tag_id: 4},

      ]);
    });
};
