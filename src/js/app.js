//loading JS
$(()=>{

  //GLOBAL VARIABLES
  const width = 46;
  const border = 2;
  const $board = $('div#board');
  const $pieces = $('div#pieces');

  //utility function for translating an x,y coordinate
  //to a pixel position
  //the convention is that the square in the upper left
  //corner is at position 0,0
  //the square in the upper right, at 7,0 and the lower
  //right at 7,7
  function getPixels(x,y) {
      //ok... so takes an x,y position, returns
      //pixels from the left, right

    return {
      'top': (y * (width+border))+'px',
      'left': (x * (width+border))+'px'
    };
  }

  //utility function for turning a pixel position
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

  //utility function for returning
  //the set of unoccupied dark squares
  //(possible places to move a checker piece)
  function getMovableSquares() {

      //select all of the squares
    const $squares = $('div.square');

      //select the occupied ones using the jQuery map() method
      //map creates a new object from an existing one
      //using a translation function
    const $takenSquares =
          $('div.piece').map(function(index,piece) {

              //this function translates a piece
            const position = $(piece).position();
            const coords = getCoords(position.top,position.left);
            const squareIndex = coords.y * 8 + coords.x;
            return $squares[squareIndex];
          });

    const $out = $('div.square.dark').not($takenSquares);
    return $out;
  }

  $('document').ready(function() {

      //Creating the 64 squares and adding them to the DOM
    const squareCount = 8*8;
    for (let i = 0;i<squareCount;i++) {

          //this line creates a new div with the class 'square'
          //and appends it to the div with id 'board'
      $board.append($('<div/>').addClass('square'));
    }

      //YOUR CODE
      //set up the board with the correct classes
      //for the light and dark squares
    setUpBoard();


      //creating the 24 pieces and adding them to the DOM
    const pieceCount = 24;
    for (let i=0;i<pieceCount;i++) {

          //this line appends an empty div
          //with the class 'piece' to the div with id 'pieces'
      $pieces.append($('<div/>').addClass('piece'));

    }

      //YOUR CODE
      //sets up the classes for the different types of piece
    setUpPieces();

      //this loop moves all the light pieces to their initial positions
    $('div.piece.light').each(function(index,piece) {

          //turning the index (from 0 - 11)
          //into a x,y square coordinate using math
      const y = Math.floor(index / 4);
      const x = (index % 4) * 2 + (1 - y%2);

          //turning the x,y coordingate into a pixel position
      const pixelPosition = getPixels(x,y);

          //YOUR CODE
          //actually moving the piece to its initial position
      movePieceTo($(piece),pixelPosition.top,pixelPosition.left);
    });

      //this loop moves all the dark pieces to their initial positions
    $('div.piece.dark').each(function(index,piece) {

          //turning the index (from 0 - 11)
          //into a x,y square coordinate using math
      const y = Math.floor(index/4) + 5;
      const x = (index % 4) * 2 + (1-y%2);

          //turning the x,y coordinate into a pixel position
      const pixelPosition = getPixels(x,y);

          //YOUR CODE
          //moving the piece to its initial position
      movePieceTo($(piece),pixelPosition.top,pixelPosition.left);
    });

      //set up initial squares
      //the class 'movable' represents a square
      //that is unoccupied
    getMovableSquares().addClass('movable');

      //and now the events
    $('div.piece').click(function() {
          //turn `this` into a jQuery object
      const $this = $(this);

          //YOUR CODE
          //toggleing the 'selected' class of this piece
          //and possible deselecting other pieces
      toggleSelect($this);
    });

    $('div.square').click(function() {

          //turn `this` into a jQuery object
      const $this = $(this);

          //if $this is a legal square to move to...
      if ($this.hasClass('movable')) {

              //get the piece with the class 'selected'
        const $selectedPiece = $('div.piece.selected');

              //we only move if there is exactly one selected piece
        if ($selectedPiece.length === 1) {
                  //get the index of the square
                  //and translate it to pixel position
          const index = $this.prevAll().length;
          const x = index % 8;
          const y = Math.floor(index / 8);
          const pixels = getPixels(x,y);

                  //YOUR CODE
                  //actually do the moving
          movePieceTo($selectedPiece,pixels.top,pixels.left);

                  //YOUR CODE
                  //increment the move counter
          incrementMoveCount();

                  //un-select the piece
          $selectedPiece.removeClass('selected');

                  //set the new legal moves
          $('div.square').removeClass('movable');
          getMovableSquares().addClass('movable');
        }

      }
    });

  });

  // FUNCTIONS
  function setUpPieces() {
      //select all the divs with class 'piece'
    $('piece');
//add the 'light' class to half of them
    const  lightPieces = $('div.piece:even').addClass('light');
//jQuery's even and odd selector methods to assign the classes .light and .dark.
//add the 'dark' to the other half
    const  darkPieces = $('div.piece:odd').addClass('dark'); 

  }

  function movePieceTo($piece,newTop,newLeft) {
      //set the css 'top' and 'left'
      //attributes of the passed piece
      //to the arguments newTop and newLeft
    $piece.css('top', newTop);
    $piece.css('left', newLeft);

  }

  function setUpBoard() {
      //iterate through all of the divs
      //with class `square`
      //figure out whether each one should be
      //light or dark, and assign the proper class

      //heres a helper function that takes a number between
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
      //if $piece has the class 'selected',
      //remove it

      //if $piece does not have the class 'selected'
      //make sure no other divs with the class 'piece'
      //have that class, then set $piece to have the class

  }

  function incrementMoveCount() {
      //gets the html of the span with id
      //moveCount
      //turns it into a number
      //increments it by one
      //sets the html of the span with id moveCount
      //to the new move count
  }


});//end of JS load
