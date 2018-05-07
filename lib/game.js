'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // INSTRUCTIONS
//  To play Minesweeper, we wil create instances of MineSweeperGame
//    in command line.
//  For Example:
//    In the command line, navigate to the lib directory and rune `node`.
//    Run `.load game .js` to load the contents of this file.
//    Then create a Game instance and run commands like so:
//      let game - new game(3, 3, 3);
//      game.playMove(0, 1);
//      game.playMove(1, 2);
//      When done, run `.exit`;


var _board = require('./board.js');

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* CREATE GAME SUPERCLASS
1. Create a template for a minsweeper game
*/
var Game = exports.Game = function () {
  function Game(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Game);

    this._board = new _board2.default(numberOfRows, numberOfColumns, numberOfBombs);
  }
  // conditions for winning, losing, and continuing play


  _createClass(Game, [{
    key: 'playMove',
    value: function playMove(rowIndex, columnIndex) {
      this._board.flipTile(rowIndex, columnIndex);
      if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
        console.log('GAME OVER.');
        this._board.print();
      } else if (!this._board.hasSafeTiles()) {
        console.log('YOU WIN!');
      } else {
        console.log('Current Board:');
        this._board.print();
      }
    }
  }]);

  return Game;
}();