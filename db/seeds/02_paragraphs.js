
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('paragraphs').del()
    .then(function () {
      // Inserts seed entries
      return knex('paragraphs').insert([
        {id: 1, header: 'this is it', content: 'Heyy here is a really long text thingy', post_id: 1},
        {id: 2, header: 'header', content: 'Heyy here is a really long text thingy', post_id: 1},
        {id: 3, header: 'important stuff', content: 'Heyy here is a really long text thingy', post_id: 1},
        {id: 4, header: 'the same old', content: 'Heyy here is a really long text thingy', post_id: 1},
        {id: 5, header: 'yep', content: 'yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep yep', post_id: 2},
        {id: 6, header: 'bad code', content: 'is bad', post_id: 2},
        {id: 7, header: 'why did I think this would be easier than faker', content: 'need faker', post_id: 2},
        {id: 8, header: 'save me', content: 'faker plz', post_id: 2},
        {id: 9, header: 'imagination', content: 'Gib 1 pl0x', post_id: 3},
        {id: 10, header: 'almost done', content: 'yay', post_id: 3},
        {id: 11, header: 'keyboard', content: 'it has keys', post_id: 3},
        {id: 12, header: 'fun', content: 'kazOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', post_id: 3},
        {id: 13, header: 'paper', content: 'writey writey', post_id: 4},
        {id: 14, header: 'internet of memes', content: 'avaruuskulttuuri on jo täällä', post_id: 4},
        {id: 15, header: 'lamps', content: 'lamps are source of light and needed to see in the dark', post_id: 4},
        {id: 16, header: 'water', content: 'water is essential for ones wellbeing', post_id: 4},
        {id: 17, header: 'trees', content: 'They have leaves or needles or orhter such things - maybe', post_id: 5},
        {id: 18, header: 'things', content: 'foo the bar', post_id: 5},
        {id: 19, header: 'manual inputs are fun', content: 'They are also very very efficient', post_id: 5},
        {id: 20, header: 'todo', content: 'I really need look into faker', post_id: 5},
      ]);
    });
};
