
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
  //the player depending on whether it's player one or two
  let player = null;
  //set the king status to boolean false initially
  let king = false;

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
  //the element in html and the position of the piece as ensure it's not a king
  //depending on the position of the piece, we can tell whether it's player 1 or 2 piece
  function piece(element, position){
    //using this to give local vars a context
    this.element = element;
    this.position = position;
    //this is not a king yet
    this.king;
  }

  //turning a regular piece into a king
  function kingMaker(){
    this.element;
    this.king = true;
  }








});//end of jQuery window load
