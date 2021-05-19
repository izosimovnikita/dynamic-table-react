import React from "react";

import "./DataType.scss";

function DataType({ handlerData }) {
  return (
    <div className="data-type">
      <button className="small-data" onClick={() => handlerData("small")}>Малая база данных</button>
      <button className="huge-data" onClick={() => handlerData("huge")}>Большая база данных</button>
    </div>
  );
}

export default DataType;
