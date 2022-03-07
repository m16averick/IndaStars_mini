import React, { useEffect, useState } from "react";
import "./Grid.scss";

const GridFilters = ({ totalCount, cardList, setCardList }) => {
  const sortArrayStateOldest = () => {
    let temp = cardList.sort((a, b) => (a.receivedOn > b.receivedOn ? 1 : -1));
    setCardList([...temp]);
  };
  const sortArrayStateNewest = () => {
    let temp = cardList.sort((a, b) => (a.receivedOn < b.receivedOn ? 1 : -1));
    setCardList([...temp]);
  };
  

  const [activeFilter, setActiveFilter] = useState("none");

  useEffect(() => {
    if (activeFilter === "oldest") sortArrayStateOldest();
    if (activeFilter === "newest") sortArrayStateNewest();
  }, [activeFilter]);

  return (
    <>
      <div className="gridFilters">
        <div className="summary">
          <div className="row">
            CARDS IN TOTAL <span>{totalCount}</span>
          </div>
        </div>
        <div className="sortBy">
          Sort by{" "}
          <select
            id="sortBy"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
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
