import React from "react";
import "./App.css";
import Board from "./Board";
import Game from "./Game";

function App() {
  return (
    <div className="App-flex js-center">
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
}

export default App;
