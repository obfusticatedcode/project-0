
//load up jQuery
$(()=>{
  //check if jQuery is working by console logging
  console.log('clicked and jQuery is working');

  //VARIABLES
  // grabbing the board from DOM
  const $checkersBoard = $('#checkers-board');
  const $squareOnBoard = $('.square');
  const $player1Pieces = $('.player1-pieces');
  //an array to store the 24 pieces of checkers
  const pieces = [];
  //an array to store the squares
  const squares = [];
  //the player depending on whether it's player one or two
  let player = null;
  //set the king status to boolean false initially
  let king = false;
  //the checkersBoard multidimensional array with piece postions to simulate the real world game board
  const checkersBoard =
    [
    [  0,  1,  0,  1,  0,  1,  0,  1 ],
    [  1,  0,  1,  0,  1,  0,  1,  0 ],
    [  0,  1,  0,  1,  0,  1,  0,  1 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  2,  0,  2,  0,  2,  0,  2,  0 ],
    [  0,  2,  0,  2,  0,  2,  0,  2 ],
    [  2,  0,  2,  0,  2,  0,  2,  0 ]
    ];


  setupBoard();




  //CHECKERS BOARD
  //to the checkersBoard append a div with a class square and add a backgroundColor alternate
  //between black and white.
  // creating the checkers-board by looping through the multidimensional array and adding divs
  function setupBoard(){
    let countSquares = 0;
    for(let row =0; row < checkersBoard.length; row++) {
      const rowArray = checkersBoard[row];
      for (let column = 0; column < rowArray.length; column++) {

        //if the row is odd and the colunm is even set a square
        // const color = parseInt((column / 8) + column) % 2 === 0 ? 'white' : 'black';
        // $checkersBoard.append(`<div class='square ${color}' id='${countSquares}'></div>`);
        countSquares++;

        console.log('test');
        console.log(rowArray[column]);
      }

    }

  }//end of setupBoard function



  //SQUARES
  function square(element, position){
    //using this to give local vars a context
    //element is the the div linked to the DOM
    this.element = element;
    // the postions are represented by the multidimensional array as row and column format
    this.position = position;
    //this is not a king yet as king is default to false
    this.inRange(piece);
  }

  //DISTANCE
  // We use the Pythagoras Theorem to derive a formula for
  // finding the distance between two points in 2- and 3- dimensional space.
  function distance(x1,x2,y1,y2){
    return Math.sqrt(Math.pow((x1-x2),2)+ Math.pow((y1-y2),2));
  }

  //RANGE
  function inRange(piece){
    if(distance(this.position[0],this.position[1],
                this.position[0],this.position[1]) === Math.sqrt(2)){
      return 'normal-move'; //normal move
    }else if(distance(this.position[0], this.position[1],
                this.position[0],this.position[1]) === (Math.sqrt(2))*2){
      return 'jump-move'; //jump move

    }
  }

  //PIECES
  //the element in html and the position of the piece as ensure it's not a king
  //depending on the position of the piece, we can tell whether it's player 1 or 2 piece
  function piece(element, position){
    //using this to give local vars a context
    //element is the the div linked to the DOM
    this.element = element;
    // the postions are represented by the multidimensional array as row and column format
    this.position = position;
    //this is not a king yet as king is default to false
    this.king;
  }

  //turning a regular piece into a king
  function kingMaker(){
    //element is the the div linked to the DOM
    this.element;
    // set king to true
    this.king = true;
  }










});//end of jQuery window load
