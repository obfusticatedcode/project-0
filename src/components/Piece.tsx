import * as React from "react";
import SvgIcon from "./SvgIcon";

export type PieceValue = "White" | "Black" | "WhiteKing" | "BlackKing" | "None";

interface PieceProps {
  type: PieceValue;
  className?: string;
  id: string;
}

const Piece = ({ type, className, id, ...props }: PieceProps) => {
  if (type === "None") {
    return null;
  }

  const pieceColors = {
    None: "none",
    White: "#DD2E44",
    Black: "#34AC54",
    WhiteKing: "gold",
    BlackKing: "silver",
  };

  const pieceColor = pieceColors[type];

  return <SvgIcon id={id} color={pieceColor} />;
};

export default Piece;
