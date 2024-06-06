import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const currentSquares = history[history.length - 1];

  console.log({ history });

  const handlePlay = (nextSquares: (string | null)[]) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info"></div>
    </div>
  );
}
