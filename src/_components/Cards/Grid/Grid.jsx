import React from "react";
import "./Grid.scss";
import { GridFilters } from "./GridFilters";

const Grid = (props) => {
  return (
    <div className="gridWrap">
      <GridFilters
        totalCount={props.totalCount}
        cardList={props.cardList}
        setCardList={props.setCardList}
      />
      <div className="cardGrid">{props.children}</div>
    </div>
  );
};

export { Grid };
