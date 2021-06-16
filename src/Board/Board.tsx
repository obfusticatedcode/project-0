import "./Board.css";

import * as React from "react";

export interface BoardProps {}

type SquareNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type Board = Array<SquareNumber[]>;

type SquareCoordinate = [number, number];

interface SquareProps extends React.HTMLAttributes<HTMLDivElement> {
  coordinate: SquareCoordinate;
  className?: string;
}

const Square: React.VoidFunctionComponent<SquareProps> = ({
  coordinate,
  className,
  ...props
}) => {
  return (
    <div className={`Square ${className}`} {...props}>
      <span>{`${coordinate[0]}, ${coordinate[1]}`}</span>
    </div>
  );
};

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

const Board: React.VoidFunctionComponent<BoardProps> = () => {
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
