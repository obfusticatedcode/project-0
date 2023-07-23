import * as React from "react";
import { PieceValue } from "../Piece";
import Square, { SquareCoordinate } from "../Square";
import "./Board.css";

type BoardState = PieceValue[][];

const initialBoardState: BoardState = [
  ["Black", "None", "Black", "None", "Black", "None", "Black", "None"],
  ["None", "Black", "None", "Black", "None", "Black", "None", "Black"],
  ["Black", "None", "Black", "None", "Black", "None", "Black", "None"],
  ["None", "None", "None", "None", "None", "None", "None", "None"],
  ["None", "None", "None", "None", "None", "None", "None", "None"],
  ["None", "White", "None", "White", "None", "White", "None", "White"],
  ["White", "None", "White", "None", "White", "None", "White", "None"],
  ["None", "White", "None", "White", "None", "White", "None", "White"],
];

function isMoveValid(
  state: BoardState,
  startPosition: SquareCoordinate,
  endPosition: SquareCoordinate
): boolean {
  const dx = endPosition[0] - startPosition[0];
  const dy = endPosition[1] - startPosition[1];

  if (state[startPosition[0]][startPosition[1]].includes("White")) {
    if (dx !== 1 && dx !== -1) {
      return false;
    }
  }

  if (state[startPosition[0]][startPosition[1]].includes("Black")) {
    if (dx !== 1 && dx !== -1) {
      return false;
    }
  }

  if (Math.abs(dy) !== 1) {
    return false;
  }

  if (state[endPosition[0]][endPosition[1]] !== "None") {
    return false;
  }

  return true;
}

function getCapturedSquare(
  startPosition: SquareCoordinate,
  endPosition: SquareCoordinate
): SquareCoordinate | null {
  const dx = endPosition[0] - startPosition[0];
  const dy = endPosition[1] - startPosition[1];

  if (Math.abs(dx) !== 2 || Math.abs(dy) !== 2) {
    return null;
  }

  return [startPosition[0] + dx / 2, startPosition[1] + dy / 2];
}

function updateBoardState(
  state: BoardState,
  startPosition: SquareCoordinate,
  endPosition: SquareCoordinate
): BoardState {
  const newState = [...state.map((row) => [...row])];
  const capturedSquare = getCapturedSquare(startPosition, endPosition);

  newState[endPosition[0]][endPosition[1]] =
    newState[startPosition[0]][startPosition[1]];
  newState[startPosition[0]][startPosition[1]] = "None";

  if (capturedSquare) {
    newState[capturedSquare[0]][capturedSquare[1]] = "None";
  }

  if (
    endPosition[0] === 0 &&
    newState[endPosition[0]][endPosition[1]] === "Black"
  ) {
    newState[endPosition[0]][endPosition[1]] = "BlackKing";
  }

  if (
    endPosition[0] === 7 &&
    newState[endPosition[0]][endPosition[1]] === "White"
  ) {
    newState[endPosition[0]][endPosition[1]] = "WhiteKing";
  }

  return newState;
}

const Board = () => {
  const [boardState, setBoardState] =
    React.useState<BoardState>(initialBoardState);
  const [selectedSquare, setSelectedSquare] =
    React.useState<SquareCoordinate | null>(null);

  const handleSquareClick = (coordinate: SquareCoordinate) => {
    if (selectedSquare) {
      if (isMoveValid(boardState, selectedSquare, coordinate)) {
        const newState = updateBoardState(
          boardState,
          selectedSquare,
          coordinate
        );
        setBoardState(newState);
      }
      setSelectedSquare(null);
    } else if (boardState[coordinate[0]][coordinate[1]] !== "None") {
      setSelectedSquare(coordinate);
    }
  };

  return (
    <div className="Board">
      {boardState.map((row, rowIndex) =>
        row.map((piece, columnIndex) => {
          const coordinate: SquareCoordinate = [rowIndex, columnIndex];
          return (
            <Square
              coordinate={coordinate}
              pieceType={piece}
              className={
                (rowIndex + columnIndex) % 2 === 0
                  ? "Square--isLight"
                  : "Square--isDark"
              }
              onClick={() => handleSquareClick(coordinate)}
              key={columnIndex}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
