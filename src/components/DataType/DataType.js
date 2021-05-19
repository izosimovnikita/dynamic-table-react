import React from "react";

import "./DataType.scss";

function DataType({ onSetData }) {
  return (
    <div className="data-type">
      <button onClick={() => onSetData("small")}>Малая база данных</button>
      <button onClick={() => onSetData("huge")}>Большая база данных</button>
    </div>
  );
}

export default DataType;
