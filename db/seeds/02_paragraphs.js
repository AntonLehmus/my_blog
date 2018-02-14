
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Paragraph').del()
    .then(function () {
      // Inserts seed entries
      return knex('Paragraph').insert([
        {header: 'this is it', content: 'Heyy here is a really long text thingy', post_id: 1},
        {header: 'header', content: 'Heyy here is a really long text thingy', post_id: 1},
        {header: 'important stuff', content: 'Heyy here is a really long text thingy', post_id: 1},
        {header: 'the same old', content: 'Heyy here is a really long text thingy', post_id: 1},
        {header: 'yep', content: 'yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep', post_id: 2},
        {header: 'bad code', content: 'is bad', post_id: 2},
        {header: 'why did I think this would be easier than faker', content: 'need faker', post_id: 2},
        {header: 'save me', content: 'faker plz', post_id: 2},
        {header: 'imagination', content: 'Gib 1 pl0x', post_id: 3},
        {header: 'almost done', content: 'yay', post_id: 3},
        {header: 'keyboard', content: 'it has keys', post_id: 3},
        {header: 'fun', content: 'kazOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', post_id: 3},
        {header: 'paper', content: 'writey writey', post_id: 4},
        {header: 'internet of memes', content: 'avaruuskulttuuri on jo täällä', post_id: 4},
        {header: 'lamps', content: 'lamps are source of light and needed to see in the dark', post_id: 4},
        {header: 'water', content: 'water is essential for ones wellbeing', post_id: 4},
        {header: 'trees', content: 'They have leaves or needles or orhter such things - maybe', post_id: 5},
        {header: 'things', content: 'foo the bar', post_id: 5},
        {header: 'manual inputs are fun', content: 'They are also very very efficient', post_id: 5},
        {header: 'todo', content: 'I really need look into faker', post_id: 5},
      ]);
    });
};
