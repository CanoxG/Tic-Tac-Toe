import React from "react";
import "./App.css";
import Squares from "./Squares";

const textAlign = {
  textAlign: 'center'
}

const Board = ({ cell, onClick}) => {
  return (
    <h2 style={textAlign}>
      <div className="container-grid">
        {cell.map((element, i) => (
          <Squares onClick={() => onClick(i)} key={i} value={element}/>
        ))}
      </div>
    </h2>
  );
};

export default Board;
