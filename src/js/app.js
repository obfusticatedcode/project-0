//loading JS
$(()=>{

  //GLOBAL VARIABLES
  const width = 46;
  const border = 2;
  const $board = $('div#board');
  const $pieces = $('div#pieces');
  const $resetButton = $('#reset-button');
  let coords = null;//setting coords globally so constantly updating



  //Creating the 64 squares and adding them to the DOM
  const squareCount = 8*8; //8 rows by 8 columns; zero based index
  for (let i = 0;i<squareCount;i++) {

  //this line creates a new div with the class 'square'
  //and appends it to the div with id 'board'
    $board.append($('<div/>').addClass('square'));
  }


  //set up the board with the correct classes for the light and dark squares
  setUpBoard();


      //creating the 24 pieces and adding them to the DOM
  const pieceCount = 24;
  for (let i=0;i<pieceCount;i++) {

    //this line appends an empty div with the class 'piece' to the div with id 'pieces'
    $pieces.append($('<div/>').addClass('piece'));

  }


  //sets up the classes for the different types of piece
  setUpPieces();

//LIGHT PIECES
  //this loop moves all the light pieces to their initial positions
  $('div.piece.light').each(function(index,piece) {

    //turning the index (from 0 - 11)
    //into a x,y square coordinate using math
    const y = Math.floor(index / 4);
    const x = (index % 4) * 2 + (1 - y%2);

    //turning the x,y coordingate into a pixel position
    const pixelPosition = getPixels(x,y);
    //actually moving the piece to its initial position
    movePieceTo($(piece),pixelPosition.top,pixelPosition.left);
  });

//DARK PIECES
    //this loop moves all the dark pieces to their initial positions
  $('div.piece.dark').each(function(index,piece) {
    //turning the index (from 0 - 11)
    //into a x,y square coordinate using math
    const y = Math.floor(index/4) + 5;
    const x = (index % 4) * 2 + (1-y%2);

    //turning the x,y coordinate into a pixel position
    const pixelPosition = getPixels(x,y);
    //moving the piece to its initial position
    movePieceTo($(piece),pixelPosition.top,pixelPosition.left);
  });


  //EVENTS

    //resetting the game.
  $resetButton.on('click', ()=>{
    reset();
  });

  $('div.piece').on('click',(event)=>{
    //turn `this` into a jQuery object
    const $thisPiece = $(event.target);
    //toggling the 'selected' class of this piece
    //and possible deselecting other pieces
    toggleSelect($thisPiece);
    resetMovables();
    //get the legal moves for this
    if ($thisPiece.hasClass('selected')) {
      getMovableSquares($thisPiece).addClass('movable');
    }

  });//end of piece click event

  //checks the currentPosition of the clicked or selected div and returns the coords.
  function currentPosition(){
    const position = $(event.target).position();
    coords = getCoords(position.top,position.left);
    // console.log(coords);//getting the location of the piece
    return coords;

  }

  $('div.square').on('click', (e)=>{
    currentPosition();//the currentPosition of the square; coords
    // console.log('coords', coords);
    //turn `e or event` into a jQuery object
    const $pieceToMove = $(e.target);


    //if $this is a legal square to move to...
    if ($pieceToMove.hasClass('movable')) {

          //get the piece with the class 'selected'
      const $selectedPiece = $('div.piece.selected');

          //only move if there is exactly one selected piece
      if ($selectedPiece.length === 1) {
            //get the index of the square
            //and translate it to pixel position
        const index = $pieceToMove.prevAll().length;
        const x = index % 8;
        const y = Math.floor(index / 8);
        const pixels = getPixels(x,y);
            //actually do the moving
        movePieceTo($selectedPiece,pixels.top,pixels.left);
          //removeCapturedPieces
        removeCapturedPieces($pieceToMove); 
            //increment the move counter
        incrementmoveCounter();
            //un-select the piece
        $selectedPiece.removeClass('selected');

            //set the new legal moves
        $('div.square').removeClass('movable');
        resetMovables();
        // getMovableSquares().addClass('movable');
      }

    }

  });


  // MORE FUNCTIONS
  //this function removes the data item with key 'jumpedPieces' from every div.square
// and removes the class 'movable' from every square
  function resetMovables() {
    $('div.square').removeData('jumpedPieces').removeClass('movable');
  }

  //function for translating an x,y coordinates to a pixel position
  //the convention is that the square in the upper left corner is at position 0,0
  //the square in the upper right, at 7,0 and the lower
  //right at 7,7
  function getPixels(x,y) {
      //takes an x,y position, returns
      //pixels from the left, right
    return {
      'top': (y * (width+border))+'px',
      'left': (x * (width+border))+'px'
    };
  }

  //function for turning a pixel position
  //into the x,y coordinate of a square on the board
  //it follows the same coordinate convention as getPixels
  function getCoords(top,left) {
      //returns an x and a y
      //given a top and left pixels
    return {
      'x': left / (width + border),
      'y': top / (width + border)
    };
  }



  //function for returning
//the set of legal moves given a piece
// this also stores jumped pieces in a data element of each square that can be moved to
  function getMovableSquares($piece) {

    //select all of the squares
    const $squares = $('div.square');

    //select the occupied ones using the jQuery map() method
    //map creates a new object from an existing one
    //using a translation function
    var takenSquares = {};
    $('div.piece').each(function(index,piece) {

            //this function translates a piece
      const position = $(piece).position();
      const coords = getCoords(position.top,position.left);
      const squareIndex = coords.y * 8 + coords.x;
      takenSquares[squareIndex] = $(piece);
    });

    const coords = getCoords($piece.position().top,$piece.position().left);

    //lights move down
    const lightVectors = [
        {x: 1,y: 1},
        {x: -1,y: 1}
    ];
    //darks move up
    const darkVectors = [
        {x: 1,y: -1},
        {x: -1,y: -1}
    ];
    //kings move any which way
    const kingVectors = lightVectors.concat(darkVectors);


    let vectors;
    if ($piece.hasClass('king')) {
      vectors = kingVectors;
    } else if ($piece.hasClass('light')) {
      vectors = lightVectors;
    } else {
      vectors = darkVectors;
    }

    const outOfBounds = function(coords) {
      return !(coords.x >= 0 && coords.x < 8 && coords.y >= 0 && coords.y < 8);
    };

    let $legalSquares = $();
    const buildMoves = function(coords,vectors,jumpsOnly) {


      if (outOfBounds(coords)) return;

        //our current square is at coords
      const $currentSquare = $squares.eq(coords.y*8 + coords.x);

      $.each(vectors,function(index,vector) {


        const newCoords = {
          x: vector.x + coords.x,
          y: vector.y + coords.y
        };


        if (outOfBounds(newCoords)) return;
        const newSquareIndex = 8*newCoords.y + newCoords.x;
            //if the square is taken,
        if (takenSquares[newSquareIndex]) {
                //it gets interesting
                //ok - so we can only jump if their
                //piece is different from ours
          if ($piece.hasClass('dark')) {
            if (takenSquares[newSquareIndex].hasClass('dark')) return;
          } else {
            if (takenSquares[newSquareIndex].hasClass('light')) return;
          }


          const jumpCoords = {
            x: vector.x*2 + coords.x,
            y: vector.y*2 + coords.y
          };
          if (outOfBounds(jumpCoords)) return;

          const jumpSquareIndex = jumpCoords.y*8 + jumpCoords.x;
                //if the jump square is free...
                //add it and the data-jumped-pieces
          if (!takenSquares[jumpSquareIndex]) {
            const $newSquare = $squares.eq(jumpSquareIndex);
                    //if we haven't already seen it
            if (!$newSquare.is($legalSquares)) {

                        //add the passed over square to it
              $legalSquares = $legalSquares.add($newSquare);

                        //and the jumped squares from how we got here
              let $jumpedPieces = takenSquares[newSquareIndex];
              if ($currentSquare.data('jumpedPieces')) {
                $jumpedPieces = $jumpedPieces.add($currentSquare.data('jumpedPieces'));
              }
              $newSquare.data('jumpedPieces',$jumpedPieces);

                        //and recurse, with jumpsOnly set to true
              buildMoves(jumpCoords,vectors,true);
            }
          }
        } else if (!jumpsOnly) {
          const $newSquare = $squares.eq(newSquareIndex);
          $newSquare.data('jumpedPieces',$());
          $legalSquares = $legalSquares.add($newSquare);
        }

      });
    };
    buildMoves(coords,vectors,false);
    return $legalSquares;

  }//end of getMovableSquares

  function setUpPieces() {
      //select all the divs with class 'piece'
    $('piece');
//add the 'light' class to half of them
    $('div.piece:even').addClass('light');
//jQuery's even and odd selector methods to assign the classes .light and .dark.
//add the 'dark' to the other half
    $('div.piece:odd').addClass('dark');

  }

  function movePieceTo($piece,newTop,newLeft) {
      //set the css 'top' and 'left'
      //attributes of the passed piece
      //to the arguments newTop and newLeft
    $piece.css('top', newTop);
    $piece.css('left', newLeft);

  }

  function setUpBoard() {
      //iterate through all of the divs with class `square`
      //figure out whether each one should be
      //light or dark, and assign the proper class
    const $eachSquare = $('div.square');
    $eachSquare.each(function(index){
      if(lightOrDark(index)=== 0){
        $(this).addClass('light');
      }else{
        $(this).addClass('dark');
      }
    });
      //inner helper function that takes a number between
      //0 and 63 (inclusive) and returns 1 if the square should be
      //dark, and 0 if the square should be light
    function lightOrDark(index) {
      const x = index % 8;
      const y = Math.floor(index / 8);
      const oddX = x % 2;
      const oddY = y % 2;
      return (oddX ^ oddY);
    }

  }

  function toggleSelect($piece) {
      //if $piece has the class 'selected',remove it
      //if $piece does not have the class 'selected'
      //make sure no other divs with the class 'piece'
      //have that class, then set $piece to have the class
    if($piece.hasClass('selected'))
      $piece.removeClass('selected');
    else {
      $('div.piece').each(function(index,piece) {
        if($(piece).hasClass('selected'))
          $(piece).removeClass('selected');
      });
      $piece.addClass('selected');
    }

  }//end of toggleSelect function

  function incrementmoveCounter() {
      //gets the html of the span with id moveCounter
      //turns it into a number
      //increments it by one
      //sets the html of the span with id moveCounter
      //to the new move count
    $('#moveCounter').html(parseInt($('#moveCounter').html(),10)+1);
  }

// this function gets the jQuery object stored in
// the data object of $square under the key 'jumpedPieces'
// and removes every element in that jQuery selection
  function removeCapturedPieces($square) {
    $square.data('jumpedPieces').remove();
  }

  //this resets the game by effectively reloading the page from cache
  function reset(){
    location.reload();
  }




});//end of JS load


