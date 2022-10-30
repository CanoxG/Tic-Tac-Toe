import React from "react";

const Squares = ({ value, onClick }) => {

  return (
    <div onClick={onClick} className="square">
      {value}
    </div>
  );
};

export default Squares;
