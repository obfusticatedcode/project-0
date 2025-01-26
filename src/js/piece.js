/**
 * @class Piece
 * @description Represents a checker piece
 */
export class Piece {
  /**
   * Creates a new checker piece
   * @param {string} color - The piece color ("light" or "dark")
   * @param {boolean} [isKing=false] - Whether the piece is a king
   */
  constructor(color, isKing = false) {
    this.color = color;
    this.isKing = isKing;
    this.element = this.createElement();
  }

  /**
   * Creates the DOM element for the piece
   * @returns {HTMLElement} The piece element
   * @private
   */
  createElement() {
    const element = document.createElement("div");
    element.classList.add("piece", this.color);
    if (this.isKing) {
      element.classList.add("king");
    }
    return element;
  }

  /**
   * Moves the piece to a new position
   * @param {number} top - The top position in pixels
   * @param {number} left - The left position in pixels
   */
  moveTo(top, left) {
    this.element.style.top = top + "px";
    this.element.style.left = left + "px";
  }

  /**
   * Promotes the piece to king
   */
  promote() {
    this.isKing = true;
    this.element.classList.add("king");
  }

  /**
   * Removes the piece from the board
   */
  remove() {
    this.element.remove();
  }

  /**
   * Sets or removes the selected state of the piece
   * @param {boolean} selected - Whether the piece should be selected
   */
  setSelected(selected) {
    this.element.classList.toggle("selected", selected);
  }
}
