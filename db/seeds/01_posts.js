
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, title: 'hello world'},
        {id: 2, title: 'exiting testing'},
        {id: 3, title: 'good news everyone'},
        {id: 4, title: 'the thing goes...'},
        {id: 5, title: 'fear is the mind killer'},
      ]);
    });
};
