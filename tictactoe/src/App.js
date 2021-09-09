import { Board } from './components/Board';
import React, { useState, useEffect } from "react";
import "./styles/root.scss";
import { CalculateWinner } from './components/CalculateWinner';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = CalculateWinner(board);

  const message = winner 
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? "X" : "O"}`;

  function handleSquareClick(position) {
      if (board[position])
      return;

      setBoard( (prev) => {
          return prev.map((square, pos) => {
              if (pos === position){
                  return isXNext ? "X" : "O";
              }
              return square;
          });
      });
      setIsXNext((prev) => !prev)
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board  board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
}

export default App;
