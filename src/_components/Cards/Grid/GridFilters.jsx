import React from "react";
import "./Grid.scss";

const GridFilters = (props) => {
  return (
    <>
      <div className="gridFilters">
        <div className="summary">
          <div className="row">
            CARDS IN TOTAL <span>{props.total}</span>
          </div>
        </div>
        <div className="sortBy">
          Sort by{" "}
          <select id="sortBy">
            <option value="newest">Received (Newest)</option>
            <option value="oldest">Received (Oldest)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export { GridFilters };
