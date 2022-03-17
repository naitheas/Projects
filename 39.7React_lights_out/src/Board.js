import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/
const isLit = (odds) => {
  const num = Math.random();
  return num < odds;
};
function Board({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.50 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = Array.from({ length: nrows });
    // TODO: create array-of-arrays of true/false values
    for(let y =0; y < initialBoard.length;y++){
      initialBoard[y] = Array.from({ length: ncols });
    }
    for(let y =0; y < nrows;y++){
      for(let x =0; x < ncols;x++){
        initialBoard[y][x] = isLit(chanceLightStartsOn);
      }
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    for(let y= 0; y < nrows; y++){
      for(let x =0; x < ncols; x++){
        if (board[y][x] === true){
          return false;
        }
      }
    }
    return true;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let boardCopy = [...oldBoard];
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      if (x > 0) {
        flipCell(y, x - 1, boardCopy);
      }
      if (x < ncols) {
        flipCell(y, x + 1, boardCopy);
      }
      if (y > 0) {
        flipCell(y - 1, x, boardCopy);
      }
      if (y < ncols) {
        flipCell(y + 1, x, boardCopy);
      }
      // TODO: return the copy
      return boardCopy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  let gameBoard = [];
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`;
      row.push(
        <Cell
          ncols={ncols}
          nrows={nrows}
          key={coord}
          isLit={board[y][x]}
          flipCellsAroundMe={() => flipCellsAround(coord)}
        />
      );
    }
    gameBoard.push(<tr key={y}>{row}</tr>);
  }
  if (hasWon(board)) {
    return (
      <h1>
        Congratulations You Won!
      </h1>
    );
  }
  return (
    <div className="Board">
      <h1 className="Board-Header">Lights Out!</h1>
      <table className="Board-Table">
        <tbody>{gameBoard}</tbody>
      </table>
    </div>
  );

  // TODO
};

export default Board;
