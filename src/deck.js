//1) The deck.js file must export a single function which returns an array of shuffled card values.
//TThere should be FOUR of each value:
//2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', and 'A'.
// Note that you DO NOT need to worry about suits (unless you do Adventure Mode).
let cardValues = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q,', 'K', 'A'];

module.exports = function buildDeck() {
  let deck = [];

  for (let i=0; i<4; i++) {
    deck = deck.concat(cardValues);
  }
  //shuffleDeck.push(deck[math.floor(math.random() * deck.length())]);

  return deck;
};

console.log(module.exports());
