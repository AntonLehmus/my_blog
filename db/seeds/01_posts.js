
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Post').del()
    .then(function () {
      // Inserts seed entries
      return knex('Post').insert([
        {title: 'hello world'},
        {title: 'exiting testing'},
        {title: 'good news everyone'},
        {title: 'the thing goes...'},
        {title: 'fear is the mind killer'},
      ]);
    });
};
