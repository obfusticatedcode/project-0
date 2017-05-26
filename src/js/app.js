//loading JS
$(()=>{

  //GLOBAL VARIABLES
  const width = 46;
  const border = 2;
  const $board = $('div#board');
  const $pieces = $('div#pieces');
  const $resetButton = $('#reset-button');
  const $rulesButton = $('#rules-button');
  const $instructions = $('.instructions');
  const $winner = $('#winner');


  let coords = null;//setting coords globally so it's constantly updating
  //set up the board with the correct classes for the light and dark squares
  setUpBoard();
  //sets up the classes for the different types of piece
  setUpPieces();
  //setting up the darkPieces
  darkPieces();
  // setting up the lightPieces
  lightPieces();


  //LIGHT PIECES
  function lightPieces(){
    const $lightPieces = $('div.piece.light');
    //this loop moves all the light pieces to their initial positions
    $lightPieces.each(function(index,piece) {
      // TEST checking the length
      console.log($lightPieces.length);
      //turning the index (from 0 - 11)
      //into a x,y square coordinate using maths
      const y = Math.floor(index / 4);
      const x = (index % 4) * 2 + (1 - y%2);

      //turning the x,y coordinate into a pixel position
      const pixelPosition = getPixels(x,y);
      //actually moving the piece to its initial position
      movePieceTo($(piece),pixelPosition.top,pixelPosition.left);
    });
  }//end of lightPieces function


  //DARK PIECES
  function darkPieces(){
    const $darkPieces =   $('div.piece.dark');
        //this loop moves all the dark pieces to their initial positions
    $darkPieces.each(function(index,piece) {
        //turning the index (from 0 - 11)
        //into a x,y square coordinate using maths
      const y = Math.floor(index/4) + 5;
      const x = (index % 4) * 2 + (1-y%2);

        //turning the x,y coordinate into a pixel position
      const pixelPosition = getPixels(x,y);
        //moving the piece to its initial position
      movePieceTo($(piece),pixelPosition.top,pixelPosition.left);
    });
  }//end of darkPieces function



  //EVENTS
  function pieceSelect(){
    $('div.piece').on('click',(event)=>{
        //selected variable
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

  }

  // BUTTONS
  //resetting the game.
  $resetButton.on('click', ()=>{
    reset();
    // setting up the pieces after emptying them.
  });

  //hiding and showing the rules.
  $rulesButton.on('click', ()=>{
    $instructions.toggle('slow');
    console.log(`Clicking here works`);
  });



  $('div.square').on('click', (e)=>{

    currentPosition();//the currentPosition of the square; coords
    //turn `e or event` into a jQuery object
    const $pieceToMove = $(e.target);


    //if $(this) is a legal square to move to...
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
        //.prevAll().length is used to get the index
        //of the selected piece
        checkKing($selectedPiece,$pieceToMove.prevAll().length);
        //de-select the piece to end the move
        $selectedPiece.removeClass('selected');

        //set the new legal moves
        $('div.square').removeClass('movable');

        // TEST. testing the winning conditions by checking the number of pieces left on the board
        piecesLeft();

        //increment the move counter
        incrementMoveCounter();

        const color = $selectedPiece.hasClass('light') === true ? 'light' : 'dark';

        incrementMoveCount(color);
        //reset the squares to allow moves
        resetMovables();

      }
    }

  });


// MORE FUNCTIONS
//this function removes the data item with key 'jumpedPieces' from every div.square
// and removes the class 'movable' from every square
//checks the currentPosition of the clicked or selected div and returns the coords.
  function currentPosition(){
    const position = $(event.target).position();
    coords = getCoords(position.top,position.left);
    return coords;
  }

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

  //function for returning the set of legal moves given a piece
// this also stores jumped pieces in a data element of each square that can be moved to
  function getMovableSquares($piece) {

    //select all of the squares
    const $squares = $('div.square');

    //select the occupied ones using the jQuery map() method
    //map creates a new object from an existing one
    //using a translation function
    const takenSquares = {};
    $('div.piece').each(function(index,piece) {

            //this function translates a piece
      const position = $(piece).position();
      const coords = getCoords(position.top,position.left);
      const squareIndex = coords.y * 8 + coords.x;
      takenSquares[squareIndex] = $(piece);
    });

    const coords = getCoords($piece.position().top,$piece.position().left);

    //lights move down the board
    const lightDirection = [
        {x: 1,y: 1},
        {x: -1,y: 1}
    ];
    //darks move up the board
    const darkDirection = [
        {x: 1,y: -1},
        {x: -1,y: -1}
    ];
    //kings move in any direction
    const kingDirection = lightDirection.concat(darkDirection);

    let direction;
    if ($piece.hasClass('king')) {
      direction = kingDirection;
    } else if ($piece.hasClass('light')) {
      direction = lightDirection;
    } else {
      direction = darkDirection;
    }

    const outOfBounds = function(coords) {
      return !(coords.x >= 0 && coords.x < 8 && coords.y >= 0 && coords.y < 8);
    };

    let $legalSquares = $();
    const buildMoves = function(coords,direction,jumpsOnly) {
      if (outOfBounds(coords)) return;
        //current square is at coords
      const $currentSquare = $squares.eq(coords.y*8 + coords.x);
      $.each(direction,function(index,direction) {

        const newCoords = {
          x: direction.x + coords.x,
          y: direction.y + coords.y
        };

        if (outOfBounds(newCoords)) return;
        const newSquareIndex = 8*newCoords.y + newCoords.x;
            //if the square is taken,
        if (takenSquares[newSquareIndex]) {

                //Can only jump if piece is different
          if ($piece.hasClass('dark')) {
            if (takenSquares[newSquareIndex].hasClass('dark')) return;
          } else {
            if (takenSquares[newSquareIndex].hasClass('light')) return;
          }

          const jumpCoords = {
            x: direction.x*2 + coords.x,
            y: direction.y*2 + coords.y
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
              buildMoves(jumpCoords,direction,true);
            }
          }
        } else if (!jumpsOnly) {
          const $newSquare = $squares.eq(newSquareIndex);
          $newSquare.data('jumpedPieces',$());
          $legalSquares = $legalSquares.add($newSquare);
        }

      });
    };
    buildMoves(coords,direction,false);
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

  //actually moving the piece
  function movePieceTo($piece,newTop,newLeft) {
      //set the css 'top' and 'left'
      //attributes of the passed piece
      //to the arguments newTop and newLeft
    $piece.css('top', newTop);
    $piece.css('left', newLeft);
  }

  function setUpBoard() {

    //Creating the 64 squares and adding them to the DOM
    const squareCount = 8*8; //8 rows by 8 columns; zero based index
    for (let i = 0;i<squareCount;i++) {
    //this line creates a new div with the class 'square'
    //and appends it to the div with id 'board'
      $board.append($('<div/>').addClass('square'));
    }

    //creating the 24 pieces and adding them to the DOM
    const pieceCount = 24;

    for (let i=0;i<pieceCount;i++) {
      //this line appends an empty div with the class 'piece' to the div with id 'pieces'
      $pieces.append($('<div/>').addClass('piece'));
    }
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

  }//end of setUpBoard()

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

  const $moveCounter = $('#moveCounter');
  function incrementMoveCounter() {
      //gets the html of the span with id moveCounter turns it into a number
      //increments it by one
      //sets the html of the span with id moveCounter
      //to the new move count
    $moveCounter.html(parseInt($moveCounter.html())+1);

  }


  pieceSelect();// player to select a piece
  // Player change from player 1 to player 2
    //this function allows the players to be changed.
  function incrementMoveCount(color) {
      //gets the html of the span with id lightMoveCount or darkMoveCount
      //turns it into a number increments it by one
      //sets the html of the span with id lightMoveCount or darkMoveCount to the new move count
    let whichCounter = '';
    color === 'light' ? whichCounter = '#lightMoveCount' : whichCounter = '#darkMoveCount';
    let $moves = parseInt($(whichCounter).html());
    $moves++;

    $(whichCounter).html($moves);
    console.log($moves);
    //if the number is even then it's light's move and odd it's dark's move.
    if ($moves % 2  === 1) {
      console.log(`Hello odd number`);
      console.log($darkPieces);
    } else if($moves % 2 === 0){
      console.log(`Hello even number`);
      console.log($lightPieces);
    }
  }//end of incrementMoveCount()

  //PLAYER ONE AND PLAYER TWO
  //If the move count is even, then player one's turn otherwise player two's turn
  const $lightPieces = $('div.piece.light');
  const $darkPieces = $('div.piece.dark');

// this function gets the jQuery object stored in
// the data object of $square under the key 'jumpedPieces'
// and removes every element in that jQuery selection
  function removeCapturedPieces($square) {
    $square.data('jumpedPieces').remove();
  }

// This function takes a $piece and the index of a square
//squareIndex will be between 0 - 63 (inclusive).
// if the index refers to an element in the first row or last row,
// the class 'king' should be added to the $piece
  function checkKing($piece,squareIndex) {
    for(let i = 0; i < 64; i++){
      if (squareIndex < 8 || squareIndex >= 56){
        $piece.addClass('king');
      }
    }
  }

// WINNING
//winning conditions: If one player only has their pieces on the board left
//they win.
  function piecesLeft(){
    const darkPieces = $darkPieces.length;
    const lightPieces = $lightPieces.length;
    if (darkPieces === 0) {
      $winner.text(`Player 1 Wins`);
      return $winner.slideDown(`Player 1 Wins`);
    } else if(lightPieces === 0) {
      console.log(`Player 2 wins`);
      return $winner.text(`Player 2 Wins`);

    } else if (lightPieces === 1 && darkPieces === 1){//and 40 moves are played afterwards
      //yet to code this function
      console.log(`It's a draw`);
      return $winner.text(`It's a draw`);
    }
  }

  //this resets the game by effectively reloading the page from cache
  function reset(){
    location.reload();
  }

});//end of JS load


/*

TODO:
1. Player change from player 1 to player 2 feature request
2. Reset the game by putting the pieces to the original position feature requestf
3. Win conditions, if either player has pieces left on the board while the other doesn't
  then it's a win.
4. Could do more styling to make the game have a smoother feel. (bit vague)
5. Refactor my code.
*/
