import React, { useState, useEffect } from "react";
import { Card } from "../../../_components/Cards/Card/Card";
import { Grid } from "../../../_components/Cards/Grid/Grid";
import axios from "axios";

const Cards = ({ children }) => {
  const [totalCount, setTotalCount] = useState(0);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    axios.get("/api/user/123/cards").then(function (response) {
      if (response.status === 200) {
        setTotalCount(response.data.totalCount);
        setCardList(response.data.cards);
      }
    });
  }, []);
  return (
    <>
      <Grid
        totalCount={totalCount}
        cardList={cardList}
        setCardList={setCardList}
      >
        {cardList.length > 0 ? (
          cardList.map((card) => {
            return (
              <Card
                key={card.id}
                id={card.id}
                amount={`${card.no} / ${card.count}`}
                imgUrl={card.image}
                title={card.name}
                subtitle={card.collectionName}
                power={card.properties[0].value}
                stars={card.properties[1].value}
                iName={card.poweredBy}
                isOnSwap={card.state.isOnSwap}
                isOnSale={card.state.isOnSale}
              />
            );
          })
        ) : (
          <p>There are no cards to display.</p>
        )}
      </Grid>
    </>
  );
};

export { Cards };
