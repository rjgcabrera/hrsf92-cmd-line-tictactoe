// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

var stdin = process.openStdin();

var arr = [['□', '□', '□'],
             ['□', '□', '□'],
             ['□', '□', '□']];

var count = 0;
var currentPlayer = 'X';

var isGameOver = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2] && arr[i][1] !== '□') {
      document.getElementsByTagName('h1')[0].innerHTML = arr[i][0] + ' Player Wins';
      console.log(arr[i][0] + ' Player Wins');
      return true;
    }
    if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i] && arr[1][i] !== '□') {
      console.log(arr[0][i] + ' Player Wins');
      return true;
    }
  }
  if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2] && arr[2][2] !== '□') {
    console.log(arr[1][1] + ' Player Wins');
    return true;
  }
  if (arr[2][0] === arr[1][1] && arr[0][2] === arr[1][1] && arr[1][1] !== '□') {
    console.log(arr[1][1] + ' Player Wins');
    return true;
  } else {
    return false;
  }
};

var changeSquare = function(x, y) {
  if (count % 2 === 0) {
    currentPlayer = 'X';
    arr[x][y] = 'X';
    count++;
  } else {
    currentPlayer = 'O';
    arr[x][y] = 'O';
    count++;
  }
};

console.log('Welcome to Node TicTacToe!');

if (!isGameOver(arr)) {
  console.log(arr[0] + '\n' + arr[1] + '\n' + arr[2]);
  console.log(`Player ${currentPlayer}, please make your move by entering coordinates as 'x,y': `);
}

stdin.addListener("data", function(d) {
  // note:  d is an object, and when converted to a string it will
  // end with a linefeed.  so we (rather crudely) account for that
  // with toString() and then trim()
  var answer = d.toString().trim();
  changeSquare(parseInt(answer[0]), parseInt(answer[2]));
  if (!isGameOver(arr)) {
    console.log(arr[0] + '\n' + arr[1] + '\n' + arr[2]);
    console.log(`Player ${currentPlayer}, please make your move by entering coordinates as 'x,y': `);
  }

});
