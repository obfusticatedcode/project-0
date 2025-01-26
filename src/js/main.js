import { Game } from "./game.js";
import "../css/main.css";

// Initialize game when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  game.init();

  // Handle instructions visibility
  const rulesButton = document.getElementById("rules-button");
  rulesButton.addEventListener("click", () => {
    const instructions = document.getElementById("instructions");
    const isHidden = instructions.classList.toggle("hidden");
    rulesButton.setAttribute("aria-expanded", !isHidden);
  });
});
