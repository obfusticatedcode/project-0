import * as React from "react";

type SquareCoordinate = [number, number];
interface SquareProps extends React.HTMLAttributes<HTMLDivElement> {
  coordinate: SquareCoordinate;
  className?: string;
}

const Square = ({ coordinate, className, ...props }: SquareProps) => {
  return (
    <div className={`Square ${className}`} {...props}>
      <span>{`${coordinate[0]}, ${coordinate[1]}`}</span>
    </div>
  );
};

export default Square;
