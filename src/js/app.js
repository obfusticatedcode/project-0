// load jQuery
$(()=>{
// test jQuery is working
  console.log(`jQuery is working!`);//passed. output is jQuery is working!


//grab DOM elements
  const $checkersBoard = $('#checkers-board');
  const $squaresOnBoard = $('.squares');
  const $player1Pieces =$('.player1-pieces');
  const $player2Pieces =$('.player2-pieces');
//test dom elements are working
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
//counters
  let countSquares = 0;
  let countPieces = 0;
//array with view port conversion with top and left
//Viewport Minimum (vmin) — This unit is based on the smaller dimension of the viewport. If the viewport height is smaller than the width, the value of 1vmin will be equal to 1% of the viewport height. Similarly, if the viewport width is smaller than the height, the value of 1vmin will be equal to 1% of the viewport width.
  const viewportConversion = ['0vmin','10vmin','20vmin','30vmin','40vmin','50vmin','60vmin','70vmin'];
//loop through the array called checkersBoard indexed at 0
  for (let row = 0; row < checkersBoard.length; row++) {
    checkersBoard[row];
    //test the rows index is working
    // console.log(row);//passed. output is 0,1,2,3,4,6,7
    //loop through the array elements or columns



    for (let column = 0; column < checkersBoard[row].length; column++) {
      checkersBoard[row][column];
    //test the column index is being looped through
      // console.log(column);//passed. output is 0,1,2,3,4,6,7 foreach column

    //if the row is odd and the column even add a square
      if(row % 2 === 1 ){
        //test the row is correct-odd
        // console.log(row);//pass. output is 1,3,5,7
        if (column % 2 === 0) {
          //test the column is correct-even
          // console.log(column);//passed. output is 0,2,4,6
          //append a div representing a square to the $squaresOnBoard div with class
          $squaresOnBoard.append(`<div class='square' id='square${countSquares}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]}'></div>`);
          //create a new squareObject and add the number of squares count to the squares counters
          //use the element id and position as arguments to create the squares
          squares[countSquares] = new square($('#squares'+countSquares), [parseInt(row), parseInt(column)]);
          countSquares++;
          // //test the countSquares works
          // console.log(countSquares);//passed. output is 1 to 16 index based is 0 to 15
        }
      }else {//otherwise if row is even.
        if (column % 2 === 1) {

          //test the column is correct-odd
          // console.log(column);//passed. output is 1,3,5,7
          $squaresOnBoard.append(`<div class='square' id='square${countSquares}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]}'></div>`);
          squares[countSquares] = new square($('#square'+countSquares), [parseInt(row), parseInt(column)]);
          // console.log(`id='square${countSquares}`);
          countSquares++;
        }
      }//end of else statement

        //add the pieces to the checkersBoard
      if(checkersBoard[row][column] === 1) {
        $player1Pieces.append(`<div class='checkers-piece' id='${countPieces}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]}';'></div>`);
        pieces[countPieces] = new piece($('#'+countPieces), [parseInt(row), parseInt(column)]);
        countPieces++;
        //test value of checkersBoard[row][column]
        console.log(`checkersBoard row is: ${checkersBoard[row]} `);
        console.log(`checkersBoard column is: ${checkersBoard[column]} `);
        console.log(`checkersBoard row and column is: ${checkersBoard[row][column]}`);//passed.output is 1
      }else if(checkersBoard[row][column] === 2) {
        $player2Pieces.append(`<div class='checkers-piece' id='${countPieces}' style='top:${viewportConversion[row]}; left:${viewportConversion[column]}';'></div>`);
        pieces[countPieces] = new piece($('#'+countPieces), [parseInt(row), parseInt(column)]);
        countPieces++;
        //test value of checkersBoard[row][column]
        console.log(`checkersBoard row is: ${checkersBoard[row]} `);
        console.log(`checkersBoard column is: ${checkersBoard[column]} `);
        console.log(`checkersBoard 2 row and column is: ${checkersBoard[row][column]}`);//passed. output is 2
      }


    }//end of inner for loop
  }//end of outter for loop


 //create a square object to attach to the checkersBoard
  function square (element, position) {
    //using this to give local variables a context
    //element is the the div linked to the DOM
    this.element = element;
    // the positions are represented by the multidimensional array as row and column format
    this.position = position;
    //test the square position
    console.log(`This squares' position is: ${position}`);
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
    console.log(this.element);
    //positions on gameBoard array in format row, column
    this.position = position;
    //test the position
    console.log(`The piece position is: ${position}`);

    //who's piece is it, player place holder
    this.player = '';
    //figure out player by piece id
    if(this.element < 12)
      this.player = 1;
    else
      this.player = 2;
  }

});//end of jQuery load
