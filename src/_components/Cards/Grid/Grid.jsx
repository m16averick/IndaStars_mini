import React from "react";
import "./Grid.scss";
import { GridFilters } from "./GridFilters";

const Grid = ({props, totalCount, cardList, setCardList, children}) => {
  return (
    <div className="gridWrap">
      <GridFilters
        totalCount={totalCount}
        cardList={cardList}
        setCardList={setCardList}
      />
      <div className="cardGrid">{children}</div>
    </div>
  );
};

export { Grid };
