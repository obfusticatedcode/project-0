
//load up jQuery
$(()=>{
  //check if jQuery is working by console logging
  console.log('clicked');

  //VARIABLES
  // grabbing the board from DOM
  const $checkersBoard = $('#checkers-board');
  //an array to store the 24 pieces of checkers
  const pieces = [];
  //an array to store the squares
  const squares = []; 
  setupBoard();



  //CHECKERS BOARD
  //to the checkersBoard append a div with a class square and add a backgroundColor alternate
  //between black and white.
  // creating the checkers-board by looping through and adding divs
  function setupBoard(){
    for(let i =0; i < 64; i++) {
      const color = parseInt((i / 8) + i) % 2 === 0 ? 'black' : 'white';
      $checkersBoard.append(`<div class='square ${color}' id='${i}'></div>`);
    }
  }

  //PIECES








});//end of jQuery window load
