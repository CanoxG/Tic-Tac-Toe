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

  return (
    <div>
      <Board cell={cells} onClick={handleClick} />
    </div>
  );
};

export default Game;
