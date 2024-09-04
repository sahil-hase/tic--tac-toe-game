var turn = 'X';
var gameOver = false;


function clickHandler(id) {

  var cell = document.getElementById(id);


  if (gameOver || cell.innerHTML !== '') {
    return;
  }


  cell.innerHTML = turn;


  checkWin();


  turn = (turn === 'X') ? 'O' : 'X';
}


function checkWin() {

  var cells = [
    document.getElementById('b1'),
    document.getElementById('b2'),
    document.getElementById('b3'),
    document.getElementById('b4'),
    document.getElementById('b5'),
    document.getElementById('b6'),
    document.getElementById('b7'),
    document.getElementById('b8'),
    document.getElementById('b9')
  ];


  for (var i = 0; i < 3; i++) {
    if (cells[i * 3].innerHTML === cells[i * 3 + 1].innerHTML &&
        cells[i * 3].innerHTML === cells[i * 3 + 2].innerHTML &&
        cells[i * 3].innerHTML !== '') {

      gameOver = true;
      highlightWinningCells(cells[i * 3], cells[i * 3 + 1], cells[i * 3 + 2]);
      announceWinner(cells[i * 3].innerHTML);
      return;
    }
    if (cells[i].innerHTML === cells[i + 3].innerHTML &&
        cells[i].innerHTML === cells[i + 6].innerHTML &&
        cells[i].innerHTML !== '') {
   
      gameOver = true;
      highlightWinningCells(cells[i], cells[i + 3], cells[i + 6]);
      announceWinner(cells[i].innerHTML);
      return;
    }
  }


  if (cells[0].innerHTML === cells[4].innerHTML &&
      cells[0].innerHTML === cells[8].innerHTML &&
      cells[0].innerHTML !== '') {
 
    gameOver = true;
    highlightWinningCells(cells[0], cells[4], cells[8]);
    announceWinner(cells[0].innerHTML);
    return;
  }
  if (cells[2].innerHTML === cells[4].innerHTML &&
      cells[2].innerHTML === cells[6].innerHTML &&
      cells[2].innerHTML !== '') {

    gameOver = true;
    highlightWinningCells(cells[2], cells[4], cells[6]);
    announceWinner(cells[2].innerHTML);
    return;
  }
}

function highlightWinningCells(cell1, cell2, cell3) {
  cell1.style.color = 'red';
  cell2.style.color = 'red';
  cell3.style.color = 'red';
}

function announceWinner(winner) {
  document.getElementById('print').innerHTML = 'Player ' + winner + ' won!';
}

document.getElementById('b1').addEventListener('click', function() { clickHandler('b1'); });
document.getElementById('b2').addEventListener('click', function() { clickHandler('b2'); });
document.getElementById('b3').addEventListener('click', function() { clickHandler('b3'); });
document.getElementById('b4').addEventListener('click', function() { clickHandler('b4'); });
document.getElementById('b5').addEventListener('click', function() { clickHandler('b5'); });
document.getElementById('b6').addEventListener('click', function() { clickHandler('b6'); });
document.getElementById('b7').addEventListener('click', function() { clickHandler('b7'); });
document.getElementById('b8').addEventListener('click', function() { clickHandler('b8'); });
document.getElementById('b9').addEventListener('click', function() { clickHandler('b9'); });