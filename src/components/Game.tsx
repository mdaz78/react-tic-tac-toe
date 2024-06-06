import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  let xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares: (string | null)[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    xIsNext = !xIsNext;
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
    xIsNext = move % 2 === 0;
  };

  const moves = history.map((_squares, move) => {
    const description = move ? `Go to move #${move}` : "Go to game start";

    return (
      <li key={move}>
        {currentMove !== move ? (
          <button onClick={() => jumpTo(move)}>{description}</button>
        ) : (
          <span className="bold">You are at move: {move}</span>
        )}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
