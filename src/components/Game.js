import React, { useState } from "react";
import Board from "./Board";
import Helper from "../helper/Helper";

const Game = () => {
  const [cells, setCells] = useState(Array.from({ length: 9 }).fill(""));
  const [xIsNext, setXisNext] = useState(false);
  const winner = Helper(cells);
  console.log(cells);

  const handleClick = (i) => {
    const cellCopy = [...cells];
    // If User clicked occupied or Game is won
    if (winner || cellCopy[i]) return;
    // Put an X or O in a Cell
    cellCopy[i] = xIsNext ? "X" : "O";
    setCells(cellCopy);
    setXisNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button onClick={() => setCells(Array.from({ length: 9 }).fill(""))}>
        START GAME
      </button>
    );
  };

  return (
    <div>
      <Board cell={cells} onClick={handleClick} />
      <p style={{fontSize: 30, fontFamily: "sans-serif"}}>
        {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
      </p>
      {startNewGame()}
    </div>
  );
};

export default Game;
