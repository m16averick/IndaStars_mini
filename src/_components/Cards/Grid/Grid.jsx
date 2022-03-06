import React from "react";
import "./Grid.scss";
import { GridFilters } from "./GridFilters";

const Grid = (props) => {
  return (
    <div className="gridWrap">
      <GridFilters total={4}/>
      <div className="cardGrid">{props.children}</div>
    </div>
  );
};

export { Grid };
