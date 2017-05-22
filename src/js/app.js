// load jQuery
$(()=>{
// TEST jQuery is working
  console.log(`jQuery is working!`);//passed. output is jQuery is working!


//grab DOM elements
  const $checkersBoard = $('#checkers-board');
  const $squaresOnBoard = $('.squares');
  const $pieces = $('.pieces');
  //player1 piece class
  const $player1 =$('.player1');
  //player2 piece class
  const $player2 =$('.player2');
  let $player1Pieces = undefined;//not yet generated
  //player2 pieces
  let $player2Pieces = undefined;//not yet generated
  //the selected class
  const $selected =$('#checkers-board .pieces .player1 .selected');//is this a dom element?


//TEST dom elements are working
  console.log(`${$checkersBoard} `);//output is object Object


//setup GLOBAL VARIABLES
//board array with rows and columns to simulate the real world 8x8 board
  const checkersBoard = [
    [  0,  1,  0,  1,  0,  1,  0,  1 ],
    [  1,  0,  1,  0,  1,  0,  1,  0 ],
    [  0,  1,  0,  1,  0,  1,  0,  1 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  0,  0,  0,  0,  0,  0,  0,  0 ],
    [  2,  0,  2,  0,  2,  0,  2,  0 ],
    [  0,  2,  0,  2,  0,  2,  0,  2 ],
    [  2,  0,  2,  0,  2,  0,  2,  0 ]
  ];

//incremental arrays
  const pieces = [];
  const squares = [];
//players
  const player1 = 1;
  const player2 = 2;
//players turn
  let playerTurn = null;
//counters
  let countSquares = 0;
  let countPieces = 0;
//array with view port conversion with top and left
//Viewport Minimum (vmin) — This unit is based on
//the smaller dimension of the viewport.
//If the viewport height is smaller than the width,
//the value of 1vmin will be equal to 1% of the viewport height.
//Similarly, if the viewport width is smaller than the height, the value of 1vmin will be equal to 1% of the viewport width.
  const viewportConversion = ['0vmin','10vmin','20vmin','30vmin','40vmin','50vmin','60vmin','70vmin'];

  //call the SETUP function/method to create the board and add pieces
  setup();

  function setup(){
    //player 1 always starts
    playerTurn = player1;
    //loop through the array called checkersBoard indexed at 0
    for (let row = 0; row < checkersBoard.length; row++) {
      checkersBoard[row];
        //TEST the rows index is working
        // console.log(row);//passed. output is 0,1,2,3,4,6,7
        //loop through the array elements or columns

      for (let column = 0; column < checkersBoard[row].length; column++) {
        checkersBoard[row][column];
        //TEST the column index is being looped through
          // console.log(column);//passed. output is 0,1,2,3,4,6,7 foreach column

        //if the row is odd and the column even add a square
        if(row % 2 === 1 && column % 2 === 0 ){
            //TEST the row is correct-odd
            // console.log(row);//pass. output is 1,3,5,7
              //TEST the column is correct-even
              // console.log(column);//passed. output is 0,2,4,6
              //append a div representing a square to the $squaresOnBoard div with class
          $squaresOnBoard.append(`<div class='square' id='square${countSquares}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]}'></div>`);
              //create a new squareObject and add the number of squares count to the squares counters
              //use the element id and position as arguments to create the squares
          squares[countSquares] = new square($('#squares'+countSquares), [parseInt(row), parseInt(column)]);
          countSquares++;
              // //TEST the countSquares works
              // console.log(countSquares);//passed. output is 1 to 16 index based is 0 to 15
        }else if(row % 2 === 0 && column % 2 === 1) {//otherwise if row is even.
            //TEST the column is correct-odd
            // console.log(column);//passed. output is 1,3,5,7
          $squaresOnBoard.append(`<div class='square' id='square${countSquares}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]}'></div>`);
          squares[countSquares] = new square($('#square'+countSquares), [parseInt(row), parseInt(column)]);
              // console.log(`id='square${countSquares}`);
          countSquares++;

        }//end of else statement

            //add the pieces to the checkersBoard
        if(checkersBoard[row][column] === player1) {
          $player1.append(`<div class='player1-pieces' id='${countPieces}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]};'></div>`);
          pieces[countPieces] = new piece($('#'+countPieces), [parseInt(row), parseInt(column)]);
          countPieces++;
            //TEST value of checkersBoard[row][column]
          // console.log(`checkersBoard row is: ${checkersBoard[row]} `);
          // console.log(`checkersBoard column is: ${checkersBoard[column]} `);
          // console.log(`checkersBoard row and column is: ${checkersBoard[row][column]}`);//passed.output is 1
        }else if(checkersBoard[row][column] === player2) {
          $player2.append(`<div class='player2-pieces' id='${countPieces}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]};'></div>`);
          pieces[countPieces] = new piece($('#'+countPieces), [parseInt(row), parseInt(column)]);
          countPieces++;
            //TEST value of checkersBoard[row][column]
          // console.log(`checkersBoard row is: ${checkersBoard[row]} `);
          // console.log(`checkersBoard column is: ${checkersBoard[column]} `);
          // console.log(`checkersBoard 2 row and column is: ${checkersBoard[row][column]}`);//passed. output is 2
        }

      }//end of inner for loop
    }//end of outter for loop
  }//end of setup function

  //player1 pieces grabbing these here after they've been generated declare at the top.
  $player1Pieces =$('.player1-pieces');
  //player2 pieces
  $player2Pieces =$('.player2-pieces');

  //SQUARE is empty
  function squareIsEmpty(row, column){
    //TEST row and column
    this.row = row;
    this.column = column;
    console.log(`value of row:${row} and value of column: ${column}`);
    //using a tenary operator (an operator accepting 3 operands)as shorthand
    //to if else check if there's an object
    //on the row and column (square)
    checkersBoard[row][column] === 0 ? true : false;
  }



//SQUARE
 //create a square object to attach to the checkersBoard
  function square (element, position) {
    //using this to give local variables a context
    //element is the the div linked to the DOM
    this.element = element;
    // the positions are represented by the multidimensional array as row and column format
    this.position = position;
    //TEST the square position
    // console.log(`This squares' position is: ${position}`);
    //if square is in range from the piece
    this.inRange = function(piece) {
      if(distance(this.position[0], this.position[1], piece.position[0],
                  piece.position[1]) === Math.sqrt(2)) {
      //normal-move
        return 'normal-move';
      } else if(distance(this.position[0], this.position[1],
                  piece.position[0], piece.position[1]) === 2 * Math.sqrt(2)) {
      //jump-move
        return 'jump-move';
      }
    };
  }

  //DISTANCE
  // We use the Pythagoras Theorem to derive a formula for
  // finding the distance between two points in 2- and 3- dimensional space.
  function distance(x1,x2,y1,y2){
    return Math.sqrt(Math.pow((x1-x2),2)+ Math.pow((y1-y2),2));
  }

  //PIECES
  function piece (element, position) {
    //using this to give local vars a context
    //element is the the div linked to the DOM
    this.element = element;
    // console.log(this.element);
    //positions on gameBoard array in format row, column
    this.position = position;
    //TEST the position
    // console.log(`The piece position is: ${position}`);

    //who's piece is it, player place holder
    this.player = '';
    //figure out player by piece id
    if(this.element < 12)
      this.player1;
    else
      this.player2;
  }

  // CLICK EVENTS
  $squaresOnBoard.on('click',()=>{
    //TEST the click event works.
    console.log(`click events works on the squares!`);
  });

  //SELECTING PIECES
  $pieces.on('click',()=>{
    //TEST the click event works.
    console.log(`click events works on the pieces!`);
    // $player2Pieces.toggleClass('selected');
    //TEST to see the id on the pieces, will use this to select each one.
    // console.log($player1Pieces);
    console.log($(this).attr('class'));//pieces div has no id therefore returns undefined
    const classn = $(this).parent().attr('class');
    console.log(`This is a parent class name: ${classn}`);
    // console.log(`This is a class name: ${classn}`);

  });

  // figuring out how to grab single piece
  //TEST for grabbing id's
  $player1.on('click',()=>{
    console.log(`This is player 1 div and it's been clicked`);

    console.log($(this).attr('id'));//id of the current div..output is undefined
    // const id = event.target.id;
    // console.log(id);

  });



  $player1Pieces.on('click', (e)=> {
    $player1Pieces.removeClass('selected');
    $(e.target).addClass('selected');
    const $test = $('.player1');
    $test.toggleClass('selected');
    console.log(`Output of the test : ${$test}`);

    // $player1Pieces.toggleClass('selected');
    // const id = $(event.target);//using event.target  to get the child id.
    // console.log(id.attr('id'));//passed. outputs the div id of the selected piece
    // console.log($(this).attr('id'));//$player1Pieces div has no id therefore returns undefined
  });

  $player2Pieces.on('click', ()=>{
    $player2Pieces.toggleClass('selected');
  });

});//end of jQuery load
