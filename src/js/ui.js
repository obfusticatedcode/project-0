/**
 * @class UI
 * @description Handles UI updates and interactions
 */
export class UI {
  /**
   * Updates the move counter display
   * @param {number} lightMoves - Number of light player moves
   * @param {number} darkMoves - Number of dark player moves
   */
  static updateMoveCounter(lightMoves, darkMoves) {
    const totalMoves = lightMoves + darkMoves;
    document.getElementById("moveCounter").textContent = totalMoves;
    document.getElementById("lightMoveCount").textContent = lightMoves;
    document.getElementById("darkMoveCount").textContent = darkMoves;
  }

  /**
   * Shows the winner announcement
   * @param {string} winner - The winning player ("light" or "dark")
   */
  static showWinner(winner) {
    const winnerElement = document.getElementById("winner");
    winnerElement.textContent = `${
      winner.charAt(0).toUpperCase() + winner.slice(1)
    } Wins!`;
    winnerElement.classList.remove("hidden");
  }

  /**
   * Toggles the visibility of the instructions panel
   */
  static toggleInstructions() {
    const instructions = document.querySelector(".instructions");
    instructions.classList.toggle("hidden");
  }

  /**
   * Updates the current player display
   * @param {string} player - The current player ("light" or "dark")
   */
  static updateCurrentPlayer(player) {
    // Remove the updateCurrentPlayer method since there's no current-player element in HTML
    console.log(`Current player: ${player}`);
  }
}
