
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tag').insert([
        {id: 1, name: 'tag'},
        {id: 2, name: 'testing'},
        {id: 3, name: 'exiting'},
        {id: 4, name: 'stuff'}
      ]);
    });
};
