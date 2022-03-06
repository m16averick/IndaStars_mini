import React, { useEffect } from "react";
import "./Grid.scss";

const GridFilters = (props) => {
  /*useEffect(() => {
    if(false) props.setCardList(cardList)
  }, [props.cardList]);
*/
  return (
    <>
      <div className="gridFilters">
        <div className="summary">
          <div className="row">
            CARDS IN TOTAL <span>{props.totalCount}</span>
          </div>
        </div>
        <div className="sortBy">
          Sort by{" "}
          <select id="sortBy">
            <option value="none">No sorting</option>
            <option value="newest">Received (Newest)</option>
            <option value="oldest">Received (Oldest)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export { GridFilters };
