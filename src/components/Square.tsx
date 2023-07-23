import * as React from "react";
import Piece, { PieceValue } from "./Piece";

export type SquareCoordinate = [number, number];

interface SquareProps {
  coordinate: SquareCoordinate;
  className?: string;
  pieceType: PieceValue;
  onClick: (coordinate: SquareCoordinate) => void;
}

const Square = ({
  coordinate,
  className,
  pieceType,
  onClick,
  ...props
}: SquareProps) => {
  return (
    <div
      className={`Square ${className}`}
      onClick={() => onClick(coordinate)}
      {...props}
    >
      <Piece type={pieceType} />
    </div>
  );
};

export default Square;
