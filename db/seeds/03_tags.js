
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Tag').del()
    .then(function () {
      // Inserts seed entries
      return knex('Tag').insert([
        {name: 'tag'},
        {name: 'testing'},
        {name: 'exiting'},
        {name: 'stuff'}
      ]);
    });
};
