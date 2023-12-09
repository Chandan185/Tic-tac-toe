let restart = document.getElementById('rbtn');
let text = document.getElementById('text');
let Playboard = document.getElementById('board');
let square = Array.from(Playboard.children);
let filled = Array(9).fill(null);
let X_TEXT = 'X';
let O_TEXT = 'O';
let currentPlayer = X_TEXT;

startgame();

function startgame() {
  square.forEach((sq) => {
    sq.addEventListener('click', (e) => {
      let index = e.target.id;
      if (!filled[index]) {
        e.target.innerText = currentPlayer;
        filled[index] = currentPlayer;
        let Ended = gameEnd();
        if (Ended) {
          text.innerText = currentPlayer + ' has won !';
          filled.fill('X');
        }
        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
      }
    });
  });
}

function restartgame() {
  square.forEach((sq) => {
    sq.innerText = '';
  });
  text.innerText = 'Tic Tac Toe !';
  filled.fill(null);
  currentPlayer = X_TEXT;
}
restart.addEventListener('click', restartgame);

function gameEnd() {
  //checking for rows
  for (let i = 0; i < 9; i += 3) {
    let s = '';
    for (let j = i; j < i + 3; j++) {
      s += filled[j];
    }
    if (s === 'XXX' || s === 'OOO') {
      return true;
    }
  }
  //checking for columns
  for (let j = 0; j < 3; j++) {
    let s = '';
    for (let i = j; i < 9; i += 3) {
      s += filled[i];
    }
    if (s === 'XXX' || s === 'OOO') {
      return true;
    }
  }
  //check for digonal
  let left = filled[0] + filled[4] + filled[8];
  let right = filled[2] + filled[4] + filled[6];
  if (left === 'XXX' || left === 'OOO' || right === 'XXX' || right === 'OOO') {
    return true;
  }
  return false;
}
