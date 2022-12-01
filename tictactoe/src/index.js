const View = require("./ttt-view.js")// require appropriate file
const Game = require("../ttt_node/game.js")// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  const tttNode = document.querySelectorAll(".ttt")[0];
  const v = new View(game, tttNode);
  v.setupBoard();

});
