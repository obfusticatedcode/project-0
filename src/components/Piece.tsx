import classname from "classnames";
import * as React from "react";

export type PieceValue = "White" | "Black" | "WhiteKing" | "BlackKing" | "None";

interface PieceProps {
  type: PieceValue;
  className?: string;
}

const Piece = ({ type, className, ...props }: PieceProps) => {
  return (
    <div
      className={classname("Piece", className, {
        "Piece--white": type.includes("White"),
        "Piece--black": type.includes("Black"),
      })}
      {...props}
    >
      {type}
    </div>
  );
};

export default Piece;
