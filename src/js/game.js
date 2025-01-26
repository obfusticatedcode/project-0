import { Board } from "./board.js";
import { Piece } from "./piece.js";
import { UI } from "./ui.js";

/**
 * @class Game
 * @description Controls the game logic and state
 */
export class Game {
  /**
   * Creates a new game instance
   */
  constructor() {
    this.board = new Board(46, 2, document.getElementById("board"));
    this.pieces = [];
    this.currentPlayer = "light";
    this.lightMoves = 0;
    this.darkMoves = 0;
    this.selectedPiece = null;
  }

  /**
   * Initializes the game
   */
  init() {
    this.board.init();
    this.placePieces();
    this.addEventListeners();
    UI.updateCurrentPlayer(this.currentPlayer);
  }

  /**
   * Places the initial pieces on the board
   * @private
   */
  placePieces() {
    const piecesContainer = document.getElementById("pieces");

    // Place dark pieces
    for (let i = 0; i < 12; i++) {
      const y = Math.floor(i / 4) + 5;
      const x = (i % 4) * 2 + (1 - (y % 2));
      const piece = new Piece("dark");
      const pos = this.board.getPixelPosition(x, y);
      piece.moveTo(pos.top, pos.left);
      piecesContainer.appendChild(piece.element);
      this.pieces.push(piece);
    }

    // Place light pieces
    for (let i = 0; i < 12; i++) {
      const y = Math.floor(i / 4);
      const x = (i % 4) * 2 + (1 - (y % 2));
      const piece = new Piece("light");
      const pos = this.board.getPixelPosition(x, y);
      piece.moveTo(pos.top, pos.left);
      piecesContainer.appendChild(piece.element);
      this.pieces.push(piece);
    }
  }

  /**
   * Adds event listeners for game interactions
   * @private
   */
  addEventListeners() {
    document.getElementById("board").addEventListener("click", (e) => {
      if (e.target.classList.contains("square")) {
        this.handleSquareClick(e.target);
      }
    });

    document.getElementById("pieces").addEventListener("click", (e) => {
      if (e.target.classList.contains("piece")) {
        this.handlePieceClick(e.target);
      }
    });

    document.getElementById("reset-button").addEventListener("click", () => {
      location.reload();
    });

    document.getElementById("rules-button").addEventListener("click", () => {
      UI.toggleInstructions();
    });
  }

  /**
   * Handles piece selection
   * @param {HTMLElement} pieceElement - The clicked piece element
   * @private
   */
  handlePieceClick(pieceElement) {
    const piece = this.pieces.find((p) => p.element === pieceElement);
    if (piece && piece.color === this.currentPlayer) {
      if (this.selectedPiece) {
        this.selectedPiece.setSelected(false);
      }
      piece.setSelected(true);
      this.selectedPiece = piece;
    }
  }

  /**
   * Handles square selection for piece movement
   * @param {HTMLElement} square - The clicked square element
   * @private
   */
  handleSquareClick(square) {
    if (this.selectedPiece && this.isValidMove(square)) {
      const targetPos = this.getSquarePosition(square);
      const pos = this.board.getPixelPosition(targetPos.x, targetPos.y);

      this.selectedPiece.moveTo(pos.top, pos.left);
      this.checkForPromotion(this.selectedPiece, targetPos.y);

      this.selectedPiece.setSelected(false);
      this.selectedPiece = null;

      if (this.currentPlayer === "light") {
        this.lightMoves++;
      } else {
        this.darkMoves++;
      }

      UI.updateMoveCounter(this.lightMoves, this.darkMoves);
      this.currentPlayer = this.currentPlayer === "light" ? "dark" : "light";
      UI.updateCurrentPlayer(this.currentPlayer);

      this.checkWinCondition();
    }
  }

  /**
   * Gets the grid position from a square element
   * @param {HTMLElement} square - The square element
   * @returns {Object} The grid position {x, y}
   * @private
   */
  getSquarePosition(square) {
    const index = parseInt(square.dataset.index);
    return {
      x: index % 8,
      y: Math.floor(index / 8),
    };
  }

  /**
   * Checks if a move is valid
   * @param {HTMLElement} targetSquare - The target square element
   * @returns {boolean} Whether the move is valid
   * @private
   */
  isValidMove(targetSquare) {
    const currentPos = this.getPiecePosition(this.selectedPiece);
    const targetPos = this.getSquarePosition(targetSquare);

    const dx = Math.abs(targetPos.x - currentPos.x);
    const dy = targetPos.y - currentPos.y;

    if (this.selectedPiece.isKing) {
      return dx === 1 && Math.abs(dy) === 1;
    } else {
      const direction = this.selectedPiece.color === "light" ? -1 : 1;
      return dx === 1 && dy === direction;
    }
  }

  /**
   * Gets the current grid position of a piece
   * @param {Piece} piece - The piece to check
   * @returns {Object} The grid position {x, y}
   * @private
   */
  getPiecePosition(piece) {
    const top = parseInt(piece.element.style.top);
    const left = parseInt(piece.element.style.left);
    return {
      x: left / (this.board.width + this.board.border),
      y: top / (this.board.width + this.board.border),
    };
  }

  /**
   * Checks if a piece should be promoted to king
   * @param {Piece} piece - The piece to check
   * @param {number} y - The current y position
   * @private
   */
  checkForPromotion(piece, y) {
    if (
      (piece.color === "light" && y === 0) ||
      (piece.color === "dark" && y === 7)
    ) {
      piece.promote();
    }
  }

  /**
   * Checks for win conditions
   * @private
   */
  checkWinCondition() {
    const lightPieces = this.pieces.filter((p) => p.color === "light").length;
    const darkPieces = this.pieces.filter((p) => p.color === "dark").length;

    if (lightPieces === 0) {
      UI.showWinner("dark");
    } else if (darkPieces === 0) {
      UI.showWinner("light");
    }
  }
}
