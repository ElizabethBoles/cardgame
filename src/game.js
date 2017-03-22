let game = require('./deck.js');
let cardValues = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q,', 'K', 'A'];

module.exports = function warGame(player1, player2) {
  let deck = game();//game.builddeck because when you require a file it comes in an obj
  //because of mod exports and with in that are the fn that i exported have to use . syntax to get to it

  let numberOfWinsForPlayerOne = 0;
  let numberOfWinsForPlayerTwo = 0;
  let numberOfTies = 0;
  let numberOfPlays = 0;
  let ties = 0;
  for(let i=0; i<52; i+=2) {
    if (cardValues.indexOf(deck[i]) > cardValues.indexOf(deck[i+1])){
      console.log( 'player 1 wins the hand');
      numberOfWinsForPlayerOne++;
    } else if (cardValues.indexOf(deck[i]) < cardValues.indexOf(deck[i+1])) {
      console.log( 'player 2 wins the hand');
      numberOfWinsForPlayerTwo++;
    } else {
    console.log( 'they tied');

  }

  console.log( 'player 1 wins', numberOfWinsForPlayerOne);
  console.log( 'player 2 wins', numberOfWinsForPlayerTwo);
  console.log( 'ties', numberOfTies);
}


// let scoreSheet = {
//     date: now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear() + ' at ' + now.getHours() + ':' + now.getMinutes(),
//     players: [pOneObj , pTwoObj],
//     numberOfTies: tie
// };

let pOne = {
  player: player1,
  numberOfWins: numberOfWinsForPlayerOne,
  winRatio:(numberOfWinsForPlayerOne / numberOfPlays).toFixed(2)
};
let pTwo = {
  player: player2,
  numberOfWins: numberOfWinsForPlayerTwo,
  winRatio:(numberOfWinsForPlayerTwo / numberOfPlays).toFixed(2)
};

let scoreSheet = {
  players: [pOne, pTwo],
  numberOfTies: ties
};
return scoreSheet;

//  this.date = new Date();
//  this.players = player1, player2;
// return {players: this.players, date: this.date};
// };
};
