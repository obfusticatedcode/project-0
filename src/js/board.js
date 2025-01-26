/**
 * @class Board
 * @description Represents the checkers game board
 */
export class Board {
  /**
   * Creates a new game board
   * @param {number} width - The width of each square
   * @param {number} border - The border width between squares
   * @param {HTMLElement} boardElement - The DOM element for the board
   */
  constructor(width, border, boardElement) {
    this.width = width;
    this.border = border;
    this.boardElement = boardElement;
  }

  /**
   * Initializes the board by creating squares
   */
  init() {
    this.createSquares();
  }

  /**
   * Creates the checkerboard squares
   * @private
   */
  createSquares() {
    const squareCount = 8 * 8;
    for (let i = 0; i < squareCount; i++) {
      const square = document.createElement("div");
      square.classList.add("square", this.getSquareColor(i));
      square.dataset.index = i;
      this.boardElement.append(square);
    }
  }

  /**
   * Determines the color of a square based on its position
   * @param {number} index - The square's index
   * @returns {string} "light" or "dark"
   * @private
   */
  getSquareColor(index) {
    const x = index % 8;
    const y = Math.floor(index / 8);
    return (x + y) % 2 === 0 ? "light" : "dark";
  }

  /**
   * Converts grid coordinates to pixel position
   * @param {number} x - The x coordinate (0-7)
   * @param {number} y - The y coordinate (0-7)
   * @returns {Object} The pixel position {top, left}
   */
  getPixelPosition(x, y) {
    return {
      top: y * (this.width + this.border),
      left: x * (this.width + this.border),
    };
  }
}