/*
TODO:
1. Player change from player 1 to player 2
2. Figure out how to stop illegal moves.
  -only make two postitions available at any given time
  -once the piece has moved into a position make

  -On click of sqaure
  -get piece on sqaure (e.target)
  -check if piece belongs to p1 or p2
  -check relevant squares
    .if index of currentSquare
    .if square is not in the first column
    check square diagonally left and movable class if empty
    .if square is not in the last column
    check square diagonally right and movable class if empty
  -once piece is moved or if un-selected remove movable class from all squares.

index (position)% width === 0 ...represents the first column
index % width === width-1 ...represents the last column

index + width-1 for player1 is going left diagonally
index + width-1 for player1 is going right diagonally

index - width+1 for player2 is going left diagonally
index - width-1 for player2 is going right diagonally


3. Jump moves to make the opponents piece disappear from the board and reset
  the positon
4. King maker function
5. How to take in the top right position
6.Reset the game better
//
//using x and y values.
//x value on the firstColumn will always be zero since the starting is a zero based index
//y value on the lastColumn will always be seven since the last index on a 8*8 is 7
//darkPiece moving right is x + 1 and y - 1
//darkPiece moving left is x - 1 and y - 1
//lightPiece moving right is x - 1 and y + 1
//lightPiece moving left is x + 1 and y + 1
//And to jump will be +2 single movements.
//check if empty...by checking if a square is movable i.e. getMovableSquares().addClass('movable');
//if empty
// const darkPieceMoveRight =(index.x + (index.x + 1)), (index.y + (index.y - 1)); //I need to get a set of coords back and make that a legalMoves




// if (index % width === 0 && $darkPiece){
//   index + width + 1
// }
// take the index x and y value as index and check
//if index % width === 0 the first column or
//if index % width === width-1 the last column
//if first column is true then check color/p1 or p2
//p1
//if p1 check square diagonally left if empty using
//index + width + 1 add the class 'movable'
//if last column is true then check color/p1 or p2
//if p1 check square diagonally right if empty using
//index + width-1 add the class 'movable'
//use CSS to highlight the movable squaures (legal moves)
//p2
//else it's p2

*/
