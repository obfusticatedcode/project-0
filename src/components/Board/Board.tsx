import "./Board.css";

import * as React from "react";
import Square from "../Square";

type SquareNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type Board = Array<SquareNumber[]>;

const board: Board = [
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
  [0, 1, 2, 3, 4, 5, 6, 7],
];

//const a1 = board[0][0]; // first row first square
// const a2 = board[0][1] // first row second square
// const h8 = board[7][7] // last row last square

const Board = () => {
  return (
    <div className="Board">
      {board.map((row, rowIndex) =>
        row.map((rowNumber, columnIndex) => {
          return (
            <Square
              coordinate={[rowIndex, rowNumber]}
              className={
                (rowIndex + rowNumber) % 2 === 0
                  ? "Square--isLight"
                  : "Square--isDark"
              }
              key={columnIndex}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
